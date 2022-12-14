import { useState } from "react";

const AddCoinForm = (props: any) => {
  const [id, setId] = useState("");

  function handleChange(event: any) {
    setId(event.target.value);
  }

  function emmitCoinId() {
    props.addId(id);
    setId("");
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      props.addId(id.toLowerCase());
      setId("");
    }
  };

  return (
    <div className="flex lg:justify-center">
      <input
        type="text"
        placeholder="Add Coin id"
        value={id}
        className={"border-2 rounded my-4 text-gray-600 lg:py-2"}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        onClick={emmitCoinId}
        className="ml-3 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Coin
      </button>
    </div>
  );
};

export default AddCoinForm;
