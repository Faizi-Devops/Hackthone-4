const Navbarback = () => {
    return (
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5"
        style={{ maskImage: "linear-gradient(to bottom left, white 40%, transparent 50%)" }}
      >
        <rect width="100%" height="100%" fill="url(#R1lda)" strokeWidth="0"></rect>
        <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
          <path transform="translate(64 160)" d="M45.119 4.5..."></path>
          {/* Additional path elements go here */}
        </svg>
        <defs>
          <pattern
            id="R1lda"
            width="96"
            height="480"
            x="50%"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(0 -96)"
            fill="none"
          >
            <path d="M128 0 ..."></path>
            {/* Additional paths for the pattern */}
          </pattern>
        </defs>
      </svg>
    );
  };
  
  export default Navbarback;
  