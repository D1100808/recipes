import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from 'react-router-dom';
import './CreatorsItem.css'
function CreatorItem(props) {
  return (
    <li className="container">
      <Link to={`/${props.id}/recipes`}>
        <div className="user_image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className='user_name'>
            <h5>{props.name}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CreatorItem;