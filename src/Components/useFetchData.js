import React, { useState, useEffect } from "react";

// custom hook to make data fetch requests
// fetch blogs from server {json server}
const useFetchData = (url) => {
  // states to manage [data,loading,error]
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // handle side effect {using side effect to handle fetch()}
  useEffect(() => {
    fetch(url)
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
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
        console.log(err.message);
      });
  }, [url]);
  console.log(data, isLoading, error);
};
export default useFetchData;
