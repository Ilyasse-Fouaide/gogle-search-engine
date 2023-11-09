import React, { useEffect, useState } from 'react'
import SearchContext from "./SearchContext";
import axios from 'axios';

const baseUrl = 'https://google-search72.p.rapidapi.com'

const Provider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [pathEndPoint, setPathEndPoint] = useState('/search');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchResult = () => {
      axios.get(`${baseUrl}${pathEndPoint}`, {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        },
        params: {
          q: search
        }
      })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          setResult(response.data.items);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    if (search) {
      searchResult();
    }
  }, [search, pathEndPoint])

  return (
    <SearchContext.Provider value={{ search, setSearch, pathEndPoint, setPathEndPoint, result, loading }}>
      {children}
    </SearchContext.Provider>
  )
}

export default Provider