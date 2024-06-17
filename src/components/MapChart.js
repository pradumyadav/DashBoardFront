// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const MapChart = ({ data }) => {
//   const [countryCoordinates, setCountryCoordinates] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const countryCoords = await Promise.all(
//           data.map(async (item) => {
//             const response = await fetch(
//               `https://nominatim.openstreetmap.org/search?country=${encodeURIComponent(
//                 item.country
//               )}&format=json&limit=1`
//             );
//             const data = await response.json();
//             console.log('API response for', item.country, data); // Log the API response
//             if (data.length > 0) {
//               const lat = parseFloat(data[0].lat);
//               const lon = parseFloat(data[0].lon);
//               console.log('Coordinates:', lat, lon); // Log the coordinates
//               return {
//                 country: item.country,
//                 intensity: item.intensity,
//                 lat: lat,
//                 lon: lon,
//               };
//             }
//             return null;
//           })
//         );

//         console.log('Filtered Coordinates:', countryCoords); // Log filtered coordinates
//         setCountryCoordinates(countryCoords.filter((coords) => coords !== null));
//       } catch (error) {
//         console.error('Error fetching country coordinates:', error);
//       }
//     };

//     fetchData();
//   }, [data]);

//   if (!data || data.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Map Chart</h2>
//       <MapContainer center={[20, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {countryCoordinates.map((item, index) => (
//           <Marker key={index} position={[item.lat, item.lon]}>
//             <Popup>
//               <div>
//                 <h3>{item.country}</h3>
//                 <p>Intensity: {item.intensity}</p>
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapChart;
