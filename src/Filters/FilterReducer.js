export const filterReducer = (state, action) => {

    // const defaultStat

    switch(action.type) {
       case "RENT": return {...state, rent: action.payload}

       default: return state;
    }
}