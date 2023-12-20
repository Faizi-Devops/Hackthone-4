import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Harness = () =>{
    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 800, // Animation duration
          once: true, // Animation only happens once
        });
      }, []);
    return(
        <div className="px-[2rem] lg:px-[0rem] pt-[3rem]  pb-[1rem]" style={{ fontFamily: "Mono Sans" }}>
            <p className="lg:text-[3rem] text-[2rem] lg:leading-[3rem]  font-[600]  leading-[2rem]   tracking-tighter" data-aos="fade-up">Harnessing technology <br /> for a brighter future</p>
            <p className="lg:text-[1rem] text-[1.25rem]  pt-[0.5rem] md:pt-[1rem]  font-[400] leading-[23px] lg:pt-[1rem]  tracking-tighter" data-aos="fade-up">We believe technology is the answer to the world’s greatest challenges. <br /> It’s also the cause, so we find ourselves in bit of a catch 22 situation.</p>



        </div>
    )
}
export default Harness;