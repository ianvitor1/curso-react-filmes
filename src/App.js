import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [filmes, setFilmes] = useState({ Search: [] });
  const [searchTerm, setSearchTerm] = useState('');

  const fetchFilmes = async (term) => {
    try {
      const response = await
        fetch(`https://www.omdbapi.com/?apikey=52298090&s=${term}&type=movie&plot=full`);
      const data = await response.json();
  
      if (data.Response === "True") {
        setFilmes(data);
      } else {
        console.error('Erro ao buscar filmes:', data.error);
      }
    } catch (error) {
      console.error('Erro ao fazer a requesição:', error);
    }
  };

  useEffect(() => {
    fetchFilmes(searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchFilmes(searchTerm);
  };
  
  return (
    <div className="App">
      <div className='boxFilmes'>
        <h2>Buscar Filmes: </h2>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Digite o nome do filme...'
          />  
          <button type='submit'>Buscar</button>
        </form>
        <div className="filmesGrid">
          {filmes.Search.map((filme) => (
            <div className='filmeCard'>
              <h3>{filme.Title}</h3>
              <img src={filme.Poster}></img>
              <p>Ano: {filme.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
