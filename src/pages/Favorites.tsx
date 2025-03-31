import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {favorites.length > 0 ? (
        <>
          <h2 className="text-2xl font-semibold text-center mb-4">Your Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold">No Favorite Movies Yet</h2>
          <p className="text-gray-500 mt-2">Start adding movies to your favorites and they will appear here!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
