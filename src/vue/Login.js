import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const parentStyle = {
  display: "flex",
  width: "100vw",
  height: "100vh",
};

const enfant1Style = {
  flex: "1",
  background: "#ad0303",
};

const enfant2Style = {
  flex: "3",
  background: "#fff",
};
const logo = {
  color: "#fff",
  margin: "20px",
  fontFamily: "Thinking",
  fontSize: "30px",
};
const contenu = {
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center", // Centrage vertical
  flexDirection: "column",
  marginTop: "50px",
};
const contenuButton = {
  background: "transparent",
  border: "2px solid #fff", // Couleur et épaisseur de la bordure
  color: "#fff", // Couleur du texte
  padding: "10px 20px",
  borderRadius: "50px",
  boxShadow: "none", // Supprime l'ombre
  width: "10vw",
};
const contenuP = {
  fontSize: "30px",
  fontWeight: "bold",
};
const contenu2 = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "100px",
};
const contenu2P = {
  fontSize: "30px",
  fontWeight: "bold",
  color: "#ad0303",
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
  borderBottom: "1px solid #ad0303",
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

function Login() {
  const [nomLogin, setNomLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [nomResto, setNomResto] = useState("");
  const [nomUser, setNomUser] = useState("");
  const [siege, setSiege] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Inverse la visibilité
  };

  function navigationAccueil() {
    navigate("/accueil");
  }
  const login = async () => {
    try {
      const response = await axios.get(
        `http://10.10.11.19:8080/madagasikaly/connecter/entreprise?nom=${nomLogin}&motdepasse=${passLogin}`
      );
      console.log("ty le response", response.status);
      if (response.status === 200) {
        const data = response.data.resultat;
        localStorage.setItem('idEntreprise', data[0].idkeyentreprise);
        localStorage.setItem('nomentreprise', data[0].nomentreprise);
        
        if(data!="ko"){
          console.log("api login donne :", data);
          navigate("/accueil");
        }
        else{
          console.log("ce compte n'existe pas")
        }
        
      } else {
        console.error(
          "Réponse de l'API avec un statut non valide :",
          response.status
        );
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'API :",
        error
      );
    }
  };
  const inscription = async () => {
    try {
      const response = await axios.get(
        `http://10.10.11.19:8080/madagasikaly/creer/compte/entreprise?nometreprise=${nomResto}&nomuser=${nomUser}&siege=${siege}&motdepasse=${pass}&telephone=${telephone}&key=${code}`
      );
      console.log("ty le response", response.status);
      if (response.status === 200) {
        const data = response.data;
        console.log("Données reçues depuis l'API login :", data);
        navigate("/accueil");
      } else {
        console.error(
          "Réponse de l'API avec un statut non valide :",
          response.status
        );
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'API :",
        error
      );
    }
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          background: "rgba(195, 196, 199, 0.5)",
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
                Connexion
              </p>

              <input
                style={inputStyle}
                placeholder="Nom de l'utilisateur"
                value={nomLogin}
                onChange={(e) => setNomLogin(e.target.value)}
              />

              <input
                style={inputStyle}
                placeholder="Mot de passe"
                value={passLogin}
                onChange={(e) => setPassLogin(e.target.value)}
              />

              <button
                style={{ ...contenu2Button, marginTop: "20px" }}
                onClick={() => {
                  toggleVisibility();
                  login();
                }}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={parentStyle}>
        <div style={enfant1Style}>
          <div style={logo}>Madagaskaly</div>
          <div style={contenu}>
            <p style={contenuP}>Salama ee!</p>
            <button style={contenuButton} onClick={toggleVisibility}>Se connecter</button>
          </div>
        </div>
        <div style={enfant2Style}>
          <div style={contenu2}>
            <p style={contenu2P}>Creation de compte</p>
            <div style={contenu2Form}>
              <input
                style={inputStyle}
                value={nomResto}
                onChange={(e) => setNomResto(e.target.value)}
                placeholder="Nom du restaurant"
              />

              <input
                style={inputStyle}
                value={nomUser}
                onChange={(e) => setNomUser(e.target.value)}
                placeholder="Nom de l'utilisateur"
              />

              <input
                style={inputStyle}
                value={siege}
                onChange={(e) => setSiege(e.target.value)}
                placeholder="Siège"
              />

              <input
                style={inputStyle}
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="Télephone"
              />

              <input
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <input
                style={inputStyle}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Mots de passe"
              />

              <input
                style={inputStyle}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code de confirmation"
              />
              <button style={contenu2Button} onClick={navigationAccueil}>
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
