import React from "react";

export default function Header(props) {
  return (
    <nav className="navbar navbar-dark stylish-color">
      <a className="navbar-brand" href="#!">
        Lab 38 Leo and Will
      </a>

      <ul className="navbar-nav ml-auto nav-flex-icons">
        <li className="nav-item">
          <a className="nav-link waves-effect waves-light" href="#!">
            {props.count}
            <i className="fas fa-cart-arrow-down"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}


