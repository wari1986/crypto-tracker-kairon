import AddCoinForm from "../Coin/AddCoinForm";
import Token from "../../types/Token";
import Coin from "../Coin/Coin";
import { useState } from "react";
import DashboardTableHeader from '../Dashboard/DashboardTableBodyHeader';

const DashboardTable = ({ filteredTokens }: { filteredTokens: Array<Token> }) => {
  const originalList = filteredTokens;
  const initialList = filteredTokens.filter(
    (token) => token.id === "bitcoin" || token.id === "ethereum"
  );

  const [list, setList] = useState(initialList);
  const [id, setId] = useState("");

  function addCoin(id: string) {
    const currentUserList = list.find((token) => token.id === id);

    // Check if id exist in original list
    if (originalList.some((token: Token) => token.id === id)) {
      // Check if id added exist in current list
      if (currentUserList === undefined) {
        const newTokenToAdd: any= originalList.find(
          (token: Token) => token.id === id
        );
        const newList = list.concat(newTokenToAdd);
        setList(newList);
        setId("");
      } else alert("This Coin is already in your list");
      setId("");
    } else alert("Please insert a valid Token id");
    setId("");
  }

  function deleteCoin(id: string) {
    setList((currentList: Token[]) =>
      currentList.filter((token: Token) => {
        return token.id !== id;
      })
    );
  }

  return (
    <>
      <AddCoinForm addId={addCoin} />
      <table className="table-auto w-full my-8">
        <DashboardTableHeader />
        <tbody>
          {list.map((token) => {
            return (
              <Coin
                deleteCoin={deleteCoin}
                key={token.id}
                market_cap_rank={token.market_cap_rank}
                id={token.id}
                image={token.image}
                name={token.name}
                symbol={token.symbol}
                current_price={token.current_price}
                price_change_percentage_1h_in_currency={
                  token.price_change_percentage_1h_in_currency
                }
                price_change_percentage_24h_in_currency={
                  token.price_change_percentage_24h_in_currency
                }
                price_change_percentage_7d_in_currency={
                  token.price_change_percentage_7d_in_currency
                }
                total_volume={token.total_volume}
                market_cap={token.market_cap}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DashboardTable;
