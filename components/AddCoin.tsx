import { useState } from 'react';

const AddCoin = (props) => {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }

  function emmitCoinId() {
    props.addId(id);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add Coin id"
        value={id}
        onChange={handleChange}
      />
      <button type="button" onClick={emmitCoinId} className="ml-6">
        Add Coin
      </button>
    </div>
  );
};

export default AddCoin;
