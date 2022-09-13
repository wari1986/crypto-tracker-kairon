import { useState } from "react";

const AddCoinForm = (props: any) => {
  const [id, setId] = useState("");

  function handleChange(event: any) {
    setId(event.target.value);
  }

  function emmitCoinId() {
    props.addId(id);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      props.addId(id);
    }
  };

  return (
    <div className='flex justify-center'>
      <input
        type="text"
        placeholder="Add Coin id"
        value={id}
        className={"p-2 border-2 rounded my-4"}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        onClick={emmitCoinId}
        className="ml-6 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Add Coin
      </button>
    </div>
  );
};

export default AddCoinForm;