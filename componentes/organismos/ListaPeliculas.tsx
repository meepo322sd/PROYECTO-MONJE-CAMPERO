// componentes/moleculas/ListaPeliculas.tsx
import MovieCard from "../atomos/MovieCard";

interface Movie {
  id: string;
  title: string;
  poster: string;
  releaseDate: string;
  genres: string[];
}

interface Props {
  movies: Movie[];
}

const ListaPeliculas = ({ movies }: Props) => {
  return (
    <>
      <h2> Monje campero</h2>
      <div className="container">
        <div className="movieList">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListaPeliculas;
