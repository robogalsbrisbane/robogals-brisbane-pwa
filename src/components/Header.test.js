import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

function toggleCallback() {
}

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Header toggleSidebar={toggleCallback} />, div);
});
