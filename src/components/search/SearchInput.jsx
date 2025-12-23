import { useState } from 'react';

function SearchInput({ onClose, onSearch }) {
  const [query, setQuery] = useState('');

  function handleSearch(e) {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  }

  return (
    <div className="flex-1 h-full">
      <input
        onClick={onClose}
        className="h-full w-full border-none outline-none"
        value={query}
        onChange={handleSearch}
        type="text"
        placeholder="what are you looking for"
      />
    </div>
  );
}

export default SearchInput;
