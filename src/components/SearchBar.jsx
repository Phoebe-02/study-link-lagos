function SearchBar({ value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="search">Search by name</label>
      <input
        type="search"
        id="search"
        value={value}
        onChange={function (event) { onChange(event.target.value); }}
        placeholder="e.g. library"
      />
    </div>
  );
}

export default SearchBar;
