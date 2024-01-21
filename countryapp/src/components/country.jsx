import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../components/country.css'

function Country() {
  const { name } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    if (!name) {
      return;
    }

    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!response.ok) {
          console.error('Failed to fetch country data:', response.status, response.statusText);
          return;
        }

        const countryData = await response.json();
        setCountry(countryData[0]);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, [name]);

  const { cca3 } = country;

  return (
    <>
      <Link to='/' className='btn btn-light'>
        <i className="fas fa-arrow-left"></i> Back
      </Link>

      <section className='country'>
        <article key={cca3}>
          <div className='flag'> 
            <img src={country.flags?.svg} alt={country.name?.common} />
          </div>

          <div className='country-details'>
            <div>
              <h2>{country.name?.common}</h2>
              <h5>
                Native Name: <span>{country.name?.nativeName?.cat?.common}</span>
              </h5>
              <h5>
                Population: <span>{country.population}</span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Sub Region: <span>{country.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital?.[0]}</span>
              </h5>
            </div>

            <div>
              <h5>
                Top Level Domain: <span>{country.tld?.[0]}</span>
              </h5>
              <h5>
                Currencies: <span>{country.currencies?.EUR?.name}</span>
              </h5>
              <h5>
                Languages: <span>{country.languages?.cat}</span>
              </h5>
            </div>
          </div>

          <div>
            <h3>Border Countries:</h3>
            
          </div>
        </article>
      </section>
    </>
  );
}

export default Country;
