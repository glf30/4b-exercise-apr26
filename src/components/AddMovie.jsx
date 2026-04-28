import React, { useContext, useState } from "react";
import WatchListContext from "../context/WatchListContext";
import { useNavigate } from "react-router";

const AddMovie = () => {
  const [formData, setFormData] = useState({ title: "", genre: "", year: "" });

  const { addMovie } = useContext(WatchListContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
        ...formData,
        id: Date.now(),
        watched: false
    }

    addMovie(newMovie);

    navigate("/watchlist")
  };

  return (
    <>
      <h2>Please add a movie!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label>Genre: </label>
          <input
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label>Year: </label>
          <input
            name="year"
            value={formData.year}
            onChange={handleChange}
            type="text"
          />
        </div>
        <button>Add Movie</button>
      </form>
    </>
  );
};

export default AddMovie;
