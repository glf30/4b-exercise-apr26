import { createContext } from "react";

const WatchListContext = createContext({
    watchList: [],
    addMovie: () => {},
    deleteMovie: () => {},
    toggleWatched: () => {}
})

export default WatchListContext;