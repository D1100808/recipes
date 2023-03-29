import React from 'react'
import "./MainItem.css"
function MainItem(props) {
  return (
    <li className="grid-container">
      <div className="item-1">
        <h4>{props.title}</h4>
      </div>
      <div className="item-2">
        <div
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: ['cover','contain'],
            backgroundRepeat: 'no-repeat',
            height: '150px',
            borderRadius: '5px',
            backgroundPosition: 'center',
            objectFit:'fill'
          }}>
        </div>
      </div>
      <div className="item-3">
        <ol>
          {props.recipe.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ol>
      </div>
    </li>
  );
}

export default MainItem