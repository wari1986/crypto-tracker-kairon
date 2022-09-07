import Head from 'next/head'
import InputBar from '../components/InputBar'
import Button from '../components/Button';
import Tokens from '../components/Tokens';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto tracker</title>
        <meta name="description" content="Crypto token tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <InputBar type='text' placeholder="Add Token ID"/>
        <Button />
      </div>
      <div className='table'>
        <Tokens />
      </div>
    </div>
  )
}
