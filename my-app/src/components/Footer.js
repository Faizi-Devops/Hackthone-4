const Footer = () => {
  return (
    <div>
      <div className="grid tracking-tighter lg:grid-cols-4 md:grid-cols-2 px-[1rem]" style={{ fontFamily: "Mono Sans" }}>
        <div>
          <p className=" text-[1.2rem] pt-[1rem] font-[600]">Work</p>
          <p className="text-[1rem] font-weight-500 text-[#404040] pt-[1rem]">
            FamilyFund
          </p>
          <p className="pt-[0.5rem]">Unseal</p>
          <p className="pt-[0.5rem]">Phobia</p>
          <p className="pt-[0.5rem]">See All</p>
        </div>
        <div>
          <p className=" text-[1.2rem] pt-[1rem] font-[600]">Company</p>
          <p className="text-[1rem] font-weight-500 text-[#404040] pt-[1rem]">About</p>
          <p className="pt-[0.5rem]">Process</p>
          <p className="pt-[0.5rem]">Blog</p>
          <p className="pt-[0.5rem]">Contact us</p>
        </div>
        <div>
          <p className=" text-[1.2rem] pt-[1rem] font-[600]">Connect</p>
          <p className="text-[1rem] font-weight-500 text-[#404040] pt-[1rem]">Facebook</p>
          <p className="pt-[0.5rem]">Instagram</p>
          <p className="pt-[0.5rem]">Twitter</p>
          <p className="pt-[0.5rem]">Github</p>
          <p className="pt-[0.5rem]">Dribbble</p>
        </div>
        <div>
          <p className=" text-[1.2rem] pt-[1rem] font-[600]">
            Sign up for our newsletter
          </p>
          <p className="text-[1rem] font-weight-500 text-[#404040] pt-[1rem]">
            Subscribe to get the latest design news, articles, resources and
            inspiration.
          </p>
          <div class="relative mt-[0.8rem]">
  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
  <img src="arrow.png" alt="Arrow" class="absolute right-2 mr-[-8px] top-1/2 transform -translate-y-1/2 w-10 h-auto" />
</div>



        </div>
      </div>
      <hr className="mt-[1rem]"/>
      <div className="grid lg:grid-cols-2 grid-cols-1 px-[1rem]  pt-[2rem] pb-[2rem]">
        <img src="eco.png" alt="" />
        <p className="lg:text-end text-start pt-[1rem] text-sm">© Ecommerce Agency Inc. 2023</p>

      </div>
    </div>
  );
};
export default Footer;
