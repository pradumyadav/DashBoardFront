// import React, { useRef, useMemo, useCallback } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import '../styles/IndustryTable.css';

// const IndustryTable = ({ rowData, onBackClick }) => {
//   const gridRef = useRef(null);

//   const columns = useMemo(() => [
//     { headerName: 'Title', field: 'title', sortable: true, filter: true },
//     { headerName: 'Country', field: 'country', sortable: true, filter: true },
//     { headerName: 'Sector', field: 'sector', sortable: true, filter: true },
//     { headerName: 'Topic', field: 'topic', sortable: true, filter: true },
//     { headerName: 'Insight', field: 'insight', sortable: true, filter: true },
//     { headerName: 'Region', field: 'region', sortable: true, filter: true },
//     { headerName: 'Relevance', field: 'relevance', sortable: true, filter: true },
//     { headerName: 'Pestle', field: 'pestle', sortable: true, filter: true },
//     { headerName: 'Source', field: 'source', sortable: true, filter: true },
//   ], []);

//   const defaultColDef = useMemo(() => ({
//     flex: 1,
//     minWidth: 150,
//     resizable: true,
//   }), []);

//   const handleGridReady = useCallback((params) => {
//     gridRef.current = params.api;
//   }, []);

//   return (
//     <div className="ag-theme-alpine industry-table">
//       <div className="table-header">
//         <h3>Industry Insights - {rowData.length} records</h3>
//         <button className="back-button" onClick={onBackClick}>Back</button>
//       </div>
//       <div className="ag-grid-container">
//         <AgGridReact
//           ref={gridRef}
//           rowData={rowData}
//           columnDefs={columns}
//           defaultColDef={defaultColDef}
//           onGridReady={handleGridReady}
//         />
//       </div>
//     </div>
//   );
// };

// export default IndustryTable;
