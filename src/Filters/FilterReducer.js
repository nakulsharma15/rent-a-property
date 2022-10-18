export const filterReducer = (state, action) => {

    // const defaultStat

    switch(action.type) {
       case "RENT": return {...state, rent: action.payload}

       case "LOCATION": return {...state, location: action.payload}

       case "PROPERTY_TYPE": return {...state, propertyType: action.payload}

       case "AVAILABILITY": return {...state, availability: action.payload}

       default: return state;
    }
}