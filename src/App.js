import './App.css';
import PropertyListing from './Components/PropertyListing';
import { useFilter } from "./Filters/FilterContext";
import { useState} from "react";

function App() {

  const {state, dispatch} = useFilter();

  const [filterState, setFilterState] = useState({rent: 5000});

  const searchProperty = () => {
    dispatch({type: "RENT", payload: filterState.rent})
  }

  return (
    <div className="App">
      <h1>Search properties to rent</h1>

      <select 
        value={filterState.rent} 
        onChange={(e) => setFilterState({...filterState, rent: Number(e.target.value)})} 
      >
       <option value="5000">0-5k</option>
        <option value="10000">5-10k</option>
        <option value="20000">10-20k</option>
        <option value="20001">20k & Above</option>
      </select>

<button onClick={searchProperty}>Search</button>
      <PropertyListing />
    </div>
  );
}

export default App;
