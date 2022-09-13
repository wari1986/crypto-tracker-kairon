import React from 'react'

const DetailTokenTable = ({ token }: { token: any }) => {
  return (
    <div className="grid grid-cols-2 gap-4 text-xl">
      <div className="flex justify-between border-b-2">
        <p>Market Cap</p>
        {token.market_data.market_cap.eur ? (
          <p>${token.market_data.market_cap.eur.toLocaleString()}</p>
        ) : (
          <p>Unavailable Data</p>
        )}
      </div>
      <div className="flex justify-between border-b-2">
        <p>Circulating Supply</p>
        {token.market_data.circulating_supply ? (
          <p>{token.market_data.circulating_supply.toLocaleString()}</p>
        ) : (
          <p>Unavailable Data</p>
        )}
      </div>
      <div className="flex justify-between border-b-2">
        <p>24 Hour Trading Vol</p>
        {token.market_data.total_volume.eur ? (
          <p>${token.market_data.total_volume.eur.toLocaleString()}</p>
        ) : (
          <p>Unavailable Data</p>
        )}
      </div>
      <div className="flex justify-between border-b-2">
        <p>Total Supply</p>
        {token.market_data.total_supply ? (
          <p>{token.market_data.total_supply.toLocaleString()}</p>
        ) : (
          <p>Unavailable Data</p>
        )}
      </div>
      <div className="flex justify-between border-b-2">
        <p>Full Diluted Valuation</p>
        {token.market_data.fully_diluted_valuation.eur ? (
          <p>
            ${token.market_data.fully_diluted_valuation.eur.toLocaleString()}
          </p>
        ) : (
          <p>Unavailable Data</p>
        )}
      </div>
      <div className="flex justify-between border-b-2">
        <p>Max Supply</p>
        {token.market_data.max_supply ? (
          <p>{token.market_data.max_supply.toLocaleString()}</p>
        ) : (
          <p>Unavailable Data</p>
        )}
      </div>
    </div>
  );
};

export default DetailTokenTable
