import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';

import './NavBar.css'
function NavBar() {
  const auth = useContext(AuthContext)
  
    return (
      <div className='main'>
        <div className="title">
          <h2>Recipes</h2>
        </div>
        <ul className="nav">
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          {auth.isLoggedIn && <li>
            <NavLink to="/creators">Рецепты от лучших поваров</NavLink>
          </li>}
          <li>
            <NavLink to="/auth">Регистрация</NavLink>
          </li>
          {auth.isLoggedIn && <li>
            <button onClick={auth.logout}>Выход</button>
          </li>}
        </ul>
      </div>
    );
}

export default NavBar