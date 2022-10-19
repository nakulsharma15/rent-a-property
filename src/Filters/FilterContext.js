import { createContext, useContext, useReducer, useState } from "react";
import { filterReducer } from "./FilterReducer";
import propertiesData from "../Database/propertiesData";
import { getFilteredProductList } from "./FilterFunction";
import { initialState } from "../Constants/propertyHelperData";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(filterReducer, initialState);

    const [productList, setProductList] = useState(propertiesData);

    const filteredProductList = getFilteredProductList(state, productList);


    return (<FilterContext.Provider value={{ state, dispatch, filteredProductList }}>
        {children}
    </FilterContext.Provider>)
}

export { useFilter, FilterProvider };