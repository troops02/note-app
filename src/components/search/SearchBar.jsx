import SearchModal from './SearchModal';
import { Search } from '../icons';
import { useState } from 'react';

function SearchBar() {
  //   const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen((o) => !o);
  }
  return (
    <>
      <div className="flex w-full h-10 space-x-3 border border-zinc-300 mt-10 p-2 rounded-md transition-all ease hover:border-zinc-400">
        <div className="h-full flex items-center">
          <Search />
        </div>
        <div className="flex-1 h-full">
          <input
            onClick={handleClose}
            className="h-full w-full border-none outline-none"
            //   value={input}
            type="text"
            placeholder="what are you looking for"
          />
        </div>
      </div>
      {open && <SearchModal state={handleClose} />}{' '}
    </>
  );
}

export default SearchBar;
