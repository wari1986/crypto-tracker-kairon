import Head from "next/head";
import { useRouter } from "next/router";
import TokenList from "../components/TokenList";
import Token from "../types/Token";
import Layout from "../components/Layout";

export default function Home({
  filteredTokens,
}: {
  filteredTokens: Array<Token>;
}) {
  // useEffect(() => console.log(filteredTokens));
  const router = useRouter();
  //call this function to refresh props
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleRefresh = () => {
    refreshData();
    console.log("refreshed");
  };
  // When setInterval or setTimeout code breaks
  // setTimeout(() =>{
  //   handleRefresh()
  // },4000)

  return (
    <Layout>
      <div>
        <TokenList filteredTokens={filteredTokens} />
        <button
          className="w-1/12 grid place-items-center rounded-lg py-2 text-white mx-auto bg-green-500"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
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
