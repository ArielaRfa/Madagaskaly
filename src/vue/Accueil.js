import React, { useState,useEffect } from "react";
import Users from "./User";
import Menus from "./Menu"

const navbar = {
  display: "flex",
  backgroundColor: "#ad0303",
  color: "#fff",
  margin: 0,
  height: "5vh",
  alignItems: "center",
  justifyContent: "space-between",
};

const logostyle = {
  display: "inline-block",
  listStyle: "none",
  float: "left",
  margin: 0,
  marginLeft: "5%",
  fontFamily: "Thinking",
  fontSize: "20px",
  color: "#fff",
};

const parent = {
  display: "flex",
  height: "95vh",
};
const enfant1 = {
  flex: "1",
  height: "98vh",
  background: "#ad0303",
};
const enfantULliste = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
const enfant1LIliste = {
  listStyle: "none",
  marginBottom: "10px",
  backgroundColor: "rgba(195, 196, 199, 0.7)",
  height: "30px",
  width: "150px",
  textAlign: "center",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
};
const enfant2 = {
  flex: "4",
  background: "#f3ebeba1",
};
const listeButton = {
  background: "rgba(195, 196, 199, 0.5)",
  border: "none", // Couleur et épaisseur de la bordure
  color: "#fff", // Couleur du texte
  padding: "10px 20px",
  borderRadius: "10px",
  boxShadow: "none", // Supprime l'ombre
  width: "10vw",
  marginBottom:"20px"
};
function Accueil() {
  const [isUserListVisible, setIsUserListVisible] = useState(false);
  const [isMenuListVisible, setIsMenuListVisible] = useState(false);
  const [showUserContent, setShowUserContent] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);

  const toggleList = (listType) => {
    if (listType === 'user') {
      setIsUserListVisible(!isUserListVisible);
    } else if (listType === 'menu') {
      setIsMenuListVisible(!isMenuListVisible);
      // Masque la liste d'utilisateur si elle est ouverte
    }
  };
  const handleUserClick = () => {
    setShowUserContent(true);
    setShowMenuContent(false);
  };

  const handleMenuClick = () => {
    setShowMenuContent(true);
    setShowUserContent(false);
  };
 

  return (
    <>
      <nav style={navbar}>
        <p style={logostyle}>Madagaskaly</p>
      </nav>

      <div style={parent}>
        <div style={enfant1}>
          <button onClick={() => toggleList('user')} style={listeButton}>
            User
          </button>
          {isUserListVisible && (
            <ul style={enfantULliste}>
              <li style={enfant1LIliste}>
                <a onClick={handleUserClick}>User</a>
              </li>
            </ul>
          )}
          <button onClick={() => toggleList('menu')} style={listeButton}>
            Menu
          </button>
          {isMenuListVisible && (
            <ul style={enfantULliste}>
              <li style={enfant1LIliste}>
                <a onClick={handleMenuClick}>Menu</a>
              </li>
            </ul>
          )}
          
        </div>
        <div style={enfant2}>
        {showUserContent ? (
          <Users />
        ) : showMenuContent ? (
          <Menus />
        ) : (
          <Users />
        )}
        </div>
      </div>
    </>
  );
}
export default Accueil;
