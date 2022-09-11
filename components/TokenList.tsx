import { useEffect } from "react";
import Token from "../types/Token";
import Coin from "../components/Coin";
import { useState } from "react";

const TokenList = ({ filteredTokens }: { filteredTokens: Array<Token> }) => {
  const initialList = filteredTokens.filter(
    (token) => token.id === "bitcoin" || token.id === "ethereum"
  );
  // console.log(initialList);

  return (
    <div>
      <table className="table-auto w-screen mx-8 my-8">
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
        <tbody>
          {initialList.map((token) => {
            return (
              <Coin
                key={token.id}
                id={token.id}
                image={token.image}
                name={token.name}
                symbol={token.symbol}
                current_price={token.current_price}
                price_change_24h={token.price_change_percentage_24h}
                total_volume={token.total_volume}
                market_cap={token.market_cap}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TokenList;
