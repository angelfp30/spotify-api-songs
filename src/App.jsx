import { useState } from "react"
import { ListOfSongs } from "./components/songs";
import './App.css'
import { useSearchResults } from "./services/apiCall";

export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState('');
  const { searchResults, isLoading } = useSearchResults(searchTerm)

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(isSearching)
  };
  
  return (
    <div className="page">
      <h1>Spotify API</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={isSearching}
          onChange={(e) => setIsSearching(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      {
        isLoading ? 
        <i>Loading...</i> 
        : <ListOfSongs searchResults={searchResults} />
      }

    </div>
  );
}

export default App
