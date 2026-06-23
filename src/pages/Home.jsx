import { useState } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import AddMovie from "../components/AddMovie";

const Home = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "Dreams inside dreams",
      posterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Space exploration",
      posterURL: "https://m.media-amazon.com/images/I/71n58m6sR-L.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      m.rating >= (ratingFilter || 0)
  );

  return (
    <div>
      <h1>🎬 Movies</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <AddMovie addMovie={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;