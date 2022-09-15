import React from 'react'

const DashboardTableHeader = () => {
  return (
    <>
      <thead>
        <tr className="text-center border border-top-solid ">
          <th></th>
          <th>#</th>
          <th className="text-left">Coin</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>Total Volume</th>
          <th>Mkt Cap</th>
          <th>Last 7 Days</th>
        </tr>
      </thead>
    </>
  );
}

export default DashboardTableHeader
