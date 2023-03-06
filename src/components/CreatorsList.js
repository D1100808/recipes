import React from 'react'
import CreatorItem from './CreatorItem'

function CreatorsList(props) {
    if (props.users.length === 0) {
        return (
          <div>
            <p className="h1">Пользователь не найден!</p>
          </div>
        );
    }
  return (
    <ul style={{listStyle:'none', display:'flex', flexWrap:'wrap', flexDirection:'column'}}>
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