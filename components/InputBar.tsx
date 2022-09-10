import Button from "../components/Button";
import { useState } from "react";
import TokenList from "../components/TokenList";

// const tokenIdList = [
//   {
//     id: "bitcoin",
//   },
//   {
//     id: "ethereum",
//   },
// ];

const InputBar = ({filteredTokens}) => {
  const [idList, setIdList] = useState(filteredTokens);
  const [name, setName] =useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleAdd = () => {
    const newIdList = idList.push({id: {id}})

    setIdList(newIdList);

    setName('');
  };
  // export input value as an event, catch this event in the TokenList component and push it to initialList
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

      <ul>
        {idList.map((item) => (
          <TokenList key={item.id} filteredTokens={filteredTokens} />
        ))}
      </ul>
    </div>
  );
};

export default InputBar;
