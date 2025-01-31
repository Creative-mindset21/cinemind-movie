import { useState } from "react";
import Header from "./components/Header";
import { createContext } from "react";
import Movies from "./components/Movies";
import useFetch from "./customHooks/useFetch";

// !CONTEXT PROVIDER API
export const ValueContext = createContext();

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3/discover/movie";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [search, setSearch] = useState("");

  const url = `${API_URL}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  const { data, loading, errorMessage } = useFetch(url, options);
  let movieData = data.results;
  console.log(movieData);

  return (
    <section className="pattern">
      <div className="wrapper">
        <ValueContext.Provider
          value={{ search, setSearch, errorMessage, loading, movieData }}
        >
          <Header />
          <Movies />
        </ValueContext.Provider>
      </div>
    </section>
  );
}

export default App;
