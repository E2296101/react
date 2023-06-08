
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import Produits from "./components/Produits";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";



const App = () => {
/* const [produits, setProduits] = useState([]); */
  const [produits, setProduits] = useState([]);

 useEffect(() => {
   const getTasks = async () => {
     const listeProduits= await fetchProduits();
     setProduits(listeProduits);
   };
   getTasks();
 }, []); 

 console.log(produits);

   const fetchProduits = async () => {
     const res = await fetch("http://localhost:5000/produits");
     const data = await res.json();
     return data;
   };

  const supprimerProduits = async (id) => {
       await fetch(`http://localhost:5000/produits/${id}`, {
         method: "DELETE",
       });
   
    setProduits(produits.filter((produit) => produit.id !== id));
  };

  const ajouterProduit= async (produit)=>{
    const res = await fetch("http://localhost:5000/produits", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(produit),
    });
  let newProduit = await res.json();
  const id = Math.floor(Math.random() * 1000);
  newProduit = { id, ...newProduit };

  setProduits([...produits, newProduit]);      

  };

  const modifierProduit = async (produitModifier) => {

       await fetch(`http://localhost:5000/produits/${produitModifier.id}`, {
      method: "PUT", 
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(produitModifier),
    });
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

        <style>
          {`
          .overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: rgb(38, 56, 65);
            background-color: rgba(200, 200, 200, 0.7); /* Couleur de fond gris clair avec une opacité de 0.7 */
            padding: 20px;
          }
          `}
        </style>
      </head>
      <body>
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
       {/*  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script> */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
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
