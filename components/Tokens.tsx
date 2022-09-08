import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

const Tokens = ({
  id,
  image,
  name,
  symbol,
  price,
  priceChangeDay,
  volume,
  marketcap,
}: {
  id: string;
  image: string;
  name: string;
  symbol: string;
  price: number;
  priceChangeDay: number;
  volume: number;
  marketcap: number;
}) => {
  return (
    <Link href="/id" as={`/${id}`}>
      <a>
        <div className="flex space-x-12 px-12 py-6 mx-12 my-2 justify-between">
          <img className="w-12" src={image} alt="" />
          <h1>{name}</h1>
          <h1>{symbol}</h1>
          <h1>${price.toLocaleString()}</h1>
          <h1>{priceChangeDay.toFixed(2)}%</h1>
          <h1>${volume.toLocaleString()}</h1>
          <h1>${marketcap.toLocaleString()}</h1>
        </div>
      </a>
    </Link>
  );
};

export default Tokens
