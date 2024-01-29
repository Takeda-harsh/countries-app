/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../components/country.css'

function Country({countryData}) {
  const { name } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    if (!name || !countryData) {
      return;
    }

    const fetchCountryData = () => {
      // Find the country object in the data array based on the countryName
      const selectedCountry = countryData?.find(
        (country) =>
          country?.name?.common.toLowerCase() === name.toLowerCase()
      );
 
      // Set the found country data in the state
      setCountry(selectedCountry || {});
      console.log(selectedCountry)
    };

    fetchCountryData();
  }, [name, countryData]);

  const {population,  capital, region, subregion, languages, currencies, tld, flags, borders } = country;
 
  return (
    <>
      <Link to='/' className='btn btn-light'>
        <i className="fas fa-arrow-left"></i> Back
      </Link>
{
      <section className='country'>
        
        <article>
          <div className='flag'> 
            <img src={flags?.svg} alt={country.name?.common} />
          </div>
        <div className='details-section'>

       
          <div className='country-details'>
            <div className='first'>
              <h2>{country.name?.common}</h2>
              
              <h5>
                Native Name: <span>{country.name?.nativeName?.cat?.official}</span>
              </h5>
              <h5>
                Population: <span>{population}</span>
              </h5>
              <h5>
                Region: <span>{region}</span>
              </h5>
              <h5>
                Sub Region: <span>{subregion}</span>
              </h5>
              <h5>
                Capital: <span>{capital?.[0]}</span>
              </h5>
            </div>

            <div className='second'>
              <h5>
                Top Level Domain: <span>{tld?.[0]}</span>
              </h5>
              <h5>
                Currencies: <span>{currencies?.EUR?.name}</span>
              </h5>
              <h5>
                Languages: <span>{languages?.cat}</span>
              </h5>
            </div>
          </div>

          <div className='border-countries'>
            <h3>Border Countries:</h3>
            {borders && borders.length > 0 ? (
              <ul>
                {borders.map((border) => (
                  <li key={border}>
                    <Link to={`/countries/${border}`} className='btn btn-dark bord'>
                      {border}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No bordering countries</p>
            )}
          </div>
          </div>
        </article>
      </section>}
      
    </>
  );
}

export default Country;
