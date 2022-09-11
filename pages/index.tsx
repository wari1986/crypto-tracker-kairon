import Head from "next/head";
import { useRouter } from "next/router";
import TokenList from "../components/TokenList";
import Token from "../types/Token";
import { useEffect } from "react";

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

  const handleRefresh = ()=>{
    refreshData()
    console.log('refreshed')
  }
  // When setInterval or setTimeout code breaks
  // setTimeout(() =>{
  //   handleRefresh()
  // },4000)

  return (
    <div className="grid place-items-center">
      <Head>
        <title>Crypto tracker</title>
        <meta name="description" content="Crypto token tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
      </div>
      <div>
        <TokenList filteredTokens={filteredTokens} />
      </div>
        <button className='w-1/12 rounded-lg py-2 text-white bg-green-500' onClick={handleRefresh}>Refresh</button>
    </div>
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
