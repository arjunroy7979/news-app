import axios from 'axios';
import {useState} from 'react';
import {NewsAppContext} from './NewsAppContext';
const API_KEY = 'b1d8490bbe004ee3a49b1c5bdb6e60e4';
const BASE_URL = `https://newsapi.org/v2/top-headlines?`;

export const NewsAppProvider = ({children}: any) => {
  const [headlineByCategory, setHeadlineByCategory] = useState([]);

  const [businessState, setBusinessState] = useState([]);
  const [entertainmentState, setEntertainmentState] = useState([]);
  const [healthState, setHealthState] = useState([]);
  const [scienceState, setScienceState] = useState([]);
  const [sportsState, setSportsState] = useState([]);
  const [technologyState, setTechnologyState] = useState([]);
  const [searchState, setSearchState] = useState([]);
  const [queryState, setQueryState] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const getHeadlineByCategory = (COUNTRY_CODE: any, CATEGORY: any) => {
    axios
      .get(
        `${BASE_URL}country=${COUNTRY_CODE}&category=${CATEGORY}&apiKey=${API_KEY}`
      )
      .then((response: any) => {
        setHeadlineByCategory(response.data);
        return response.data;
      })
      .catch((error: any) => {
        // handle error
        console.log(error);
      });
  };

  return (
    <NewsAppContext.Provider
      value={{
        headlineByCategory,
        getHeadlineByCategory,
        businessState,
        setBusinessState,
        entertainmentState,
        setEntertainmentState,
        healthState,
        setHealthState,
        scienceState,
        setScienceState,
        sportsState,
        setSportsState,
        technologyState,
        setTechnologyState,
        searchState,
        setSearchState,
        setQueryState,
        queryState,
        searchResult,
        setSearchResult,
        searchQuery,
        setSearchQuery,
      }}>
      {children}
    </NewsAppContext.Provider>
  );
};
