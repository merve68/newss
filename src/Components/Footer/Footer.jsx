import React from "react";
import "./footer.css"
import {  Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footerMenu">
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/" className="navLink">
                  Anasayfa
                </Link>
              </li>

              <li className="navItem">
                <Link to="/watch" className="navLink">
                  En Çok İzlenenler
                </Link>
              </li>
              <li className="navItem">
              <Link to="/flash" className="navLink">
                  Son Dakika
                </Link>
              </li>
              <li className="navItem">
                <Link to="/contact" className="navLink">
                  İletişim
                </Link>
              </li>
            </ul>

            </div>
        </div>
    )
}

export default Footer;