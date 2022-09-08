import React from 'react'

const Token = ({ token }: {token: any}) => {
  console.log({token})
  return (
    <div className="my-24 mx-12 space-y-4">
      <div className="flex items-center">
        <img className="w-16" src={token.image.small} alt="" />
        <h1 className="text-2xl bold">
          {token.name} ({token.symbol.toUpperCase()})
        </h1>
      </div>
      <div className="flex space-x-6 items-center">
        <h1 className="text-4xl bold">
          ${token.market_data.current_price.eur.toLocaleString()}
        </h1>
        <h1 className="text-2xl bold">
          ${token.market_data.price_change_percentage_24h.toFixed(2)}%
        </h1>
      </div>
      <div className="icons"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-between">
          <h1>Market Cap</h1>
          {token.market_data.market_cap.eur ? (
            <h1>${token.market_data.market_cap.eur.toLocaleString()}</h1>
          ) : (
            <h1>Unavailable Data</h1>
          )}
        </div>
        <div className="flex justify-between">
          <h1>Circulating Supply</h1>
          {token.market_data.circulating_supply ? (
            <h1>{token.market_data.circulating_supply.toLocaleString()}</h1>
          ) : (
            <h1>Unavailable Data</h1>
          )}
        </div>
        <div className="flex justify-between">
          <h1>24 Hour Trading Vol</h1>
          {token.market_data.total_volume.eur ? (
            <h1>${token.market_data.total_volume.eur.toLocaleString()}</h1>
          ) : (
            <h1>Unavailable Data</h1>
          )}
        </div>
        <div className="flex justify-between">
          <h1>Total Supply</h1>
          {token.market_data.total_supply ? (
            <h1>{token.market_data.total_supply.toLocaleString()}</h1>
          ) : (
            <h1>Unavailable Data</h1>
          )}
        </div>
        <div className="flex justify-between">
          <h1>Full Diluted Valuation</h1>
          {token.market_data.fully_diluted_valuation.eur ? (
            <h1>
              ${token.market_data.fully_diluted_valuation.eur.toLocaleString()}
            </h1>
          ) : (
            <h1>Unavailable Data</h1>
          )}
        </div>
        <div className="flex justify-between">
          <h1>Max Supply</h1>
          {token.market_data.max_supply ? (
            <h1>{token.market_data.max_supply.toLocaleString()}</h1>
          ) : (
            <h1>Unavailable Data</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Token

export async function getServerSideProps(context: any) {
  const {id} = context.query

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json()

  return {
    props: {
      token: data
    }
  }
}
