import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import axios from "axios";
const data = [
  {
    id: 1,
    nameUser: "John Doe",
    lieuUser: "Ankorondrano",
    telUser: "03422222222",
    passUser: "kinfykinfy",
  },
  {
    id: 2,
    nameUser: "Chantal",
    lieuUser: "Analakelu",
    telUser: "03425222222",
    passUser: "kinfykinfy",
  },
  {
    id: 1,
    nameUser: "John Doe",
    lieuUser: "Ankorondrano",
    telUser: "03422222222",
    passUser: "kinfykinfy",
  },
  {
    id: 2,
    nameUser: "Chantal",
    lieuUser: "Analakelu",
    telUser: "03425222222",
    passUser: "kinfykinfy",
  },
  {
    id: 1,
    nameUser: "John Doe",
    lieuUser: "Ankorondrano",
    telUser: "03422222222",
    passUser: "kinfykinfy",
  },
  {
    id: 2,
    nameUser: "Chantal",
    lieuUser: "Analakelu",
    telUser: "03425222222",
    passUser: "kinfykinfy",
  },
  {
    id: 1,
    nameUser: "John Doe",
    lieuUser: "Ankorondrano",
    telUser: "03422222222",
    passUser: "kinfykinfy",
  },
  {
    id: 2,
    nameUser: "Chantal",
    lieuUser: "Analakelu",
    telUser: "03425222222",
    passUser: "kinfykinfy",
  },
  // Ajoutez d'autres données ici
];
const columns = [
  {
    Header: "Nom",
    accessor: "name",
  },
  {
    Header: "Prix",
    accessor: "prix",
  },
  {
    Header: "Categorie",
    accessor: "categorie",
  },
  {
    Header: "Photo",
    accessor: "photo",
  },
];

const Menu = () => {
  const [nomMenu, setNomMenu] = useState("");
  const [prixMenu, setPrixMenu] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionCategorie, setSelectedOptionCategorie] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [entreid, setEntreId] = useState("");
  useEffect(() => {
    const idEntreprise = localStorage.getItem("idEntreprise");
    setEntreId(idEntreprise);
  }, []);
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSelectChangeCategorie = (event) => {
    setSelectedOptionCategorie(event.target.value);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const targetWidth = 394;
          const targetHeight = 394;

          canvas.width = targetWidth;
          canvas.height = targetHeight;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

          const compressedDataURL = canvas.toDataURL("image/jpeg", 0.5); // Ajuste la qualité ici
          setCompressedImage(compressedDataURL);
        };
        img.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Inverse la visibilité
  };
  const apiUrl = "http://10.10.11.19:8080/madagasikaly/ajouter/menu/entreprise";

 

  // Corps de la requête
  function clic(postData) {
    const jsonBody = JSON.stringify(postData);

    fetch(apiUrl, {
        method: 'POST',
        body: jsonBody
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function ajouterMenu(){
  const donne = {
    type: selectedOption,
    nom: nomMenu,
    prix: prixMenu,
    categorie:selectedOptionCategorie , 
    identreprise: entreid,
    base64:compressedImage
   
};
  clic(donne);
}
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <>
      <div
        style={{
          position: "fixed",
          background: "rgba(195, 196, 199, 0.8)",
          width: "50vw",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: isVisible ? "block" : "none",
          animation: "slideIn 0.3s ease-in-out",
        }}
      >
        <div>
          <div style={contenu2}>
            <div style={contenu2Form}>
              <p
                style={{
                  margin: "0",
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#ad0303",
                }}
              >
                Menu
              </p>

              <input
                style={inputStyle}
                value={nomMenu}
                onChange={(e) => setNomMenu(e.target.value)}
                placeholder="Nom du menu"
              />

              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="sucré">Sucre</option>
                <option value="salé">Sale</option>
              </select>

              <input
                style={inputStyle}
                value={prixMenu}
                onChange={(e) => setPrixMenu(e.target.value)}
                placeholder="Prix"
              />
              <select
                value={selectedOptionCategorie}
                onChange={handleSelectChangeCategorie}
              >
                <option value="PM">PM</option>
                <option value="GM">GM</option>
              </select>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
              />
              {selectedFile && (
                <div>
                  <p>Photo sélectionnée : {selectedFile.name}</p>
                  {compressedImage && (
                    <div>
                      <p>Image compressée en base64 :</p>
                      <img
                        src={compressedImage}
                        alt="Preview"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    </div>
                  )}
                </div>
              )}

              <button
                style={{ ...contenu2Button, marginTop: "20px" }}
                onClick={() => {
                  toggleVisibility();
                  ajouterMenu();
                }}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={container}>
        <div style={headerUser}>
          <div style={headerUserChild1}>
            <p style={headerUserChild1P}>Ajouter nouveau Menu</p>
          </div>
          <div style={headerUserChild2}>
            <button style={headerUserChild2Button} onClick={toggleVisibility}>
              Ajouter
            </button>
          </div>
        </div>

        <div style={{ ...bodyTable, overflow: "auto" }}>
          <table {...getTableProps()} style={tableStyles}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} style={headerStyles}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    style={index % 2 === 0 ? evenRowStyles : oddRowStyles}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()} style={cellStyles}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const container = {};
const headerUser = {
  display: "flex",
  background: "#fff",
  marginLeft: "20px",
  marginRight: "20px",
  marginBottom: "5px",
  marginTop: "5px",
  borderRadius: "10px",
};
const headerUserChild1 = {
  flex: "3",
};
const headerUserChild1P = {
  fontSize: "20px",
};
const headerUserChild2 = {
  flex: "1",
  display: "flex",
  alignItems: "center",
};
const headerUserChild2Button = {
  background: "#ad0303",
  border: "none", // Couleur et épaisseur de la bordure
  color: "#fff", // Couleur du texte
  padding: "10px 15px",
  borderRadius: "10px",
  boxShadow: "none", // Supprime l'ombre
  width: "10vw",
};
const bodyTable = {
  width: "80vw",
  height: "200px",
  marginLeft: "20px",
  marginRight: "20px",
  marginTop: "10px",
};
const tableStyles = {
  borderCollapse: "collapse",
  width: "100%",
  fontFamily: "Arial, sans-serif",
};

const headerStyles = {
  backgroundColor: "#f0f0f0",
  color: "#333",
  padding: "8px",
  textAlign: "left",
  borderBottom: "1px solid #ccc",
};

const evenRowStyles = {
  backgroundColor: "#D5CABC", // Couleur de fond pour les lignes paires
  color: "#333",
};

const oddRowStyles = {
  backgroundColor: "#F5EFE6;", // Couleur de fond pour les lignes impaires
  color: "#333",
};

const cellStyles = {
  padding: "8px",
  borderBottom: "1px solid #ccc",
};

const contenu2 = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "100px",
};
const contenu2Form = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "20vw",
};
const inputStyle = {
  border: "none", // Pas de bordure
  borderRadius: "2px", // Bordure arrondie
  padding: "10px", // Espacement intérieur
  margin: "5px 0", // Marge supérieure et inférieure
  width: "100%", // Largeur à 100%
  background: "rgba(255, 255, 255, 1)",
  borderBottom: "1px solid #C49D83",
};
const contenu2Button = {
  background: "#ad0303",
  border: "none", // Couleur et épaisseur de la bordure
  color: "#fff", // Couleur du texte
  padding: "10px 20px",
  borderRadius: "50px",
  boxShadow: "none", // Supprime l'ombre
  width: "10vw",
};
export default Menu;
