import './App.css';
import PropertyListing from './Components/PropertyListing';
import Filters from './Components/Filters';

function App() {

  return (
    <div className="App">
      <h1>Search properties to rent</h1>

      <div className='flex-jc'>
        <Filters />
      </div>
      
      <PropertyListing />
    </div>
  );
}

export default App;
