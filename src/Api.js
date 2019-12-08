import axios from 'axios';

/**
 * Contains methods for getting data
 * from the API
 */
class Api {
  constructor() {
    this.apiUrl = process.env.REACT_APP_API_ADDRESS;

    this.apiPaths = {
      actualmenu: '/wp-json/wp-api-menus/v2/menus/2',
      menu: '/wp-json/wp-api-menus/v2/menus/4',
      frontpage: '/wp-json/wp/v2/frontpage',
      page: '/wp-json/wp/v2/pages',
      media: '/wp-json/wp/v2/media',
      partners: '/wp-json/wp/v2/sponsors',
      executives: '/wp-json/wp/v2/executives'
    };
  }

  getNotFound() {
    return {
      title: {
        rendered: "Page not found"
      },
      content: {
        rendered: "<p>Return to the <a href=\"/\">home page</a></p>"
      }
    }
  }

  /**
   * Returns the API URL
   */
  getApiUrl(pathKey) {
    return `${this.apiUrl}${this.apiPaths[pathKey]}`;
  }

  /**
   * Returns the links from the primary menu
   */
  getMenuLinks() {
    return axios.get(this.getApiUrl('menu'))
      .then((resp) => {
        return resp.data.items;
      })
      .catch((err) => {
        return [];
      });
  }

  /**
   * Retrieves a media item
   */
  getMedia(mediaId) {

    if (mediaId == null) {
      // return an empty promise
      return new Promise((resolve, reject) => {
        resolve(null);
      });
    }

    const url = this.getApiUrl('media');
    const query = `${url}/${mediaId}`;

    return axios.get(query)
      .then((resp) => {
        return resp.data.guid.rendered;
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  /**
   * Returns a page by slug
   */
  getPage(page_slug) {
    if (page_slug == null) {
      // return an empty promise
      return new Promise((resolve, reject) => {
        resolve(null);
      });
    }

    const url = this.getApiUrl('page');
    const query = `${url}?slug=${page_slug}`;

    return axios.get(query)
      .then((resp) => {
        if (resp.data.length > 0) {
          return resp.data[0];
        }

        return this.getNotFound();
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  /**
   * Returns the executives
   */
   getExecutives() {
     return axios.get(this.getApiUrl('executives'))
       .then((resp) => {
         return resp.data;
       })
       .catch((err) => {
         // console.log(err);
       });
   }


     /**
      * Returns the partners
      */
     getPartners() {
       return axios.get(this.getApiUrl('partners'))
         .then((resp) => {
           return resp.data;
         })
         .catch((err) => {
           // console.log(err);
         });
     }



  /**
   * Returns the frontpage
   */
  getFrontpageSlug() {
    return axios.get(this.getApiUrl('frontpage'))
      .then((resp) => {
        return resp.data.slug;
      })
      .catch((err) => {
        // console.log(err);
      });
  }
}

export default Api;
