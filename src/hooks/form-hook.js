import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case "FORM_CHANGE":
            let formIsValid = true;
            for (const inputId in state.inputs) {
                console.log("state.inputs", state.inputs);
                console.log("inputId", inputId);
                if (!state.inputs[inputId]) {
                    continue;
                }
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
                return {
                  ...state,
                  inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                      value: action.value,
                      isValid: action.isValid,
                    },
                  },
                  isValid: formIsValid,
                };

        case 'SET_DATA':
            return {
                inputs: action.inputs,
                isValid: action.formIsValid
            }
        default:
            return state;
    }
}

export const useForm = (initialInputs, initialFormValidity) => {
  const [formInputs, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });
  console.log("formInputs", formInputs);
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "FORM_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    console.log("inputData", inputData);
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formInputs, inputHandler, setFormData];
};
