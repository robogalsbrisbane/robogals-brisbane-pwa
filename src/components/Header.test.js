import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './Header';

function toggleCallback() {
}

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Header toggleSidebar={toggleCallback} />
    </Router>,
    div);
});
