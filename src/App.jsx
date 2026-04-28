import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import AddMovie from "./components/AddMovie";
import WatchListContext from "./context/WatchListContext";
import Navbar from "./components/Navbar";

function App() {
  const [watchList, setWatchList] = useState([
    {
      id: 0,
      title: "React: The Movie!",
      genre: "Mystery",
      year: 2016,
      watched: false,
    },
  ]);

  const addMovie = (movie) => {
    setWatchList([...watchList, movie]);
  };

  const deleteMovie = (id) => {
    const results = watchList.filter((movie) => movie.id !== id);
    setWatchList(results)
  };

  const toggleWatched = (id) => {

    const results = watchList.map((movie) => {
      if(movie.id === id){
        const updatedMovie = {
          ...movie,
          watched: !movie.watched
        }
        return updatedMovie;
      } else {
        return movie;
      }
    })
    setWatchList(results);
  }

  return (
    <>
      <h1>Watch List Project</h1>
      <Navbar />
      <WatchListContext value={{ watchList, addMovie, deleteMovie, toggleWatched }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Routes>
      </WatchListContext>
    </>
  );
}

export default App;
