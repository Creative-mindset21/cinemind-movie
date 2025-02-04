import { useState } from "react";
import Header from "./components/Header";
import { createContext } from "react";
import Movies from "./components/Movies";
import useFetch from "./customHooks/useFetch";
import { Analytics } from "@vercel/analytics/react";
import { useDebounce } from "react-use";
import PrevNext from "./components/PrevNext";

// ! CONTEXT PROVIDER API
export const ValueContext = createContext();

// ! API KEY AND API URL
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

// ! FETCH OPTIONS
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState("");
  const [pageCount, setPageCount] = useState(1);

  // ! HANDLE PREV MOVIE LIST BUTTON
  const prevBtn = () => {
    if (pageCount > 1) {
      setPageCount((prev) => prev - 1);
    } else if (pageCount === 1) {
      setPageCount(pageCount);
    } else {
      return;
    }
  };

  // ! HANDLE NEXT MOVIE LIST BUTTON
  const nextBtn = () => {
    setPageCount((prev) => prev + 1);
  };

  useDebounce(() => setDebounce(search), 500, [search]);

  // !URLS
  const url1 = `${API_URL}/search/movie?query=${search}&include_adult=false&include_video=true&language=en-US&page=${pageCount}`;
  const url2 = `${API_URL}/discover/movie?include_adult=false&include_video=true&language=en-US&page=${pageCount}&sort_by=popularity.desc`;

  const url = debounce ? url1 : url2;

  const { data, loading, errorMessage } = useFetch(url, options);
  let movieData = data.results || [];

  return (
    <section className="pattern">
      <div className="wrapper">
        <ValueContext.Provider
          value={{
            search,
            setSearch,
            errorMessage,
            loading,
            movieData,
            prevBtn,
            nextBtn,
            pageCount,
          }}
        >
          <Header />
          <Movies />
          <PrevNext />
          <Analytics />
        </ValueContext.Provider>
      </div>
    </section>
  );
}

export default App;
