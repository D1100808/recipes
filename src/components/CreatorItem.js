import React from 'react'
import { Link } from 'react-router-dom';
import './CreatorItem.css'
function CreatorItem(props) {
  return (
    <li className="info">
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