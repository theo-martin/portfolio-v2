import CV from "../Images/CV-Theo.pdf";
import download_regular_48_blanc from "../Images/download-regular-48--blanc.webp";

export default function Footer(props) {
  return (
    <>
      <footer id="footer" className={props.footer}>
        <a
          className={props.footerbutton}
          href={CV}
          download="theo-martin-CV.pdf"
        >
          <p className="footer__button__p">Telecharger mon cv</p>
          <img
            className="footer__button__img"
            src={download_regular_48_blanc}
            alt="download"
          />
        </a>
        <a href="mailto:contact@theomartinweb.fr" className="footer__contact">
          <i className="footer__contact__i fa-regular fa-envelope"></i>
          <p className="footer__contact__p">contact@theomartin.fr</p>
        </a>
        <a href="https://github.com/theo-martin" className="footer__github">
          <i className="footer__github__i fa-brands fa-github"> </i>
          <p className="footer__github__p">Github</p>
        </a>
        <a href="mentions-legales" className="footer__mentions-legales">
          <p className="footer__mentions-legales__p">Mentions légales</p>
        </a>
      </footer>
    </>
  );
}
