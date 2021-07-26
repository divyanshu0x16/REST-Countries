import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './components/themeContext';
import { Header } from './components/Header';
import countriesService from './services/countries';
import Home from './components/Home';
import CountryPage from './components/CountryPage';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [initialCountries, setInitialCountries] = useState([]);
  const [country, setSearch] = useState('');
  const allCountries = useRef(null);

  useEffect(() => {
    countriesService.getAll().then((response) => {
      allCountries.current = response;
      setCountries(response);
      setInitialCountries(response);
    });
  }, []);

  const applyFilter = (region) => {
    setCountries(
      allCountries.current.filter(
        (country) => country.region.toLowerCase() === region
      )
    );
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const toSearch = event.target.value.toLowerCase();

    const searchResult = [];
    allCountries.current.forEach((country) => {
      if (
        country.name.toLowerCase().indexOf(toSearch) !== -1 ||
        country.name.includes(toSearch)
      ) {
        searchResult.push(country);
      }
    });
    setCountries(searchResult);
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="bg-gray-background dark:bg-blue-background pb-1 h-full min-h-screen">
          <Header />
          <div className="fixed bottom-4 right-3 transform duration-300 hover:scale-105">
            <a
              href="https://github.com/divyanshu0x16/REST-Countries"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none focus:outline-none"
            >
              <div className="rounded-full shadow-lg dark:bg-blue-elements">
                <i className="fab fa-github dark:text-white fa-3x mx-3 my-3"></i>
              </div>
            </a>
          </div>
          <Switch>
            <Route exact path="/">
              <Home
                handleSearch={handleSearch}
                country={country}
                applyFilter={applyFilter}
                countries={countries}
              ></Home>
            </Route>
            {initialCountries.map((country) => {
              const { name } = country;
              const path =
                '/country/' +
                name
                  .replace(/[{()}]/g, '')
                  .replace(/\s+/g, '-')
                  .toLowerCase();
              return (
                <Route path={path} key={country.alpha3Code}>
                  <CountryPage
                    country={country}
                    countries={allCountries.current}
                  ></CountryPage>
                </Route>
              );
            })}
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
