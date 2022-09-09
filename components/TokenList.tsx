import { useEffect } from 'react';
import Token from '../types/Token';
import Coin from "../components/Coin";

const TokenList = ({ filteredTokens }: { filteredTokens: Array<Token>}) => {
  useEffect(()=> console.log(filteredTokens))

  return (
    <div>
      {filteredTokens.map((token: Token) => {
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
    </div>
  );
};

export default TokenList;
