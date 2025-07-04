import css from '../App/App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal/MovieModal';


export default function App() {
  // const myKey = import.meta.env.VITE_API_KEY;
  // const myToken = import.meta.env.VITE_TMDB_TOKEN;

  
  return (
    <>
      <div className={css.app}> 
        <SearchBar />
        <MovieGrid />
        <Loader />
        <ErrorMessage />
        <MovieModal />
      </div>

    </>
  )
}