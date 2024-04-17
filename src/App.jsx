import { useState } from "react"
import { ListOfSongs } from "./components/songs";
import './App.css'
import { getSearchResults } from "./services/apiCall";

export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const results = await getSearchResults(searchTerm);
        setSearchResults(results);
        setSearchTerm('');
        setIsLoading(false);
  };
  
  return (
    <div className="page">
      <h1>Spotify API</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      {
        isLoading ? 
        <p>Loading...</p> 
        : <ListOfSongs searchResults={searchResults} />
      }

    </div>
  );
}

export default App
