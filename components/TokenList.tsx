import React from "react";
import Tokens from "./Tokens";

const TokenList = ({ filteredTokens }: { filteredTokens: any }) => {
  return (
    <div>
      {filteredTokens.map((token: any) => {
        return (
          <Tokens
            key={token.id}
            name={token.name}
            id={token.id}
            price={token.current_price}
            symbol={token.symbol}
            marketcap={token.market_cap}
            volume={token.total_volume}
            image={token.image}
            priceChangeDay={token.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default TokenList;
