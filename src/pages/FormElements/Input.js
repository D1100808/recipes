import React, { useEffect, useReducer, useState } from 'react'
import { validate } from '../../util/validators';
import './Input.css'

const inputReducer = (state, action) => {
  console.log("stateee", state);
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouch: true,
      };
    default:
      return state;
  }
};

function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    isTouch: false
  })

  console.log("formInputs.isValid", inputState.isValid);

  const {id, onInput} = props
  const { value, isValid } = inputState;
  
  
  useEffect(() => {
      onInput(id,value,isValid)
  }, [id, value, isValid, onInput]
  )
  

  const addInputs = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };


  const touchHandler = () => {
    dispatch({type:'TOUCH'})
  }


  const element = (
      <input
        element="input"
        id={props.id}
        label={props.label}
        placeholder={props.placeholder}
        type={props.type}
        value={inputState.value}
        onChange={addInputs}
        onBlur={touchHandler}
      />
    ) 
  
  return (
    <div
      className={`valid-form ${
        !inputState.isValid && inputState.isTouch && " invalid-form"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouch && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input