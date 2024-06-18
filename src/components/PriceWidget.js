

// import React from 'react';

// const PriceWidget = ({ selectedCountry }) => {
//   const { country, region, sector, intensity, topic } = selectedCountry || {};

//   return (
//     <div className="price-widget">
//       <h2>Price Widget</h2>
//       {selectedCountry && (
//         <div className="price-widgets-container">
//           <div className="price-box">
//             <h3>Country: {country ?country : "Data Not Present" }</h3>
//             <ul>
//               <li><strong>Region: </strong>{region ? region :"Data Not Present"}</li>
//             </ul>
//           </div>
//           <div className="price-box">
//             <h3>Country: {country ?country : "Data Not Present"}</h3>
//             <ul>
//               <li><strong>Sector: </strong>{sector ? sector : "Data Not Present"}</li>
//             </ul>
//           </div>
//           <div className="price-box">
//             <h3>Country: {country ?country : "Data Not Present"}</h3>
//             <ul>
//               <li><strong>Intensity: </strong>{intensity ?intensity : "Data Not Present"}</li>
//             </ul>
//           </div>
//           <div className="price-box">
//             <h3>Country: {country ?country : "Data Not Present"}</h3>
//             <ul>
//               <li><strong>Topic: </strong>{topic ? topic :"Data Not Present" }</li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PriceWidget;

import React, { useState } from 'react';

const PriceWidget = ({ selectedCountry }) => {
  const [clickedBox, setClickedBox] = useState(null); // State to track which box is clicked

  const { country, region, sector, intensity, topic } = selectedCountry || {};

  const handleBoxClick = (boxIndex) => {
    setClickedBox(boxIndex);
  };

  return (
    <div className="price-widget">
      <h2>Widget</h2>
      {selectedCountry && (
        <div className="price-widgets-container">
          <div className={`price-box ${clickedBox === 0 ? 'clicked' : ''}`} onClick={() => handleBoxClick(0)}>
            <h3>Country: {country ? country : "Data Not Present"}</h3>
            <ul>
              <li><strong>Region: </strong>{region ? region : "Data Not Present"}</li>
            </ul>
          </div>
          <div className={`price-box ${clickedBox === 1 ? 'clicked' : ''}`} onClick={() => handleBoxClick(1)}>
            <h3>Country: {country ? country : "Data Not Present"}</h3>
            <ul>
              <li><strong>Sector: </strong>{sector ? sector : "Data Not Present"}</li>
            </ul>
          </div>
          <div className={`price-box ${clickedBox === 2 ? 'clicked' : ''}`} onClick={() => handleBoxClick(2)}>
            <h3>Country: {country ? country : "Data Not Present"}</h3>
            <ul>
              <li><strong>Intensity: </strong>{intensity ? intensity : "Data Not Present"}</li>
            </ul>
          </div>
          <div className={`price-box ${clickedBox === 3 ? 'clicked' : ''}`} onClick={() => handleBoxClick(3)}>
            <h3>Country: {country ? country : "Data Not Present"}</h3>
            <ul>
              <li><strong>Topic: </strong>{topic ? topic : "Data Not Present"}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceWidget;
