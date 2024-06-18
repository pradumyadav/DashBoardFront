
import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./components/Filters";
import BarChart from "./components/BarChart";
import PriceWidget from "./components/PriceWidget";
import "./styles/App.css";
import Flag from "react-world-flags";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import PieChart from "./components/PieChart";

const App = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    end_year: "",
    topic: "",
    sector: "",
    region: "",
    country: "",
    city: "",
    pestle: "",
    swot: "",
  });

  const [options, setOptions] = useState({
    sectors: [],
    regions: [],
    countries: [],
  });

  const [selectedCountryData, setSelectedCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = async () => {
    try {
      const url = "https://dashboardbackend-29n3.onrender.com/api/getdata?";
      const queryParams = [];

      for (const key in filters) {
        if (filters[key]) {
          queryParams.push(`${key}=${filters[key]}`);
        }
      }

      const queryString = queryParams.join("&");
      const result = await axios.get(`${url}${queryString}`);
      setData(result.data);

      const sectors = [...new Set(result.data.map((item) => item.sector))];
      const regions = [...new Set(result.data.map((item) => item.region))];
      const countries = [...new Set(result.data.map((item) => item.country))];

      setOptions({
        sectors: sectors.map((sector) => ({ value: sector, label: sector })),
        regions: regions.map((region) => ({ value: region, label: region })),
        countries: countries.map((country) => ({
          value: country,
          label: country,
        })),
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const applyFilters = () => {
    fetchData();
  };

  const handleBarClick = (clickedData) => {
    const countryData = data.filter(
      (item) => item.country === clickedData.country
    );
    setSelectedCountryData(countryData);
    setSelectedCountry(clickedData);

    const sectorCounts = countryData.reduce((acc, item) => {
      acc[item.sector] = (acc[item.sector] || 0) + 1;
      return acc;
    }, {});

    const pieChartData = Object.entries(sectorCounts).map(
      ([sector, count]) => ({ sector, count })
    );
    setFilteredData(pieChartData);
  };

  // AG Grid column definitions
  const columnDefs = [
    { headerName: "End Year", field: "end_year" },
    { headerName: "Country", field: "country" },
    { headerName: "Intensity", field: "intensity" },
    { headerName: "Sector", field: "sector" },
    { headerName: "Topic", field: "topic" },
    { headerName: "Insight", field: "insight" },
    { headerName: "URL", field: "url" },
    { headerName: "Region", field: "region" },
    { headerName: "Start Year", field: "start_year" },
    { headerName: "Impact", field: "impact" },
    { headerName: "Added", field: "added" },
    { headerName: "Published", field: "published" },
    { headerName: "Relevance", field: "relevance" },
    { headerName: "Pestle", field: "pestle" },
    { headerName: "Source", field: "source" },
    { headerName: "Title", field: "title" },
    { headerName: "Likelihood", field: "likelihood" },
  ];

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Filters
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
          options={options}
        />
      </div>
      <div className="main-container">
        <div className="content-container">
          <div className="chart-container">
            <PriceWidget selectedCountry={selectedCountry} />
            <div className="charts-wrapper">
              <div>
                <BarChart data={data} onBarClick={handleBarClick} />
              </div>
              <div>
                <PieChart filteredData={filteredData} />
              </div>
            </div>
            {selectedCountry && (
              <div className="selected-country-info">
                <h2>Selected Country: {selectedCountry.country}</h2>
                <Flag
                  code={selectedCountry.country_code}
                  style={{ width: 50, height: 30 }}
                />
              </div>
            )}
            {selectedCountryData.length > 0 && (
              <div className="ag-theme-alpine table-container">
                <AgGridReact
                  rowData={selectedCountryData}
                  pagination={true}
                  paginationPageSize={7} // Number of rows per page
                  domLayout="autoHeight"
                  columnDefs={columnDefs}
                  defaultColDef={{
                    filter: "agTextColumnFilter", // Enable text filter by default
                    sortable: true,
                    resizable: true,
                    flex: 1,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

