import './App.css';
import PropertyListing from './Components/PropertyListing';
import { useFilter } from "./Filters/FilterContext";
import { useState } from "react";

function App() {

  const { dispatch } = useFilter();

  const [filterState, setFilterState] = useState({ rent: 5000, location: "", propertyType: "", availability: "" });

  const searchProperty = () => {

    console.log(filterState);

    dispatch({ type: "RENT", payload: filterState.rent })

    dispatch({type: "LOCATION", payload: filterState.location})

    dispatch({type: "PROPERTY_TYPE", payload: filterState.propertyType})

    dispatch({type: "AVAILABILITY", payload: filterState.availability})
  }

  return (
    <div className="App">
      <h1>Search properties to rent</h1>

      <select
        value={filterState.rent}
        onChange={(e) => setFilterState({ ...filterState, rent: Number(e.target.value) })}
      >
        <option value="5000">0-5k</option>
        <option value="10000">5-10k</option>
        <option value="20000">10-20k</option>
        <option value="20001">20k & Above</option>
      </select>

      <select 
        value={filterState.location} 
        onChange={(e) => setFilterState({...filterState, location: e.target.value})} 
      >
       <option value="Delhi, India">Delhi</option>
        <option value="Mumbai, India">Mumbai</option>
        <option value="Bangalore, India">Bangalore</option>
        <option value="Hyderabad, India">Hyderabad</option>
      </select>

      <select 
        value={filterState.propertyType} 
        onChange={(e) => setFilterState({...filterState, propertyType: e.target.value})} 
      >
       <option value="Studio">Studio</option>
        <option value="Apartment">Apartment</option>
        <option value="Independent Floor">Floor</option>
        <option value="Independent House">House</option>
      </select>

      <select 
        value={filterState.availability} 
        onChange={(e) => setFilterState({...filterState, availability: e.target.value})} 
      >
       <option value="Immediately">immediately</option>
        <option value="Within 1 Month">within1month</option>
        <option value="Within 3 Months">within3months</option>
        <option value="After 3 Months">after3months</option>
      </select>

      <button onClick={searchProperty}>Search</button>

      <PropertyListing />
    </div>
  );
}

export default App;
