import React, { useState, useMemo } from "react";
import projects from "../projects.json";
import useModal from "../hooks/useModal";
import images from "../images";
export default function Modal(props) {
  const { isOpen, openModal, closeModal } = useModal();
  const [modalContent, setModalContent] = useState(null);
  // const handleOpenModal = (name) => {
  //   const matchingObject = projects.find((item) => item.name === name);
  //   if (matchingObject) {
  //     setModalContent({
  //       ...matchingObject,
  //       image1: images[matchingObject.image1],
  //     });
  //     openModal();
  //   } else {
  //     console.warn(`Aucun objet trouvé dans le tableau avec l'ID: ${name}`);
  //   }
  // };
  const findProjectByName = useMemo(
    () => (name) => {
      return projects.find((item) => item.name === name);
    },
    []
  );
  const handleOpenModal = (name) => {
    const matchingObject = findProjectByName(name);
    if (matchingObject) {
      setModalContent({
        ...matchingObject,
        image1: images[matchingObject.image1],
      });
      openModal();
    } else {
      console.warn(`Aucun objet trouvé dans le tableau avec l'ID: ${name}`);
    }
  };
  const handleDialogClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div id={props.id} className="mes-projets__groupe__contour">
        <figure className="figure">
          <img
            src={props.mockup}
            alt={props.altmockup}
            className="figure__img"
            onClick={() => handleOpenModal(props.nom)}
            data-toggle="modal"
            data-modal-id={props.nom}
          />
          <figcaption className={props.figcaption}>{props.nom}</figcaption>
        </figure>
      </div>
      {isOpen && modalContent && (
        <dialog open onClick={handleDialogClick}>
          <section
            className="section-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="section-modal__close xmark" onClick={closeModal}>
              <i className="fa-solid fa-xmark section-modal__close__i"></i>
            </div>
            <h2 className="section-modal__h2">{modalContent.name}</h2>
            <div className="section-modal__groupe-img">
              <img
                src={modalContent.image1}
                alt={modalContent.name}
                className="section-modal__groupe-img__img"
              />
            </div>
            <p className="section-modal__p">{modalContent.text}</p>
            <div className="section-modal__groupe-btn">
              {modalContent.github && (
                <a
                  href={modalContent.github}
                  className="section-modal__groupe-btn__btn"
                >
                  <i className="fa-brands fa-github section-modal__groupe-btn__btn__i"></i>
                  <p className="section-modal__groupe-btn__btn__p">Github</p>
                </a>
              )}
              {modalContent.rendu && (
                <a
                  href={modalContent.rendu}
                  className="section-modal__groupe-btn__btn"
                >
                  <p className="section-modal__groupe-btn__btn__p">
                    Voir le rendu
                  </p>
                </a>
              )}
            </div>
          </section>
        </dialog>
      )}
    </>
  );
}
