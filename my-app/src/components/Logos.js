import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Logos = () =>{
    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 800, // Animation duration
          once: true, // Animation only happens once
        });
      }, []);
    
    
       
    return(
        <div className="bg-black rounded-2xl" style={{ fontFamily: "Mono Sans" }}>
            
            <div className="lg:px-[1rem] container mx-auto lg:py-[4rem] px-[1.5rem] py-[3rem] ">
                
            <div class="flex items-center">
    <p class="flex-grow lg:text-[1.1rem] font-[500] text-white lg:text-start text-center " data-aos="fade-up">We’ve worked with hundreds of amazing people</p>
    <img src="Line1.png" className="full lg:block hidden" alt="Kuch" />
</div>
<div className="grid lg:grid-cols-4 grid-cols-2 pt-[1.5rem] lg:pt-[1.5rem]">
    <div data-aos="zoom-in">
        <img src="1.png" alt="" />
    </div>
    <div data-aos="zoom-in">
        <img src="2.png" alt="" />
    </div>
    <div data-aos="zoom-in" className="pt-[1rem] md:pt-[1rem] lg:pt-[0rem]">
        <img src="3.png" alt="" />
    </div>
    <div data-aos="zoom-in" className="pt-[1rem] md:pt-[1rem] lg:pt-[0rem]">
        <img src="4.png" alt="" />
    </div>
</div>
<div className="grid lg:grid-cols-4 pt-[1rem] grid-cols-2 lg:pt-[2rem]">
<div data-aos="zoom-in" >
        <img src="mail.png" alt="" />
    </div>
    <div data-aos="zoom-in" >
        <img src="bright.png" alt="" />
    </div>
    
    <div data-aos="zoom-in"  className="pt-[1rem] md:pt-[1rem] lg:pt-[0rem]">
        <img src="green.png" alt="" />
    </div>
    <div data-aos="zoom-in"  className="pt-[1rem] md:pt-[1rem] lg:pt-[0rem]">
        <img src="north.png" alt="" />
    </div>


    
</div>




            </div>





        </div>
    )
}
export default Logos;