import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: "Inception",
      description: "Dreams inside dreams",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Space exploration",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ];

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>

      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Trailer"
        allowFullScreen
      ></iframe>

      <br />

      <button onClick={() => navigate("/")}>
        ⬅ Back Home
      </button>
    </div>
  );
};

export default MovieDetails;