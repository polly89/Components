import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selection, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <div>
      <Dropdown 
      options={options} 
      value={selection} // changed from 'selection={selection}' to align with community convention on 'form control'
      onChange={handleSelect} // changed from 'handleSelect={handleSelect}'
      />
    </div>
  );
}
export default App;
