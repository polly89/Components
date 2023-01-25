import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef()

  useEffect(()=> {
    const handler = (event) => {
      if(!divEl.current) { // handles cases where we are toggling visibility and divEl returns null. 
        return;
      }

      if(!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handler, true)

    return ()=> { // This is a cleanUp function
      document.removeEventListener('click', handler);
    } 
  },[]);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    //  close dropdown
    setIsOpen(false);
    // update selected option
    onChange(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleDropdownClick}>
        {value?.label || "Select..."}
        <GoChevronDown className='text-lg'/>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
