import Head from 'next/head'
import InputBar from '../components/InputBar'
import Button from '../components/Button';
import DashBoardTable from '../components/DashBoardTable';

export default function Home({ filteredTokens }) {
  return (
    <div className="grid place-items-center">
      <Head>
        <title>Crypto tracker</title>
        <meta name="description" content="Crypto token tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <InputBar type="text" placeholder="Add Token ID" />
        <Button />
      </div>
      <div>
        <DashBoardTable filteredTokens={filteredTokens} />
      </div>
    </div>
  );
}
