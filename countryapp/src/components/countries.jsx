// Countries.jsx
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const url = 'https://restcountries.com/v3.1/all';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, []);

  const removeCountry = (cca3) => {
    const newCountry = countries.filter((country) => country.cca3 !== cca3);
    setCountries(newCountry);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const filteredCountries = countries.filter((country) => {
    const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
    const matchesSearch = country.name.common.toLowerCase().includes(searchValue.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section>
      <Filter onSearchChange={handleSearchChange} onRegionChange={handleRegionChange} />

      <section className='grid'>
        {filteredCountries.map((country) => {
          const { cca3, name, population, region, capital, flags } = country;

          return (
            <article key={cca3}>
              <Link to={{ pathname: `/countries/${name.common}`, state: { country } }} className='link-reset'>
                <div>
                  <img src={flags?.svg} alt={name?.common} />
                  <div className='details'>
                    <h3 className='country-name'>{name?.common}</h3>
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region}</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
                    <div className='buttons'>
                      <button className='btn hide' onClick={() => removeCountry(cca3)}>
                        Remove Country
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </section>
  );
}

export default Countries;
