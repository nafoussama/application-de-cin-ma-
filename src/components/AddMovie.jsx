import { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addMovie({
      ...movie,
      id: Date.now(),
      rating: Number(movie.rating),
    });

    setMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="title"
        placeholder="Title"
        value={movie.title}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={movie.description}
        onChange={handleChange}
      />

      <input
        name="posterURL"
        placeholder="Poster URL"
        value={movie.posterURL}
        onChange={handleChange}
      />

      <input
        name="rating"
        type="number"
        placeholder="Rating"
        value={movie.rating}
        onChange={handleChange}
        min="0"
        max="5"
      />

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;