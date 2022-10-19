import './App.css';
import PropertyListing from './Components/PropertyListing';
import Filters from './Components/Filters';
import Header from './Components/Header';

function App() {

  return (
    <div className="App">

      <Header />

      <h1 className="title-text">Search properties to rent</h1>

      <div className='flex-jc'>
        <Filters />
      </div>

      <div className='flex-jc'>
      <PropertyListing />
      </div>

    </div>
  );
}

export default App;
