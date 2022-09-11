import AddCoin from "./AddCoin";
import Token from "../types/Token";
import Coin from "./Coin";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const TokenList = ({ filteredTokens }: { filteredTokens: Array<Token> }) => {
  const originalList = filteredTokens;
  const initialList = filteredTokens.filter(
    (token) => token.id === "bitcoin" || token.id === "ethereum"
  );

  const [list, setList] = useState(initialList);
  const [id, setId] = useState('');

  function addCoin(id: string) {
    if (originalList.some((token) => token.id === id)) {
      const newTokenAdd = originalList.find((token: Token) => token.id === id);
      const newList = list.concat(newTokenAdd);
      setList(newList);
      setId('');
      console.log(newList)
    } else alert("Please insert a valid Token id");
    setId('');
  }

  function deleteCoin(id: string) {
    setList((currentList) =>
      currentList.filter((token: Token) => {
        return token.id !== id;
      })
    );
  }

  return (
      <div>
      <AddCoin addId={addCoin} />
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
            {list.map((token) => {
              <button>Delete</button>
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
