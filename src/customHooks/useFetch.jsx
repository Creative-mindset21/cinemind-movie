import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  //!  REUSEABLE FETCH FUNCTION
  const fetchMovies = async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Error in fetching the data");
      }

      const data = await response.json();
      if (!data.results) {
        setErrorMessage("Failed to fetch data");
      }
      setData(data);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [url, options]);

  return { data, loading, errorMessage };
};

export default useFetch;
