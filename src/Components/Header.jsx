import { HashLink } from "react-router-hash-link";
import CV from "../Images/CV-Theo.pdf";
import download_regular_48 from "../Images/download-regular-48.webp";
import PDP from "../Images/photo-de-profil.webp";
import chevron_down_redular_48 from "../Images/chevron-down-regular-48.webp";
import logo_HTML5 from "../Images/HTML5.webp";
import logo_CSS3 from "../Images/CSS3.webp";
import logo_Sass from "../Images/Sass.webp";
import logo_BEM from "../Images/BEM.webp";
import logo_javascript from "../Images/javascript.webp";
import logo_react from "../Images/react.webp";
import Nav from "./Nav";
export default function Header(props) {
  return (
    <>
      <header id="header" className="header">
        <a className={props.header__cv} href={CV} download="theo-martin-CV.pdf">
          <img
            className="header__cv__img"
            src={download_regular_48}
            alt="download"
          />
          <p className="header__cv__p">CV</p>
        </a>
        <Nav />
        <section className={props.header__content}>
          <div className="header__content__div">
            <img
              className="header__content__div__img"
              src={PDP}
              alt="photo-de-profil"
            />
          </div>

          <div className="details">
            <div className="details__text">
              <h1 className="details__h1">THÉO MARTIN</h1>
              <p className="details__p">Développeur Web Front-end</p>
              <a href="https://github.com/theo-martin" className="github">
                <i className="github__i fa-brands fa-github"> </i>
                <p className="github__p">Github</p>
              </a>
            </div>
            <div className="header-icon">
              <HashLink to="#a-propos" className="header-icon__chevron">
                <img
                  className="header-icon__chevron__img"
                  src={chevron_down_redular_48}
                  alt="chevron"
                />
              </HashLink>

              <div className="header-icon__container">
                <img
                  className="header-icon__logo"
                  src={logo_HTML5}
                  alt="logo-HTML5"
                />
                <img
                  className="header-icon__logo"
                  src={logo_CSS3}
                  alt="logo-CSS3"
                />
                <img
                  className="header-icon__logo"
                  src={logo_Sass}
                  alt="logo-Sass"
                />
                <img
                  className="header-icon__logo"
                  src={logo_BEM}
                  alt="logo-BEM"
                />
                <img
                  className="header-icon__logo"
                  src={logo_javascript}
                  alt="logo-javascript"
                />
                <img
                  className="header-icon__logo"
                  src={logo_react}
                  alt="logo-react"
                />
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
