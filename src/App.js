import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserRecipes from './pages/UserRecipes';
import AuthPage from './pages/AuthPage';
import NavBar from './Navigation/NavBar';
import Creators from './pages/Creators';
import MainPage from './pages/MainPage/MainPage';
import { AuthContext } from './context/auth-context';
import { useCallback, useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate  = useNavigate()
  const login = useCallback(() => {
    setIsLoggedIn(true)
    navigate('/')
  },[navigate])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
    navigate('/auth')
  },[navigate])

  console.log("isLoggedIn", isLoggedIn);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" element={<MainPage />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/:userId/recipes" element={<UserRecipes />} />
        <Route path="/auth" element={<AuthPage />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </>
    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:login, logout:logout}}>
      <main>
        <NavBar />
      </main>
      <Routes>
        {routes}
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
