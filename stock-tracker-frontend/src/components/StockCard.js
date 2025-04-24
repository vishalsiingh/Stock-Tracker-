import React from 'react';

const StockCard = ({ data }) => {
  if (!data["Time Series (Daily)"]) return <p>No data found.</p>;

  const dates = Object.keys(data["Time Series (Daily)"]);
  const latest = data["Time Series (Daily)"][dates[0]];
  
  return (
    <div className="stock-card">
      <h3>{data["Meta Data"]["2. Symbol"]}</h3>
      <p><strong>Date:</strong> {dates[0]}</p>
      <p><strong>Open:</strong> {latest["1. open"]}</p>
      <p><strong>Close:</strong> {latest["4. close"]}</p>
      <p><strong>Volume:</strong> {latest["5. volume"]}</p>
    </div>
  );
};

export default StockCard;

