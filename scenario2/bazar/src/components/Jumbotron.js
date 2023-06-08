import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bbImage from "./img/bb.jpg"; // Chemin vers l'image

const Jumbotron = () => {

 useEffect(() => {
   document.title = "Acceuil"; 
   return () => {
     document.title = "Le Bazar";
   };
 }, []);


  return (
    <div className="jumbotron mt-3 position-relative">
      <img src={bbImage} alt="bazar" className="img-fluid" />
      <div className="overlay">
        <h1 className="display-4">Bienvenue au bazar de l'electromenager !</h1>
        <p className="lead">
          Découvrez notre large sélection de produits de qualité.
        </p>
        
         <Link to="/produits" className="btn btn-primary btn-lg">Voir les produits</Link>
      </div>
    </div>
  );
};

export default Jumbotron;
