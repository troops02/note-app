import SearchModal from './SearchModal';
import { Search } from '../icons';
import { useState } from 'react';
import SearchInput from './SearchInput';

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
        <SearchInput onClose={handleClose} />
      </div>
      {open && <SearchModal state={handleClose} />}{' '}
    </>
  );
}

export default SearchBar;
