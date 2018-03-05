// const defaultState = {
//     cityInput: '',
//   };
  
//   export default function CityReducer (state = defaultState, action) {
//     // the `state = defaultState` above is new ES6 syntax
//     // for defining a default value on a parameter
//     return state;
//   }

import moment from 'moment';

const defaultState = {
  result: {},
  historys: []
};

export default function CityReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    // Here in the case of the update description action 
    case 'UPDATE_CITY_INPUT_FULFILLED': {
      // we'll return an object
      console.log(payload.data)
      return {
        // with all the previous state
        ...state,
        // but overwriting the description
        result: payload.data
        
      };
    }



    case 'ADD_HISTORY': {

      console.log("historys", payload.CityInput)
      return {
        ...state, 
        historys: [
          // here we have all the previous line items
          ...state.historys,
          // plus a new object
          payload
        ]
      };
    }

    default: {
      return state;
    }
  }
}