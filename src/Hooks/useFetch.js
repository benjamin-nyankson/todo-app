import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        const data = res?.data;
        setApiData(data);
        setLoading(false);
      } catch (error) {
        setServerError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { loading, apiData, serverError };
}
