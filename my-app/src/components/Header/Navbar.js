import React, { useState } from "react";
import Hamburger from "./Hamburger";
import NavSvg from "./NavSvg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navbarStick, setNavbarStick] = useState(false);
  const cartItems = useSelector((state) => state.carting.value);
  const uniqueItemsSet = new Set(cartItems.map(item => JSON.stringify(item.value)));

const uniqueItemsCount = uniqueItemsSet.size;
console.log("uniqueitemcount",uniqueItemsCount)
  console.log("cartitems", cartItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const topWrapperHandle = (status) => {
    setNavbarStick(status);
  };
  const itemFrequency = {};
cartItems.forEach(item => {
  const stringifiedItem = JSON.stringify(item.value);
  itemFrequency[stringifiedItem] = (itemFrequency[stringifiedItem] || 0) + 1;
});

// Unique items ke saath unki frequency aur original values ko map karke ek array mein store karna
const displayItems = Object.keys(itemFrequency).map((stringifiedItem, index) => {
  const frequency = itemFrequency[stringifiedItem];
  const item = JSON.parse(stringifiedItem);

  return {
    frequency,
    category: item.category,
    price: item.price
  };
});


  return (
    <>
    <div className="relative z-20 lg:px-[0rem] px-[1rem]">
      {/* Background blur effect when modal is open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-10 ${
          isModalOpen ? "" : "hidden"
        }`}
      ></div>

      <div
        className={`flex justify-between items-center py-3 ${
          navbarStick ? "fixed left-0 top-0 w-full z-40 p-5" : ""
        }`}
      >
        <div>
          <NavSvg />
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            className={`bg-black hidden md:block rounded-full sm:px-5 px-3 py-2 text-base font-medium capitalize text-white ${
              navbarStick && "bg-white text-black"
            }`}
          >
            contact us
          </button>
          <button
            onClick={openModal}
            className={`bg-black flex rounded-full sm:px-5 px-5 py-2 text-base font-medium capitalize text-white ${
              navbarStick
            }`}
          >
            <img src="Vector.png " className="pt-[0.4rem]" alt="" />(
            {uniqueItemsCount})
          </button>
          <Hamburger showTopWrapper={topWrapperHandle} />
        </div>
      </div>

      <div className=" flex items-center justify-center">
        {/* Modal */}
        <div
          className={`fixed z-20 inset-0 overflow-y-auto ${
            isModalOpen ? "" : "hidden"
          }`}
        >
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white lg:w-2/4 sm:w-full  p-6 rounded-lg shadow-lg">
              <div className="flex justify-between flex-col  items-center mb-4">
              <>
    {displayItems.length > 0 ? (
      displayItems.map((item, index) => (
        <div key={index} className="text-sm font-semibold">
          <span className="flex  pt-[5px]"><p>The category is {item.category} and the price is {item.price}</p><span class="bg-blue-100  ml-3 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{item.frequency}</span></span>
          
        </div>
      ))
    ) : (
      <p>Item not available in the cart</p>
    )}
  </>
  

                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* You can add your content inside the modal */}
            </div>
          </div>
        </div>
      </div>



      
    </div>
  
      
    
    </>
  );
};

export default Navbar;