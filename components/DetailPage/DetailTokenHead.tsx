import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const DetailTokenHead = ({ token }: { token: any }) => {
  const priceChange = token.market_data.price_change_percentage_24h;

  return (
    <>
      <div className="flex items-center space-x-4">
        <img className="w-16" src={token.image.large} alt="" />
        <p className="text-2xl bold">
          {token.name} ({token.symbol.toUpperCase()})
        </p>
      </div>
      <div className="flex space-x-6 items-center">
        <p className="text-4xl bold">
          ${token.market_data.current_price.eur.toLocaleString()}
        </p>
        <div className="flex items-center text-2xl bold">
          {priceChange < 0 ? (
            <AiFillCaretDown className="text-red-600" />
          ) : (
            <AiFillCaretUp className="text-green-600" />
          )}
          {priceChange < 0 ? (
            <p className="text-red-600">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="text-green-600">{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailTokenHead;
