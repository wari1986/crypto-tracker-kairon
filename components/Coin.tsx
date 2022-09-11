import Link from "next/link";
import { FaRegTrashAlt } from 'react-icons/fa'


const Coin = (props) => {

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
            className="flex space-x-4 items-center text-left"
          >
            <p className="w-12">
              <img className="w-12" src={props.image} alt="" />
            </p>
            <p className="w-24">{props.name}</p>
            <p className="text-gray-400">{props.symbol.toUpperCase()}</p>
          </td>
        </Link>
        <td data-label="Price">${props.current_price.toLocaleString()}</td>
        <td data-label="Price variation 1h"></td>
        <td data-label="Price variation 24h">
          {props.price_change_24h.toFixed(2)}%
        </td>
        <td data-label="Price variation 7"></td>
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
