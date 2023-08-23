import React, { useState } from "react";
import "./navbar.css";

import {  Link } from "react-router-dom";

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const remove = () => {
    setActive("navBar ");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <h1>News</h1>
          </Link>
        </div>



          <div className={active}>
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

            <div onClick={remove} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
        
   
        <div onClick={showNav} className="toogleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
