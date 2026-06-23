import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="list">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
};

export default MovieList;