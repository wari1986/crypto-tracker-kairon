// import Image from 'next/image';
import Link from "next/link";

const Tokens = ({
  id,
  image,
  name,
  symbol,
  price,
  priceChangeDay,
  priceChangeWeek,
  volume,
  marketcap,
}: {
  id: string;
  image: string;
  name: string;
  symbol: string;
  price: number;
  priceChangeDay: number;
  priceChangeWeek: number;
  volume: number;
  marketcap: number;
}) => {
  return (
      <Link href="/id" as={`/${id}`}>
        <a>
          <td>
            <img className="w-12" src={image} alt="" />
          </td>
          <td>{name}</td>
          <td>{symbol}</td>
          <td>${price.toLocaleString()}</td>
          <td>{priceChangeDay.toFixed(1)}%</td>
          <td>{priceChangeWeek}%</td>
          <td>${volume.toLocaleString()}</td>
          <td>${marketcap.toLocaleString()}</td>
        </a>
      </Link>
  );
};

export default Tokens;

// <div className="flex space-x-12 px-12 py-6 mx-12 my-2 justify-between">
//           <img className="w-12" src={image} alt="" />
//           <p>{name}</p>
//           <p>{symbol}</p>
//           <p>${price.toLocaleString()}</p>
//           <p>{priceChangeDay.toFixed(1)}%</p>
//           <p>{priceChangeWeek}%</p>
//           <p>${volume.toLocaleString()}</p>
//           <p>${marketcap.toLocaleString()}</p>
//         </div>
