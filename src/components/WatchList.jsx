import React, { useContext } from "react";
import WatchListContext from "../context/WatchListContext";

const WatchList = () => {
  const { watchList, deleteMovie, toggleWatched } = useContext(WatchListContext);
  return (
    <>
      {watchList.length === 0 ? (
        <> List is empty, please add a movie </>
      ) : (
        <ol>
          {watchList.map((movie) => (
            <li>
              <h3>{movie.title}</h3>
              <h4>Genre: {movie.genre}</h4>
              <h4>Year: {movie.year} </h4>
              <p>{movie.watched ? "Watched!" : "Not Watched"}</p>
              <button onClick={() => deleteMovie(movie.id)}>Delete</button>
              <button onClick={() => toggleWatched(movie.id)}>Toggle Watched</button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default WatchList;
