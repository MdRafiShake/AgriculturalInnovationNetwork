import React from 'react';

const navbar = () => {
  return (
    <div className='bg-[#8FA31E] w-[100%] h-[80px] mx-auto  flex items-center px-4 
      shadow-lg shadow-[#556B2F]/50'>
      <div className="logo-container flex justify-center items-center text-white font-bold text-xl w-[250px]">
        <span><img src="../public/ain-logo-01.png" alt="" className='w-[70px]'/></span>
        <span>Harvesting Friend</span>
      </div>

      <button className="btn bg-[#556B2F] border-none text-white font-bold px-4 py-2 rounded hover:bg-[#6B8E23] cursor-pointer ml-auto">
        Log In
      </button>
    
    </div>
  );
}

export default navbar;
