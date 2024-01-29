/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

// eslint-disable-next-line react/prop-types
function Countries({  filteredCountries}) {
  return (
    <section>
     
     
      <section className='grid'>
        {filteredCountries.map((country) => {
       
          const { cca3, name, population, region, capital, flags } = country;

          return (
            <article key={cca3}>
              <Link to={`/countries/${name.common}`} className='link-reset'>
                <div>
                  <div className='img-div'>
                  <img src={flags?.svg} alt={name?.common} />
                  </div>
                 
                  <div className='details'>
                    <h3 className='country-name'>{name?.common}</h3>
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region}</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
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
