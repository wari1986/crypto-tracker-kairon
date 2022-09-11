import { useState } from "react";

const AddCoin = (props) => {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }

  function emmitCoinId() {
    props.addId(id);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.addId(id);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Coin id"
        value={id}
        className={"p-2 border-2"}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        onClick={emmitCoinId}
        className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Add Coin
      </button>
    </div>
  );
};

export default AddCoin;
