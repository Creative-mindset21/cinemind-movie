import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  //!  REUSEABLE FETCH FUNCTION
  const fetchMovies = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Error in fetching the data");
      }

      const data = await response.json();
      if (!data.results || data.length > 0) {
        setErrorMessage("Failed to fetch data");
      }
      setData(data);
      console.log(data)
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    url && fetchMovies();
  }, [url]);

  return { data, loading, errorMessage };
};

export default useFetch;
