import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
export default function Nav() {
  const [sidenavActive, setSidenavActive] = useState(false);
  const handleOpenNav = () => {
    setSidenavActive(true);
  };
  const handleCloseNav = () => {
    setSidenavActive(false);
  };

  return (
    <>
      <nav className="nav">
        <div
          className={`nav__sidenav ${
            sidenavActive ? "nav__sidenav--active" : ""
          }`}
        >
          <i
            className="nav__sidenav__close fa-solid fa-x"
            onClick={handleCloseNav}
          ></i>
          <ul className="nav__sidenav__ul">
            <li className="nav__sidenav__ul__li">
              <HashLink to="/#a-propos" className="nav__sidenav__ul__li__a">
                À PROPOS
              </HashLink>
            </li>
            <li className="nav__sidenav__ul__li">
              <HashLink to="/#mes-projets" className="nav__sidenav__ul__li__a">
                PROJETS
              </HashLink>
            </li>
            <li className="nav__sidenav__ul__li">
              <HashLink
                to="/#mes-competences"
                className="nav__sidenav__ul__li__a"
              >
                COMPÉTENCES
              </HashLink>
            </li>
            <li className="nav__sidenav__ul__li">
              <HashLink to="/#mon-parcours" className="nav__sidenav__ul__li__a">
                PARCOURS
              </HashLink>
            </li>
          </ul>
        </div>
        <i className="nav__burger fa-solid fa-bars" onClick={handleOpenNav}></i>
      </nav>
    </>
  );
}
