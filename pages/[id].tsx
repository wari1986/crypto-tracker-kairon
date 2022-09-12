import Link from "next/link";
import IdPageIcons from "../components/IdPageIcons";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Layout from "../components/Layout";

const Token = ({ token }: { token: any }) => {
  const priceChange = token.market_data.price_change_percentage_24h;

  return (
    <Layout>
      <div className="mx-12 space-y-4">
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

        <IdPageIcons />

        <div className="grid grid-cols-2 gap-4 divide-y divide-solid">
          <div className="flex justify-between">
            <p>Market Cap</p>
            {token.market_data.market_cap.eur ? (
              <p>${token.market_data.market_cap.eur.toLocaleString()}</p>
            ) : (
              <p>Unavailable Data</p>
            )}
          </div>
          <div className="flex justify-between">
            <p>Circulating Supply</p>
            {token.market_data.circulating_supply ? (
              <p>{token.market_data.circulating_supply.toLocaleString()}</p>
            ) : (
              <p>Unavailable Data</p>
            )}
          </div>
          <div className="flex justify-between">
            <p>24 Hour Trading Vol</p>
            {token.market_data.total_volume.eur ? (
              <p>${token.market_data.total_volume.eur.toLocaleString()}</p>
            ) : (
              <p>Unavailable Data</p>
            )}
          </div>
          <div className="flex justify-between">
            <p>Total Supply</p>
            {token.market_data.total_supply ? (
              <p>{token.market_data.total_supply.toLocaleString()}</p>
            ) : (
              <p>Unavailable Data</p>
            )}
          </div>
          <div className="flex justify-between">
            <p>Full Diluted Valuation</p>
            {token.market_data.fully_diluted_valuation.eur ? (
              <p>
                $
                {token.market_data.fully_diluted_valuation.eur.toLocaleString()}
              </p>
            ) : (
              <p>Unavailable Data</p>
            )}
          </div>
          <div className="flex justify-between">
            <p>Max Supply</p>
            {token.market_data.max_supply ? (
              <p>{token.market_data.max_supply.toLocaleString()}</p>
            ) : (
              <p>Unavailable Data</p>
            )}
          </div>
        </div>
        <div className="text-2xl bold pt-12">
          <Link href="/">
            <a>
              <h1>Back to Dashboard</h1>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Token;

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      token: data,
    },
  };
}
