import './App.css';
import Login from './vue/Login.js'
import Accueil from './vue/Accueil';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route >
          <Route index element={<Login />} />
          <Route path="accueil" element={<Accueil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
