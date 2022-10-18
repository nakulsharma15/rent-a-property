import {createContext, useContext, useReducer, useState} from "react";
import { filterReducer } from "./FilterReducer";
import propertiesData from "../Database/PropertiesData";
import { getFilteredProductList } from "./FilterFunction";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {

    const initialState = {
        rent: 5000,
        location: "",
        propertyType: "",
        availability: ""
    }

    const [state, dispatch] = useReducer(filterReducer, initialState);

    const [productList, setProductList] = useState(propertiesData);

    const filteredProductList = getFilteredProductList(state , productList);


    return (<FilterContext.Provider value={{state , dispatch , filteredProductList}}>
{children}
    </FilterContext.Provider>)
}

export {useFilter , FilterProvider};