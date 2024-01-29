/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

function Filter({ onSearchChange, onRegionChange }) {
  return (
    <section className='filter'>
      <form className="form-control">
        <input
          type="search"
          name='search'
          id='search'
          placeholder='Search for a country'
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </form>

      <div className='region-filter'>
        <select
          name="select"
          id="select"
          className="select"
          onChange={(e) => onRegionChange(e.target.value)}
        >
          <option value='All'>Filter by Region</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>Americas</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;
