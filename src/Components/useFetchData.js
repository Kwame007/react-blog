import { useState, useEffect } from "react";

// custom hook to make data fetch requests
// fetch blogs from server {json server}
const useFetchData = (url) => {
  // states to manage [data,loading,error]
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // handle side effect {using side effect to handle fetch()}
  useEffect(() => {
    const abortFetch = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortFetch.signal })
        .then((res) => {
          if (!res.ok) {
            // setIsLoading(true);

            throw new Error("Could not fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 1000);
    // useEffect clean function
    return () => {
      // abort data fetch before next request
      abortFetch.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
export default useFetchData;
