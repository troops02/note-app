function SearchModal({ state }) {
  return (
    <div
      className="absolute top-0 left-0 z-1 w-2/4 h-2/4 bg-zinc-600 trasition-all ease-in translate-x-1/2 translate-y-1/2"
      onClick={state}
    ></div>
  );
}

export default SearchModal;
