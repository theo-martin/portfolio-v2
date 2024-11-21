import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Modal from "../Components/Modal.jsx";
import projectsData from "../projects.json";
import logo_HTML5 from "../Images/HTML5.webp";
import logo_CSS3 from "../Images/CSS3.webp";
import logo_Sass from "../Images/Sass.webp";
import logo_BEM from "../Images/BEM.webp";
import logo_javascript from "../Images/javascript.webp";
import logo_react from "../Images/react.webp";
import logo_redux from "../Images/logo-redux.webp";
import logo_GIT from "../Images/git.webp";
import logo_API from "../Images/API.webp";
import logo_AGILE from "../Images/methode-Agile.webp";
import images from "../images"; // Importer le fichier des images

export default function Home() {
  const sortedProjectsData = [...projectsData].sort((a, b) => b.id - a.id); // Trier les projets du plus récent au plus ancien
  const [projects, setProjects] = useState(sortedProjectsData);
  const [isAscending, setIsAscending] = useState(false);
  const [sortOrder, setSortOrder] = useState(
    "Affichage du plus récent au plus ancien"
  ); // État pour l'ordre de tri actuel

  // Fonction pour trier les projets
  const sortProjects = () => {
    const sortedProjects = [...projects].sort((a, b) =>
      isAscending ? b.id - a.id : a.id - b.id
    );
    setProjects(sortedProjects);
    setIsAscending(!isAscending); // Inverser l'ordre de tri
    setSortOrder(
      isAscending
        ? "Affichage du plus récent au plus ancien"
        : "Affichage du plus ancien au plus récent"
    ); // Mettre à jour le texte de l'ordre de tri
  };

  return (
    <>
      <Header header__cv="header__cv" header__content="header__content" />
      <main>
        <section className="a-propos" id="a-propos">
          <h2 className="a-propos__h2">À propos</h2>
          <div className="a-propos__contour">
            <p className="a-propos__contour__p">
              Au cours de ma formation "intégrateur web" d'OpenClassrooms,
              <br /> j'ai progressivement étendu mes compétences en passant de
              l'intégration HTML/CSS à la création d'applications web dynamiques
              avec React et Redux.
              <br /> J'ai également appris à optimiser mes projets pour le SEO
              et à travailler en équipe selon les principes agiles.
              <br />
              Suite à cette formation,
              <br /> je cherche un emploi en tant que développeur web front-end
              junior.
            </p>
          </div>
        </section>
        <section id="mes-projets" className="mes-projets">
          <h2 className="mes-projets__h2">Mes projets</h2>
          <div className="mes-projets__sort">
            <button
              className="mes-projets__sort__button"
              onClick={sortProjects}
            >
              {isAscending
                ? "Trier du plus récent au plus ancien"
                : "Trier du plus ancien au plus récent"}
            </button>
            <p className="mes-projets__sort__p">{sortOrder}</p>
          </div>
          {/* Afficher l'ordre de tri actuel */}
          <div className="mes-projets__groupe">
            {projects.map((project) => (
              <Modal
                key={project.id}
                id={project.id}
                mockup={images[project.mockup]}
                altmockup={`mockup du projet ${project.name}`}
                nom={project.name}
                figcaption={
                  project.figcaptioncolor === "black"
                    ? "figure__figcaption figure__figcaption--black"
                    : "figure__figcaption"
                }
              />
            ))}
          </div>
        </section>
        <section id="mes-competences" className="mes-competences">
          <h2 className="mes-competences__h2">Mes compétences</h2>
          <div className="mes-competences__groupe">
            <img
              src={logo_HTML5}
              alt="logo-HTML5"
              className="mes-competences__groupe__logo"
            />
            <img
              src={logo_CSS3}
              alt="logo-CSS3"
              className="mes-competences__groupe__logo"
            />
            <img
              src={logo_Sass}
              alt="logo-Sass"
              className="mes-competences__groupe__logo"
            />
            <img
              src={logo_BEM}
              alt="logo-BEM"
              className="mes-competences__groupe__logo"
            />
            <img
              src={logo_javascript}
              alt="logo-javascript"
              className="mes-competences__groupe__logo"
            />
            <img
              src={logo_react}
              alt="logo-react"
              className="mes-competences__groupe__logo"
            />
            <img
              src={logo_redux}
              alt="logo-react"
              className="mes-competences__groupe__logo"
            />
            <img
              src={logo_GIT}
              alt="logo-git"
              className="mes-competences__groupe__logo"
            />
            <img
              src={logo_API}
              alt="logo-API"
              className="mes-competences__groupe__logo"
            />
            <img
              src={logo_AGILE}
              alt="logo-methode-Agile"
              className="mes-competences__groupe__logo"
            />
          </div>
        </section>
        <section className="mon-parcours" id="mon-parcours">
          <h2 className="mon-parcours__h2">Mon parcours</h2>
          <div className="mon-parcours__contour">
            <div className="groupe-texte">
              <div className="groupe-texte__bloc">
                <i className="groupe-texte__bloc__i fa-solid fa-desktop"></i>
                <p className="groupe-texte__bloc__dates">2023 - 2024</p>
                <h3 className="groupe-texte__bloc__h3">
                  Bac+2 - Intégrateur Web
                </h3>
                <p className="groupe-texte__bloc__lieu groupe-texte__bloc__trait">
                  Openclassrooms
                </p>
              </div>
              <div className="groupe-texte__bloc">
                <p className="groupe-texte__bloc__dates">2018 – 2020</p>
                <h3 className="groupe-texte__bloc__h3">
                  BTS - SIO SISR <br />
                  (Services Informatiques aux Organisations) spécialité
                  Solutions d’Infrastructure, Systèmes et Réseaux
                </h3>
                <p className="groupe-texte__bloc__lieu">
                  Lycée Fulbert, Chartres (28)
                </p>
                <p className="groupe-texte__bloc__stage groupe-texte__bloc__trait">
                  + 12 semaines de stages
                </p>
              </div>
              <div className="groupe-texte__bloc">
                <p className="groupe-texte__bloc__dates">2015 – 2018</p>
                <h3 className="groupe-texte__bloc__h3">
                  Bac Pro - SEN TR <br />
                  (Systeme Éléctronique et Numérique) option Télécommunication
                  et Réseau
                </h3>
                <p className="groupe-texte__bloc__lieu">
                  Lycée Sully, Nogent le Rotrou (28)
                </p>
                <p className="groupe-texte__bloc__stage groupe-texte__bloc__trait">
                  + 22 semaine de stage
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer footer="footer" footerbutton="footer__button" />
      </main>
    </>
  );
}
