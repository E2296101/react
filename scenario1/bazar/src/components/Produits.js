import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";



const Produits = ({ produits,onAdd,onEdit, onDelete }) => {

 useEffect(() => {
   document.title = "Produits";
   return () => {
     document.title = "Le Bazar";
   };
 }, []);


  /*  ajouter produit */
      const [nom, setNom] = useState("");
      const [description, setDescription] = useState("");
      const [prix, setPrix] = useState(0);
      const [categorie, setCategorie] = useState("");

     const onSubmit = (e)=>{
        e.preventDefault()
        if (selectedProduit) {
            onEdit({id:selectedProduit.id,nom, description, prix, categorie });
        } else {
            onAdd({nom, description, prix, categorie}); 
            setNom("");
            setDescription("");
            setPrix(0);
            setCategorie("");
        }    
    }
 
  /*  fin ajouter produit */

  /* Modification produit */
  const [selectedProduit, setSelectedProduit] = useState(null);

  const handleModifier = (produit) => {
    debugger;
    setSelectedProduit(produit);
    // Réinitialiser les valeurs des champs d'entrée
    setNom(produit.nom);
    setDescription(produit.description);
    setPrix(produit.prix);
    setCategorie(produit.categorie);  
  };

  /* Fin modification produit */

  /*  supprimer produit */
  const [selectedProductId, setSelectedProductId] = useState(null);
  const handleDeleteConfirmation = (productId) => {
    setSelectedProductId(productId);
  };

  const handleDelete = (productId) => {
    onDelete(productId);
    setSelectedProductId(null); // Réinitialiser la valeur de selectedProductId à null
  };
  /*  fin supprimer produit */
  const viderChamps = () => {
         setNom("");
         setDescription("");
         setPrix(0);
         setCategorie(""); 
         setSelectedProduit(null);
  };
  
  return (
    <div className="container mt-3">
      <h1>Liste des produits</h1>

    <button className="btn btn-primary mb-3" data-toggle="modal" data-target="#ajouterProduitModal" onClick={() => viderChamps()}>Ajouter un nouvel article</button>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Description</th>
            <th scope="col">Prix</th>
            <th scope="col">Catégorie</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {produits.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center mt-3">
                {" "}
                <p className="text-center mt-3 fw-bold fs-5">
                  Aucun produit disponible
                </p>
              </td>
            </tr>
          ) : (
            produits.map((produit) => (
              <tr key={produit.id}>
                <td>{produit.nom}</td>
                <td>{produit.description}</td>
                <td>{produit.prix} CAD</td>
                <td>{produit.categorie}</td>
                <td>
                  <button className="btn btn-primary btn-sm mr-2" data-toggle="modal" data-target="#ajouterProduitModal" onClick={() => handleModifier(produit)}>Modifier</button>                  
                  <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleDeleteConfirmation(produit.id)}>Supprimer</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* modal suppression */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Êtes-vous sûr de vouloir supprimer cette ligne ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <Link
                onClick={() => handleDelete(selectedProductId)}
                data-bs-dismiss="modal"
                className="btn btn-danger btn-sm"
              >
                Supprimer
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* fin modal suppression */}
      {/* modal jout */}
        <div className="modal fade" id="ajouterProduitModal" tabIndex="-1" role="dialog" aria-labelledby="ajouterProduitModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="ajouterProduitModalLabel">{selectedProduit ? "Modifier l'article" : "Ajouter un nouvel article"}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Fermer">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
               
                <form className="add-form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="nom">Nom du produit</label>
                    <input type="text" className="form-control" value={nom} placeholder="Entrez le nom du produit" onChange={(e)=> setNom(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description du produit</label>
                    <textarea className="form-control" value={description} rows="3" placeholder="Entrez la description du produit" onChange={(e)=> setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="prix">Prix du produit</label>
                    <input type="number" className="form-control" value={prix} placeholder="Entrez le prix du produit" onChange={(e)=> setPrix(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="categorie">Catégorie du produit</label>
                    {/* <input type="text" className="form-control" value={categorie} placeholder="Entrez la catégorie du produit" onChange={(e)=> setCategorie(e.target.value)}/> */}
                    <select className="form-control" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                        <option value="">Sélectionnez une catégorie</option>
                        <option value="Smartphone">Smartphone</option>
                        <option value="Électroménagers">Électroménagers</option>
                        <option value="Vaisselles">Vaisselles</option>
                    </select>                    
                </div>
                            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                <input type="submit" className="btn btn-primary" value={selectedProduit ? "Modifier" : "Ajouter"} />
            </div>
                </form>
            </div>
            </div>
        </div>
        </div>
      {/* fin modal jout */}
    </div>
  );
};

export default Produits;
