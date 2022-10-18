import './App.css';
import PropertyListing from './Components/PropertyListing';
import Filters from './Components/Filters';

function App() {

  return (
    <div className="App">
      <h1>Search properties to rent</h1>
      <Filters />
      <PropertyListing />
    </div>
  );
}

export default App;
