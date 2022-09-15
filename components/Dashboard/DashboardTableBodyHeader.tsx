import React from "react";

const DashboardTableHeader = () => {
  return (
    <>
      <thead>
        <tr className="text-center ">
          <th></th>
          <th>#</th>
          <th className="text-left">Coin</th>
          <th>Price</th>
          <th>1h</th>
          <th className="hidden md:table-cell">24h</th>
          <th className="hidden md:table-cell">7d</th>
          <th className="hidden md:table-cell">Total Volume</th>
          <th className="hidden md:table-cell">Mkt Cap</th>
          <th className="hidden md:table-cell">Last 7 Days</th>
        </tr>
      </thead>
    </>
  );
};

export default DashboardTableHeader;
