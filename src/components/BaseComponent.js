import { Component } from 'react';

/**
 * Contains logic to check if a component is mounted
 */
class BaseComponent extends Component {

  constructor(props) {
    super(props);

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  updateState(obj) {
    if (this._isMounted) {
      this.setState(obj);
    }
  }
}

export default BaseComponent;
