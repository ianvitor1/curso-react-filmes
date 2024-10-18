import './App.css';

const filmes = {
  Search: [
    {
      Title: 'Homem de Ferro',
      Year: '2008',
      Poster: 'https://upload.wikimedia.org/wikipedia/pt/0/00/Iron_Man_poster.jpg',
    },
    {
      Title: 'Rio',
      Year: '2011',
      Poster: 'https://diariodorio.com/wp-content/uploads/2011/01/Poster-Rio-11.jpg',
    },
    {
      Title: 'Carros',
      Year: '2006',
      Poster: 'https://play-lh.googleusercontent.com/kHt8qbche40zkE6yZwA8IUe5ARINp4PjrJ5mi622GEzQFYWCaGTQDAl58rrRKRKyhnD2=w240-h480-rw',
    },
    {
      Title: 'Sorria',
      Year: '2022',
      Poster: 'https://br.web.img3.acsta.net/pictures/22/09/20/15/51/1507365.jpg',
    },
    {
      Title: 'Spirit',
      Year: '2002',
      Poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/97/04/04/20504443.jpg',
    },
    {
      Title: 'Missão ataque',
      Year: '2022',
      Poster: 'https://m.media-amazon.com/images/S/pv-target-images/c8233bc104d3ed0bf09ea026315037414d617165c580e855e65b6e045d00ecac.jpg',
    },
    {
      Title: 'Adão Negro',
      Year: '2022',
      Poster: 'https://upload.wikimedia.org/wikipedia/pt/6/63/Black_Adam_poster.jpg',
    },
    {
      Title: 'The Walking Dead',
      Year: '2010',
      Poster: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/78/35/82/20303823.jpg',
    },
  ]
}

function App() {
  return (
    <div className="App">
      <div className='boxFilmes'>
        <h2>Buscar Filmes: </h2>
        <form>
          <input placeholder='Digite o nome do filme...'/>
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
