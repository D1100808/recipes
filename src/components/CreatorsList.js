import React from 'react'
import CreatorItem from './CreatorItem'

function CreatorsList(props) {
    if (props.users.length === 0) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Пользователь не найден!</h2>
          </div>
        );
    }
  return (
    <ul style={{listStyle:'none', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      {props.users.map((user, index) => (
        <CreatorItem
          key={index}
          id={user.id}
          name={user.name}
          image={user.imgURL}
        />
      ))}
    </ul>
  );
}

export default CreatorsList