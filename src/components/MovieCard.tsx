import { useMovieContext } from "../contexts/MovieContext";
import { Movie } from "../models/Movie";

interface MovieProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-60 object-cover rounded-md"
        />

        <button
          onClick={onClick}
          className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition ${
            favorite ? "bg-red-500 text-white hover:bg-red-600" : "bg-white text-red-500 border border-red-500 hover:bg-red-100"
          }`}
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-gray-500">{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
