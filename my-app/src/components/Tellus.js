const Tellus = () => {
  return (
    <div className="bg-black rounded-2xl lg:px-[2rem] px-[2rem] py-[5rem]  lg:py-[3rem]">
      <p className="text-white text-[2rem]">Tell us about your project</p>
      <button class="bg-white hover:bg-blue-700 mt-[1rem] text-sm text-black font-bold py-1 px-4 rounded-full">
        Say Hej
      </button>
      <img src="living.png" className="pt-[1rem]" alt="" />

      <p className="text-white text-[1.5rem] pt-[1rem]">Our offices</p>
      <div className="grid lg:grid-cols-2">
        <div>
          <p className="text-white text-[1rem] font-bold pt-[1rem]">Copenagen</p>
          <p className="text-white">1 Carlsberg Gate<br />1260, København, Denmark</p>
        </div>
        <div>
          <p className="text-white text-[1rem] font-bold pt-[1rem]">Billund</p>
          <p className="text-white">24 Lego Allé<br />7190, Billund, Denmark</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 pt-[0.5rem]">
        
      
      </div>
    </div>
  );
};
export default Tellus;
