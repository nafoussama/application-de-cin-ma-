import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/movie/${movie.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
    </div>
  );const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};


};

export default MovieCard;