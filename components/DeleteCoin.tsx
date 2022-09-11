import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeleteCoin = (props) => {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }

  function deleteCoinId() {
    props.deleteId(id);
  }

  return (
    <div>
      <button type="button" onClick={deleteCoinId}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default DeleteCoin;
