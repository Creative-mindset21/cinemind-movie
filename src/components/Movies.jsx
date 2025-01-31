import MovieCard from "./MovieCard";
import { useContext } from "react";
import { ValueContext } from "../App";

const Movies = () => {
  const { movieData } = useContext(ValueContext);
  console.log(movieData);

  return (
    <section className="movies">
      <h2>Popular</h2>
      <ul>
        {movieData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default Movies;
