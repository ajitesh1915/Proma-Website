import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Cartify</h1>
        <p>Search your favourite products, and get the delivery at your doorstep</p>

        <p>Copyrights 2023 &copy; Vaishnavi Pandey</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/_vaishnavipandey._/">Instagram</a>
        <a href="https://www.facebook.com/vaishnavi.pandey.75054689/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
