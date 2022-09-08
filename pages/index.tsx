import Head from 'next/head'
import InputBar from '../components/InputBar'
import Button from '../components/Button';
import TokenList from '../components/TokenList';

export default function Home({ filteredTokens }: {filteredTokens: string}) {
  return (
    <div className='grid place-items-center'>
      <Head>
        <title>Crypto tracker</title>
        <meta name="description" content="Crypto token tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <InputBar type='text' placeholder="Add Token ID"/>
        <Button />
      </div>
      <div >
        <TokenList filteredTokens={filteredTokens} />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false')

  const filteredTokens = await res.json();

  return {
    props: {
      filteredTokens
    }
  }
}
