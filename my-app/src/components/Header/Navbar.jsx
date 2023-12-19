import React, { useState } from "react";
import Hamburger from "./Hamburger";
import NavSvg from "./NavSvg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navbarStick, setNavbarStick] = useState(false);
  const cartItems = useSelector((state) => state.carting.value);
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
            {cartItems.length})
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
              {cartItems && cartItems.length > 0 ? (
  cartItems.map((value, index) => (
    <h2 key={index} className="text-sm font-semibold">
      The category is {value.value.category} and the price is {value.value.price}
    </h2>
  ))
) : (
  <p>Item not available in the cart</p>
)}

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
