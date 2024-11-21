import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// import Image404 from "../Images/Image404.png";
export default function Page404() {
  return (
    <>
      <div className="Page404">
        {/* <img className="Page404__img" src={Image404} alt="404"></img> */}
        <p className="Page404__p404">404</p>
        <p className="Page404__p">
          <span>Oups! La page que</span>
          <span>vous demandez n'existe pas.</span>
        </p>
        <Link to="/" className="Page404__link">
          Retourner sur la page d'accueil
        </Link>
      </div>

      <Footer
        footer="footer footer--404"
        footerbutton="footer__button footer__button--404"
      />
    </>
  );
}
