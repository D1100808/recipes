import './App.css';
import MainPage from './pages/MainPage';

import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from 'react-router-dom';
import UserRecipes from './pages/UserRecipes';
import AuthPage from './pages/AuthPage';
import NavBar from './Navigation/NavBar';
import Creators from './pages/Creators';
function App() {
  return (
    <>
      <main>
        <NavBar/>
      </main>
    <Routes>
      <Route path="/" element={<Creators />} />
      <Route path="/:userId/recipes" element={<UserRecipes />} />
      <Route path="/auth" element={<AuthPage/>} />
    </Routes>
    </>
  );
}

export default App;
