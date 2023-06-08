
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import Produits from "./components/Produits";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";



const App = () => {
/* const [produits, setProduits] = useState([]); */
  const [produits, setProduits] = useState([
    {
      id: 1,
      nom: "Iphone 11",
      description: "inpne 11 pro max , 256 Go de stockage",
      prix: 985.99,
      categorie: "Smartphone",
    },
    {
      id: 2,
      nom: "Iphone 14",
      description: "inpne 14 pro max , 256 Go de stockage",
      prix: 1400.00,
      categorie: "Smartphone",
    },
    {
      id: 3,
      nom: "Iphone 10",
      description: "inpne 10 pro max , 256 Go de stockage",
      prix: 249.99,
      categorie: "Smartphone",
    },
    {
      id: 4,
      nom: "Samsung S20",
      description: "inpne S20 , 64 Go de stockage",
      prix: 949.99,
      categorie: "Smartphone",
    },
    {
      id: 5,
      nom: "Xiaomi Redmi note 12",
      description:
        "Xiaomi Redmi note 12 , version internationalle , 256 Go de stockage",
      prix: 349.99,
      categorie: "Smartphone",
    },
    {
      id: 6,
      nom: "Samsung oled 46 pouces",
      description: "Samsung oled 46 pouces ",
      prix: 549.99,
      categorie: "Électroménagers",
    },
    {
      id: 7,
      nom: "Casseroule Tefal",
      description: "bon produit",
      prix: 45.99,
      categorie: "Vaisselles",
    },
  ]);

  const supprimerProduits = (id) => {
    console.log(id);
    setProduits(produits.filter((produit) => produit.id !== id));
  };

  const ajouterProduit=(produit)=>{
    console.log(produit);
    const id = Math.floor(Math.random()*1000)
    const newProduit = { id, ...produit };
    console.log(newProduit);
    setProduits([...produits, newProduit]);      

  };

  const modifierProduit = (produitModifier) => {
    console.log(produitModifier);
     setProduits(
       produits.map((produit) =>
         produit.id === produitModifier.id ? { ...produitModifier } : produit
       )
     );
  
  };

  

  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Le Bazar</title>
        {/* Lien vers les fichiers CSS de Bootstrap */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body  >
        <BrowserRouter>
          <div className="app-container d-flex flex-column min-vh-100">
            <NavBar />
            <Routes>
              <Route path="/" element={<Jumbotron />} />
            </Routes>
            <Routes>
              <Route
                path="/produits"
                element={
                  <Produits
                    produits={produits}
                    onAdd={ajouterProduit}
                    onEdit={modifierProduit}
                    onDelete={supprimerProduits}
                  />
                }
              />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </body>
      {/* Scripts JavaScript de Bootstrap */}
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossorigin="anonymous"
        ></script>
      </Helmet>
    </html>
  );
};

export default App;
