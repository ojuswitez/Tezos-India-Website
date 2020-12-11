import React, { useContext } from "react";
import StyleContext from "../contexts/StyleContext";
import "../styles/Footer.css";
import logo from "../assets/logo.png";
import dribbble from "../assets/Dribbble.svg";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import youtube from "../assets/YouTube.svg";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <div
      className={
        isDark ? "footer-container dark-footer-container" : "footer-container"
      }
    >
      <div className="footer-align-div">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-list">
          <ul className={isDark? "footer-menu dark-footer-menu" : "footer-menu"}>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social-links">
            <img src={dribbble} alt="" className="footer-align-img"/>
            <img src={facebook} alt="" className="footer-align-fb-img"/>
            <img src={twitter} alt="" className="footer-align-img"/>
            <img src={youtube} alt="" className="footer-align-img"/>
        </div>
        <div className={isDark?"footer-copyright dark-footer-copyright":"footer-copyright"}>
            <p>© Copyright 2019 Tezos India Foundation - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
