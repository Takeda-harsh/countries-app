
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countries from './components/countries';
import Header from './components/header';
import Country from './components/country';
import Filter from "./components/filter"
import { useParams } from 'react-router-dom';

function App() {
  const { name } = useParams();
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useState('light');
  

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';
    const fetchCountryData = async () => {
      try {
        const response = await fetch(url);
        const allCountries = await response.json();
        setCountries(allCountries);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, []);

  

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const filteredCountries = countries.filter((country) => {
    const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
    const matchesSearch = country.name.common.toLowerCase().includes(searchValue.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <Router>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      
      <Routes>

      
      
     
        <Route
          path="/"
          element={
            <React.Fragment>
            {!name && (
              <Filter
                onSearchChange={handleSearchChange}
                onRegionChange={handleRegionChange}
              />
            )}
            <Countries
              countryData={countries}
              onChange={handleRegionChange}
              onSearchChange={handleSearchChange}
              filteredCountries={filteredCountries}
            />
          </React.Fragment>
          }
        />
        <Route path={`/countries/:name`} element={<Country countryData={countries} />} />
      </Routes>
    </Router>
  );
}

export default App;
