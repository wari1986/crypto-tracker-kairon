import Token from "../types/Token";
import TokenList from "../components/TokenList";
import DashboardRefreshButton from "../components/DashboardRefreshButton";
import Layout from "../components/Layout";

export default function Home({
  filteredTokens,
}: {
  filteredTokens: Array<Token>;
}) {
  // useEffect(() => console.log(filteredTokens));

  return (
    <Layout>
      <TokenList filteredTokens={filteredTokens} />
      <DashboardRefreshButton />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  );
  const filteredTokens = await res.json();
  return {
    props: {
      filteredTokens,
    },
  };
};
