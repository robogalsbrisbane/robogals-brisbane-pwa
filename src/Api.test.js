import Api from './Api.js';
const api = new Api();

it('contains all required api paths', () => {
  const actualPaths = Object.keys(api.apiPaths);
  const expectedPaths = [
    'menu',
    'frontpage',
    'page',
    'media',
    'partners',
  ];

  expect(expectedPaths).toEqual(actualPaths);
});

it('gets correct url with getApiUrl', () => {
  const expected = `TEST_URL${api.apiPaths.menu}`;
  expect(api.getApiUrl('menu')).toEqual(expected);
});
