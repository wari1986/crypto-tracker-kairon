import TokenList from "./TokenList";

const DashBoardTable = ({ filteredTokens }: { filteredTokens: string }) => {
  return (
    <>
      <table className="table-auto w-screen my-12">
        <thead>
          <tr>
            <th>#</th>
            <th>#</th>
            <th>Coin</th>
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
          <TokenList filteredTokens={filteredTokens} />
        </tbody>
      </table>
    </>
  );
};

export default DashBoardTable

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  const filteredTokens = await res.json();

  return {
    props: {
      filteredTokens,
    },
  };
};
