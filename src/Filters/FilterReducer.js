import { initialState } from "../Constants/propertyHelperData"

export const filterReducer = (state, action) => {

    switch(action.type) {
       case "RENT": return {...state, rent: action.payload}

       case "LOCATION": return {...state, location: action.payload}

       case "PROPERTY_TYPE": return {...state, propertyType: action.payload}

       case "AVAILABILITY": return {...state, availability: action.payload}

       case "RESET": return initialState

       default: return state;
    }
}