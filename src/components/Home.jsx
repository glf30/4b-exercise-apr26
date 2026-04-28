import React, { useContext } from "react";
import WatchListContext from "../context/WatchListContext";

const Home = () => {
  const { watchList } = useContext(WatchListContext);
  const total = watchList.length;
  const watched = watchList.filter((movie) => movie.watched).length;
  const remaining = total - watched;

  return (
    <>
      <h1>Welcome To The Watch List!</h1>
      {total === 0 ? (
        <h4>Please add a movie to view your stats</h4>
      ) : (
        <>
          <h2>Stats!</h2>
          <h3>Total Movies: {total}</h3>
          <h3>Watched: {watched}</h3>
          <h3>Remaining: {remaining}</h3>
        </>
      )}
    </>
  );
};

export default Home;
