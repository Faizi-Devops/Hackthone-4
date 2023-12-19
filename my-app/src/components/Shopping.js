import { useEffect, useState } from "react";
import axios from "axios";
import { addToCart } from "../store/todoSlice";
import { useDispatch } from "react-redux";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { toast } from "react-toastify";
const Shopping = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animation only happens once
    });
  }, []);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [addedToCart, setAddedToCart] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    getData();
  }, []);
  const onAddtoCartHandler = (value) => {
    dispatch(addToCart({ value }));
    toast.success("Data added to the card")
    setAddedToCart([...addedToCart, value.id]); // Assuming value.id uniquely identifies each item
  };

  const getData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const onAddtoCardHandler = (value) =>{

  dispatch(addToCart({value}))

  }

  return (
    <div>
        <p className=" font-bold text-[2.5rem]" data-aos="zoom-in">Shopping </p>
      <div className="grid lg:grid-cols-3 lg:gap-5 pt-[1.5rem] px-[1rem]">
        {currentItems.map((value, index) => (
          <div data-aos="flip-up"
            key={index}
            className="block max-w-full rounded-xl mt-[1rem] p-28 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <img
              src={value.image}
              alt=""
              style={{ width: '100px', height: '150px', objectFit: 'cover' }}
            />
           
            <button
              className="absolute bottom-4 right-4 text-sm bg-black hover:bg-blue-700 text-white px-3 rounded-full "
             onClick={()=>onAddtoCardHandler(value)} style={{ zIndex: 1 }}
             disabled={addedToCart.includes(value.id)}>
              {addedToCart.includes(value.id) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-[1rem]">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a
                
                onClick={handlePrevPage}
                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white  border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'pointer-events-none' : ''}`}
              >
                <span className="sr-only">Previous</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
              </a>
            </li>
            
            {/* Displaying page numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
               <li key={i}>
               <a
                 

                 onClick={() => setCurrentPage(i + 1)}
                 className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-red hover:text-gray-700 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                   currentPage === i + 1 ? 'text-blue-600 bg-black hover:bg-blue-700 hover:text-blue-700 dark:border-gray-700 dark:text-white' : ''
                 }`}
               >
                 {i + 1}
               </a>
             </li>
           ))}
            
            <li>
              <a
                
                onClick={handleNextPage}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === totalPages ? 'pointer-events-none' : ''}`}
              >
                <span className="sr-only">Next</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Shopping;
