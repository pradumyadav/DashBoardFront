import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/Filters.css';

const Filters = ({ filters, setFilters, applyFilters, options }) => {
 
  const [visibleFilter, setVisibleFilter] = useState(null);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleDropdownChange = (name, selectedOption) => {
    setFilters({
      ...filters,
      [name]: selectedOption ? selectedOption.value : null,
    });
    applyFilters();
  };

  const toggleFilter = (filterName) => {
    setVisibleFilter(visibleFilter === filterName ? null : filterName);
  };

  return (
    <div className="sidebar">
      <div className="filters-container">
      <div>
        <img src="https://blackcoffer.com/wp-content/uploads/2023/10/Black-720x172-4.png" alt="IMG" className='logo'/>
      </div>
        <form className="filters-form" onSubmit={(e) => e.preventDefault()}>
          <div className="filter-group">
            <div className="filter-item">
              <label className="filter-label" onClick={() => toggleFilter('end_year')}>End Year:</label>
              {visibleFilter === 'end_year' && (
                <input
                  type="text"
                  className="filter-input"
                  name="end_year"
                  value={filters.end_year}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="filter-item">
              <label className="filter-label" onClick={() => toggleFilter('topic')}>Topic:</label>
              {visibleFilter === 'topic' && (
                <input
                  type="text"
                  className="filter-input"
                  name="topic"
                  value={filters.topic}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="filter-item">
              <label className="filter-label" onClick={() => toggleFilter('sector')}>Sector:</label>
              {visibleFilter === 'sector' && (
                <Select
                  className="filter-select"
                  name="sector"
                  value={options.sectors.find((option) => option.value === filters.sector)}
                  onChange={(selectedOption) => handleDropdownChange('sector', selectedOption)}
                  options={options.sectors}
                  placeholder="Select Sector"
                  isClearable
                />
              )}
            </div>

            <div className="filter-item">
              <label className="filter-label" onClick={() => toggleFilter('region')}>Region:</label>
              {visibleFilter === 'region' && (
                <Select
                  className="filter-select"
                  name="region"
                  value={options.regions.find((option) => option.value === filters.region)}
                  onChange={(selectedOption) => handleDropdownChange('region', selectedOption)}
                  options={options.regions}
                  placeholder="Select Region"
                  isClearable
                />
              )}
            </div>

            <div className="filter-item">
              <label className="filter-label" onClick={() => toggleFilter('country')}>Country:</label>
              {visibleFilter === 'country' && (
                <Select
                  className="filter-select"
                  name="country"
                  value={options.countries.find((option) => option.value === filters.country)}
                  onChange={(selectedOption) => handleDropdownChange('country', selectedOption)}
                  options={options.countries}
                  placeholder="Select Country"
                  isClearable
                />
              )}
            </div>

            <div className="filter-item">
              <label className="filter-label" onClick={() => toggleFilter('city')}>City:</label>
              {visibleFilter === 'city' && (
                <input
                  type="text"
                  className="filter-input"
                  name="city"
                  value={filters.city}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="filter-item">
              <label className="filter-label" onClick={() => toggleFilter('pestle')}>PESTLE:</label>
              {visibleFilter === 'pestle' && (
                <input
                  type="text"
                  className="filter-input"
                  name="pestle"
                  value={filters.pestle}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="filter-item">
              <label className="filter-label" onClick={() => toggleFilter('swot')}>SWOT:</label>
              {visibleFilter === 'swot' && (
                <input
                  type="text"
                  className="filter-input"
                  name="swot"
                  value={filters.swot}
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="filter-item">
              <button type="submit" className="apply-button" onClick={applyFilters}>
                Apply Filters
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filters;
