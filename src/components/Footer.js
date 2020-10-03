import React from "react";

export default function Footer(props) {
  return (
    <footer className="page-footer font-small special-color-dark pt-4">
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="#!">{props.copyright}</a>
      </div>
    </footer>
  );
}
