import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default () => (
  <div className="primary-bg-darker Footer-div">
    <div className="columns">
      <div className="column Footer-column">
        <h4>Get Involved!</h4>
        <p>
					If you are a parent, educator, school student, university student
          or industry professional of any age and gender,
          you can get involved with us. Find out more <Link to="/volunteer-with-us">here</Link>!
        </p>
      </div>

      <div className="column Footer-column">
				<h4>Follow us!</h4>
        <p>
          <a target="_blank" href="https://www.facebook.com/Robogals.Brisbane">Facebook</a>
        </p>
        <p>
          <a target="_blank" href="https://au.linkedin.com/company/robogals-brisbane">Linkedin</a>
        </p>
        <p>
          <a href="mailto:brisbane.exec@robogals.org ">Email</a>
        </p>
      </div>

      <div className="column Footer-column">
        <p>Code by <a href="https://royportas.com">Roy Portas</a> and Sreema Ajith.</p>
      </div>
    </div>
  </div>
);
