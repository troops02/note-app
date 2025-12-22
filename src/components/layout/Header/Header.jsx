// import { useState } from 'react';
import { Add, Sun } from '../../icons';

function Header() {
  return (
    <header className="flex justify-between mt-10">
      <div className="flex items-center gap-2">
        <Sun />
        <h1 className="text-3xl font-semibold">Good Morning, Lateef</h1>
      </div>
      <div className="">
        <button className="py-1 px-3 rounded-md bg-[#DEDEF7] flex justify-center items-center cursor-pointer transition-transform ease-in active:translate-y-0.5">
          <Add size={0.5} />
          <span className="text-[#6A6BC4] text-sm">Add notes</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
