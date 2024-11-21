import React from "react";
import Header from "../Components/Header";
export default function Mentions_legales() {
  return (
    <>
      <Header header__cv="displaynone" header__content="displaynone" />
      <main>
        <section class="mention-legales">
          <h1 class="mention-legales__h1">MENTIONS LÉGALES</h1>
          <section class="proprietaire-du-site">
            <h2 class="proprietaire-du-site__h2">
              Identification du propriétaire du site
            </h2>
            <p class="proprietaire-du-site__name">
              <span>Nom et prénom : </span>Martin Théo
            </p>
            <p class="proprietaire-du-site__mail">
              <span>Adresse e-mail : </span>contact@theomartin.fr
            </p>
          </section>
          <section class="hebergeur">
            <h2 class="hebergeur">Hébergeur du site</h2>

            <div class="hebergeur__groupe">
              <h3 class="hebergeur__groupe__h3">
                Nom de dommaine : https://theomartin.fr
              </h3>

              <p class="hebergeur__groupe__name">
                <span>Nom de l'hébergeur : </span>O2switch
              </p>
              <p class="hebergeur__groupe__address">
                <span>Adresse de l'hébergeur : </span>Chemin des Pardiaux,63000
                CLERMONT FERRAND, France
              </p>
              <p class="hebergeur__groupe__tel">
                <span>Numéro de téléphone de l'hébergeur :</span> +33.444446040
              </p>
              <p class="hebergeur__groupe__url">
                <span>Site internet :</span> https://www.o2switch.fr/
              </p>
            </div>
          </section>
          <section class="CGU">
            <h2 class="CGU__h2">Conditions générales d'utilisation du site</h2>
            <p class="CGU__objet">
              <span>Objet du site :</span> Ce site est un Portfolio à but non
              commercial, son seul but est de présenter mes compétences.
            </p>
            <p class="CGU__acces">
              <span>Accès au site :</span> Le site web est accessible
              gratuitement et librement à tous les publics.
            </p>
            <p class="CGU__propriete">
              <span>Propriété intellectuelle :</span> Le site web et l'ensemble
              de ses éléments, y compris les textes, images, vidéos et logos,
              sont protégés par le droit d'auteur et les autres droits de
              propriété intellectuelle. Toute reproduction, représentation,
              modification, publication, distribution ou transmission de ces
              éléments est interdite sans autorisation préalable du propriétaire
              du site.
            </p>
            <p class="CGU__liens">
              <span>Liens hypertextes : </span>Le site web contient des liens
              hypertextes vers d'autres sites web. Le propriétaire du site n'est
              pas responsable du contenu des sites web accessibles via ces liens
              hypertextes. La création de liens hypertextes vers le site web est
              autorisée sous réserve de ne pas porter atteinte à l'image du site
              et de ne pas utiliser de techniques trompeuses.
            </p>
            <p class="CGU__responsabilite">
              <span>Responsabilité :</span> Le propriétaire du site ne peut être
              tenu responsable des dommages directs ou indirects résultant de
              l'utilisation du site web, y compris les dommages matériels, les
              pertes de données et les atteintes à l'image. L'utilisateur est
              responsable de son propre matériel et de ses propres logiciels
              lors de l'utilisation du site web.
            </p>
          </section>
          <section class="prevention">
            <h2 class="prevention__h2">
              Les présentes mentions légales sont soumises au droit français. En
              cas de litige, les tribunaux français seront seuls compétents.
            </h2>
          </section>
        </section>
      </main>
    </>
  );
}
