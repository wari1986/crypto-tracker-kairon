import Link from "next/link";
import { FaRegTrashAlt } from 'react-icons/fa'


const Coin = (props: any) => {

  function emmitCoinId() {
    props.deleteCoin(props.id);
  }

  return (
    <>
      <tr className="border border-solid text-center">
        <td data-label="Delete icon">
          <button type="button" onClick={emmitCoinId}>
            <FaRegTrashAlt />
          </button>
        </td>
        <td data-label="Number">#</td>
        <Link href="/id" as={`/${props.id}`}>
          <td
            data-label="Coin"
            className="flex space-x-4 items-center text-left cursor-pointer"
          >
            <p className="w-12">
              <img className="w-12" src={props.image} alt="" />
            </p>
            <p className="w-24">{props.name}</p>
            <p className="text-gray-400">{props.symbol.toUpperCase()}</p>
          </td>
        </Link>
        <td data-label="Price">${props.current_price.toLocaleString()}</td>
        {props.price_change_percentage_1h_in_currency < 0 ?
        (<td className='text-red-600' data-label="Price variation 1h">
          {props.price_change_percentage_1h_in_currency.toFixed(2)}%
        </td>) : (<td className='text-green-600' data-label="Price variation 1h">
          {props.price_change_percentage_1h_in_currency.toFixed(2)}%
        </td>)}

        {props.price_change_percentage_24h_in_currency < 0 ? (<td className='text-red-600' data-label="Price variation 24h">
          {props.price_change_percentage_24h_in_currency.toFixed(2)}%
        </td>) : (<td className='text-green-600' data-label="Price variation 24h">
          {props.price_change_percentage_24h_in_currency.toFixed(2)}%
        </td>)}

        {props.price_change_percentage_7d_in_currency < 0 ? (
        <td className='text-red-600' data-label="Price variation 7d">
          {props.price_change_percentage_7d_in_currency.toFixed(2)}%
        </td>) : (<td className='text-green-600' data-label="Price variation 7d">
          {props.price_change_percentage_7d_in_currency.toFixed(2)}%
        </td>)}


        <td data-label="Total Volume">
          ${props.total_volume.toLocaleString()}
        </td>
        <td data-label="Market cap">${props.market_cap.toLocaleString()}</td>
        <td data-label="Last 7 days chart"></td>
      </tr>
    </>
  );
};

export default Coin;