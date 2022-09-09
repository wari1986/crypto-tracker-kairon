import React from "react";
// import Image from 'next/image';
import Link from "next/link";
import Token from "../types/Token";

const Coin = ({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_24h,
  total_volume,
  market_cap,
}: Token) => {
  return (
    <Link href="/id" as={`/${id}`}>
      <a>
        <div className="flex space-x-12 px-12 py-6 mx-12 my-2 justify-between">
          <img className="w-12" src={image} alt="" />
          <h1>{name}</h1>
          <h1>{symbol}</h1>
          <h1>${current_price.toLocaleString()}</h1>
          <h1>{price_change_24h.toFixed(2)}%</h1>
          <h1>${total_volume.toLocaleString()}</h1>
          <h1>${market_cap.toLocaleString()}</h1>
        </div>
      </a>
    </Link>
  );
};

export default Coin;
