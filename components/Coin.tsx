import React from "react";
// import Image from 'next/image';
import Link from "next/link";
import Token from "../types/Token";
import { FaRegTrashAlt } from "react-icons/fa";

const Coin = ({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_1h_in_currency,
  price_change_percentage_24h_in_currency,
  price_change_percentage_7d_in_currency,
  total_volume,
  market_cap,
}: Token) => {
  return (
    <>
      <tr className="border border-solid text-center">
        <td data-label="Delete icon">
          <FaRegTrashAlt className="mx-auto" />
        </td>
        <td data-label="Number">#</td>
        <Link href="/id" as={`/${id}`}>
          <td
            data-label="Coin"
            className="flex space-x-4 items-center text-left"
          >
            <p className="w-12">
              <img className="w-12" src={image} alt="" />
            </p>
            <p className="w-24">{name}</p>
            <p className="text-gray-400">{symbol.toUpperCase()}</p>
          </td>
        </Link>
        <td data-label="Price">${current_price.toLocaleString()}</td>
        <td data-label="Price variation 1h">
          {price_change_percentage_1h_in_currency.toFixed(2)}%
        </td>
        <td data-label="Price variation 24h">
          {price_change_percentage_24h_in_currency.toFixed(2)}%
        </td>
        <td data-label="Price variation 7d">
          {price_change_percentage_7d_in_currency.toFixed(2)}%
        </td>
        <td data-label="Total Volume">${total_volume.toLocaleString()}</td>
        <td data-label="Market cap">${market_cap.toLocaleString()}</td>
        <td data-label="Last 7 days chart"></td>
      </tr>
    </>
  );
};

export default Coin;
