import React, { useState } from 'react'
import SearchContext from "./SearchContext";
import axios from 'axios';

const baseUrl = 'https://google-search72.p.rapidapi.com/'

const Provider = ({ children }) => {
  const [search, setSearch] = useState("Nike");
  const [pathEndPoint, setPathEndPoint] = useState('/search');

  const searchResult = () => {
    axios.get(`${baseUrl}${pathEndPoint}`, {
      headers: {
        "Content-Type": "application/jso",
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
      params: {
        q: search
      }
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export default Provider