import React from 'react'
import MainItem from './MainItem'
import './MainList.css'

function MainList(props) {
    if (props.items.length === 0) {
        return (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center'
          }}>
                <h2>Что-то пошло не так! Попробуйте позднее!</h2>
            </div>
        )
    }

  return (
    <ul>
      {props.items.map((item) => (
        <MainItem 
            key={item.id} 
            title={item.title} 
            image={item.imageURL} 
            recipe={item.recipe}   
        />
      ))}
    </ul>
  );
}

export default MainList;