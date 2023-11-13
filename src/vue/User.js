import React, { useState, useReducer, useEffect } from 'react'
import { useTable } from 'react-table';
import Modal from 'react-modal';
import axios from 'axios';
Modal.setAppElement('#root');
const data = [
  {
    id: 1,
    nameUser: 'John Doe',
    lieuUser: "Ankorondrano",
    telUser: '03422222222',
    passUser: "kinfykinfy"
  },
  {
    id: 2,
    nameUser: 'Chantal',
    lieuUser: "Analakelu",
    telUser: '03425222222',
    passUser: "kinfykinfy"
  },
  {
    id: 1,
    nameUser: 'John Doe',
    lieuUser: "Ankorondrano",
    telUser: '03422222222',
    passUser: "kinfykinfy"
  },
  {
    id: 2,
    nameUser: 'Chantal',
    lieuUser: "Analakelu",
    telUser: '03425222222',
    passUser: "kinfykinfy"
  },
  {
    id: 1,
    nameUser: 'John Doe',
    lieuUser: "Ankorondrano",
    telUser: '03422222222',
    passUser: "kinfykinfy"
  },
  {
    id: 2,
    nameUser: 'Chantal',
    lieuUser: "Analakelu",
    telUser: '03425222222',
    passUser: "kinfykinfy"
  },
  {
    id: 1,
    nameUser: 'John Doe',
    lieuUser: "Ankorondrano",
    telUser: '03422222222',
    passUser: "kinfykinfy"
  },
  {
    id: 2,
    nameUser: 'Chantal',
    lieuUser: "Analakelu",
    telUser: '03425222222',
    passUser: "kinfykinfy"
  },
  // Ajoutez d'autres données ici
];
const columns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: "Nom de l'utilisateur",
    accessor: 'nameUser',
  },
  {
    Header: 'Lieu',
    accessor: 'lieuUser',
  },
  {
    Header: 'Telephone',
    accessor: 'telUser',
  },
  {
    Header: 'Mot de passe',
    accessor: 'passUser',
  },
];
function User() {
  const [nom, setNom] = useState('');
  const [lieu, setLieu] = useState('')
  const [telephone, setTelephone] = useState('')
  const [langitude, setLangitude] = useState('-18.893912533821048')
  const [pass, setPass] = useState('')
  const [longitude, setLongitude] = useState(' 47.52828966947318')
  const [entreid, setEntreId] = useState('');
  const [Entrenom, setEntreNom] = useState('');
  useEffect(() => {
    const idEntreprise = localStorage.getItem('idEntreprise');
    const nomEntre = localStorage.getItem('nomentreprise');
   setEntreId(idEntreprise)
   setEntreNom(nomEntre)
 }, []);
  const [inputValues, setInputValues] = useState({
    nom: '',
    lieu: '',
    telephone: '',
    pass: '',
  });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });


  const ContainerUser = {
    background: "#f3ebeba1",
  }
  const headerUser = {
    display: 'flex',
    background: "#fff",
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: "5px",
    marginTop: "5px",
    borderRadius: '10px',
  }
  const headerUserChild1 = {
    flex: "3"
  }
  const headerUserChild1P = {
    fontSize: "20px"
  }
  const headerUserChild2 = {
    flex: "1",
    display: "flex",
    alignItems: 'center'
  }
  const headerUserChild2Button = {
    background: '#ad0303',
    border: 'none', // Couleur et épaisseur de la bordure
    color: '#fff', // Couleur du texte
    padding: '10px 15px',
    borderRadius: '10px',
    boxShadow: 'none', // Supprime l'ombre
    width: '10vw',
  }
  const bodyUser = {
  }
  const bodyUserDetail = {
    width: "80vw",
    marginLeft: '20px',
    marginRight: '20px'
  }
  const bodyUserDetailTransaction = {
    display: 'flex',
    justifyContent: "center",
    background: "#fff",
    borderRadius: "10px",
    marginBottom: "5px"
  }
  const bodyUserTransactionButton = {
    width: "80vw",
    display: 'flex',
    justifyContent: 'center',
    background: "#fff",
    height: "70px",
    borderRadius: '10px',
    alignItems: "center"
  }
  const bouttonTransaction = {
    background: '#ad0303',
    border: 'none', // Couleur et épaisseur de la bordure
    color: '#fff', // Couleur du texte
    padding: '10px 15px',
    borderRadius: '30px',
    boxShadow: 'none',
    height: "50px"
  }
  const bodyUserDetailTransactionChild1 = {
    flex: "1",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const bodyUserDetailTransactionChild2 = {
    flex: "1",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const bodyUserDetailTransactionChild3 = {
    flex: "1",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const bodyUserDetailTransactionChildP = {
    fontSize: "10px",
    color: "#585252"
  }
  const bodyUserDetailTransactionChildChiffre = {
    fontSize: '50px',
    fontWeight: "bold"
  }
  const bodyTable = {
    width: "80vw",
    height: "200px",
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: "10px",

  };
  const tableStyles = {
    borderCollapse: 'collapse',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyles = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ccc',
  };

  const evenRowStyles = {
    backgroundColor: '#D5CABC', // Couleur de fond pour les lignes paires
    color: '#333',
  };

  const oddRowStyles = {
    backgroundColor: '#F5EFE6;', // Couleur de fond pour les lignes impaires
    color: '#333',
  };

  const cellStyles = {
    padding: '8px',
    borderBottom: '1px solid #ccc',
  };
  const contenu2 = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: "100px"
  };
  const contenu2P = {
    fontSize: "30px",
    fontWeight: 'bold',
    color: "#C49D83"
  };

  const contenu2Form = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "20vw"
  };
  const inputStyle = {
    border: 'none', // Pas de bordure
    borderRadius: '2px', // Bordure arrondie
    padding: '10px', // Espacement intérieur
    margin: '5px 0', // Marge supérieure et inférieure
    width: '100%', // Largeur à 100%
    background: 'rgba(255, 255, 255, 1)',
    borderBottom: '1px solid #C49D83'
  };
  const contenu2Button = {
    background: '#ad0303',
    border: 'none', // Couleur et épaisseur de la bordure
    color: '#fff', // Couleur du texte
    padding: '10px 20px',
    borderRadius: '50px',
    boxShadow: 'none', // Supprime l'ombre
    width: '10vw',
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Inverse la visibilité
  };


  const AjoutUser = async () => {
    try {
      const response = await axios.get(
        `http://10.10.11.19:8080/madagasikaly/ajouter/utilisateur/entreprise?nom=${nom}&lieu=${lieu}&motdepasse=${pass}&telephone=${telephone}&langitude=${langitude}&longitude=${longitude}&idEndreprise=12`
      );
      console.log("pass", pass)
      console.log("ty le response", response.status)
      if (response.status === 200) {
        const data = response.data;
        console.log('Ajout utilisateur okey :', data);
      }
      else {
        console.error('Réponse de l\'API avec un statut non valide :', response.status);
      }
    }
    catch (error) {
      console.error('Erreur lors de la récupération des données de l\'API :', error);
    }

  }
  return (
    <>
      <div style={{
        position: 'fixed',
        background: 'rgba(195, 196, 199, 0.8)',
        width: "50vw",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: isVisible ? 'block' : 'none',
        animation: 'slideIn 0.3s ease-in-out',
      }}>
        <div >
          <div style={contenu2}>
            <div style={contenu2Form}>
              <p style={{ margin: '0', fontSize: "30px", fontWeight: 'bold', color: "#ad0303" }}>Ajout utilisateur</p>

              <input
                style={inputStyle}
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Nom de l'utilisateur"
              />

              <input
                style={inputStyle}
                value={lieu}
                onChange={(e) => setLieu(e.target.value)}
                placeholder="Lieu"
              />

              <input
                style={inputStyle}
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="Telephone"
              />

              <input
                style={inputStyle}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Mot de passe"
              />

              <button
                style={{ ...contenu2Button, marginTop: '20px' }} onClick={() => { toggleVisibility(); AjoutUser() }}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={ContainerUser}>
        <div style={headerUser}>
          <div style={headerUserChild1}>
            <p style={headerUserChild1P} >Ajouter nouveau utilisateur</p>
          </div>
          <div style={headerUserChild2}>
            <button style={headerUserChild2Button} onClick={toggleVisibility} >Ajouter</button>

          </div>
        </div>
        <div style={bodyUser}>
          <div style={bodyUserDetail}>
            <div style={bodyUserDetailTransaction}>
              <div style={bodyUserDetailTransactionChild1}>
                <p style={bodyUserDetailTransactionChildP}>Nombre d'utilisateur</p>
                <p style={bodyUserDetailTransactionChildChiffre}>1,7M</p>
              </div>
              <div style={bodyUserDetailTransactionChild2}>
                <p style={bodyUserDetailTransactionChildP}>Nombre de commande</p>
                <p style={bodyUserDetailTransactionChildChiffre}>1,7M</p>
              </div>
              <div style={bodyUserDetailTransactionChild3}>
                <p style={bodyUserDetailTransactionChildP}>Nombre de livraison</p>
                <p style={bodyUserDetailTransactionChildChiffre}>1,7M</p>
              </div>
            </div>
            <div style={bodyUserTransactionButton}>
              <button style={bouttonTransaction}>Voir les transactions complet</button>
            </div>
          </div>
          <div style={{ ...bodyTable, overflow: "auto" }}>
            <table {...getTableProps()} style={tableStyles}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()} style={headerStyles}>
                        {column.render('Header')}
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
                            {cell.render('Cell')}
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
      </div>
    </>

  )
}
export default User
