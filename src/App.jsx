import { useState } from "react";
import Header from "./components/Header";
import { createContext } from "react";
import Movies from "./components/Movies";
import useFetch from "./customHooks/useFetch";
import { Analytics } from "@vercel/analytics/react";

// !CONTEXT PROVIDER API
export const ValueContext = createContext();

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [search, setSearch] = useState("");
  const url1 = `${API_URL}/search/movie?query=${search}&include_adult=true&language=en-US&page=1`;

  const url2 = `${API_URL}/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc`;

  const url = search ? url1 : url2;

  const { data, loading, errorMessage } = useFetch(url, options);
  let movieData = data.results || [];

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
