import logo from './logo.svg';
import './App.css';
import SearchBar from  './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App"> 
      < SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
