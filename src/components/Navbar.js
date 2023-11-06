import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="header-containner">
      <Link to="/" style={{ textDecoration: 'none', color: '#111' }}>
        <h1>
          <span>FITNESS</span>-DAY
        </h1>
      </Link>
      <span>
        <i class="fa-regular fa-envelope">@abdurrayhan565@gmail.com</i>
      </span>
      <div className="header_nav">
        <Link className="header_link">sign-in</Link>
        <Link className="header_link ">sign-up</Link>
      </div>
    </div>
  );
}

export default Navbar;
