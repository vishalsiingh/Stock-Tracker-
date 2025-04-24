import React, { useEffect, useState } from 'react';
import StockChart from './components/StockChart'; // Make sure this is the correct path

const App = () => {
  const [stockData, setStockData] = useState(null);
  
  useEffect(() => {
    fetch('http://127.0.0.1:5000/stock/AAPL') // Adjust the stock ticker as needed
      .then(response => response.json())
      .then(data => setStockData(data))
      .catch(error => console.error('Error fetching stock data:', error));
  }, []);

  if (!stockData) {
    return <div>Loading...</div>; // Ensure this is showing up when data is loading
  }

  return (
    <div className="App">
      <h1>Stock Data for AAPL</h1>
      <StockChart data={stockData} /> {/* Ensure this is the correct way to pass data */}
    </div>
  );
};

export default App;
