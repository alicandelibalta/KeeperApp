import React from "react";
import "./index.scss";


const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer>
    <p>Copyright ⓒ {currentYear}</p>
  </footer>
);

export default Footer;
