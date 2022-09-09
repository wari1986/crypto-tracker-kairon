import Button from "../components/Button";
import { useState } from "react";

const tokenIdList = [
  {
    id: "bitcoin",
  },
  {
    id: "ethereum",
  },
];

const InputBar = () => {
  const [idList, setIdList] = useState(tokenIdList);
  const [name, setName] =useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleAdd = () => {
    const newIdList = idList.push({id: {id}})

    setIdList(newIdList);

    setName('');
  };
  console.log(idList);
  return (
    <div>
      <div className="flex">
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className="bg-gray-300 p-2 mx-4 my-6"
        />
        <button type="button" onClick={handleAdd}>Add</button>
      </div>

      {/* <ul>
        {idList.map((item) => (
          <li key={item.id}></li>
        ))}
      </ul> */}
    </div>
  );
};

export default InputBar;
