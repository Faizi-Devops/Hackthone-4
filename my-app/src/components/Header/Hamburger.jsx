import React, { useState } from 'react';

const Hamburger = (props) => {
const [topWrapper, setTopWrapper] = useState(false);
const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    props.showTopWrapper(!isOpen);
    setIsOpen(!isOpen);
    
  };

  return (
    <div className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer" onClick={handleClick}>
      <div className={`w-full h-1 bg-gray-800 my-1 rounded transition-all ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
      <div className={`w-full h-1 bg-gray-800 my-1 rounded transition-all ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
    </div>
  );
};

export default Hamburger;