function Header() {
  return (
    <div className="hidden md:flex bg-[#2A2929] text-white justify-between items-center px-6 py-3">
      {/* Left side content */}
      <div className="flex items-center gap-6">
        <h3 className="text-lg font-bold xl:text-xl">Welcome to Mechmaven</h3>
        <h3 className="text-2xl font-semibold xl:text-3xl">
          <span className="relative inline-block">
            <span className="relative text-lg xl:text-xl z-10">
              Turning ideas into reality
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              className="absolute left-0 -bottom-5 xl:-bottom-6 w-full h-[1em] pointer-events-none"
              preserveAspectRatio="none"
            >
              <path
                d="M1.15,18C64.07,44.13,108.42,1.4,169.63,3.1,182.11,3.76,191.39,6.58,201,10c71.41,33.39,112-8.7,188.65-7,35.22,1.74,69.81,22.6,103,17"
                stroke="#B50303"
                strokeWidth="14"
                fill="none"
              />
            </svg>
          </span>
        </h3>
      </div>
      
      {/* Phone number - visible only on md and larger screens */}
      <a 
        href="tel:+923319988598" 
        className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
        aria-label="Call us at +92 331-9988598"
      >
        <span className="flex items-center justify-center p-1.5 rounded-full bg-[#B50303] group-hover:bg-black transition-colors">
          <img
            src="/assets/svg/phone-call-svgrepo-com.svg"
            alt=""
            className="w-5 h-5 invert"
            aria-hidden="true"
          />
        </span>
        <span className="font-medium">
          +92 331-9988598
        </span>
        <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </a>
    </div>
  );
}

export default Header;