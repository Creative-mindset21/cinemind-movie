import { FaStar } from "react-icons/fa";
import noPoster from "../assets/No-Poster.png";

const MovieCard = ({
  movie: { title, poster_path, vote_average, release_date, original_language },
}) => {
  return (
    <li className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${noPoster}`
        }
        alt={title}
        title={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <FaStar size={20} className="fill-orange-400" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>

            <span>•</span>
            <p className="text-gray-500">
              {original_language ? original_language.toUpperCase() : "N/A"}
            </p>

            <span>•</span>
            <p className="text-gray-500">
              {release_date ? release_date.split("-")[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
