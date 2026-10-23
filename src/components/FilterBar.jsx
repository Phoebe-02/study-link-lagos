import SearchBar from "./SearchBar";

const AREAS = ["Yaba", "Ikeja", "Lekki", "Surulere", "Victoria Island"];
const AMENITIES = ["Wi-Fi", "Power", "Quiet"];

function FilterBar({
  search,
  onSearchChange,
  area,
  onAreaChange,
  amenities,
  onToggleAmenity,
}) {
  return (
    <section id="filters" aria-labelledby="filters-title" className="filters">
      <h2 id="filters-title">Find a spot</h2>

      <form onSubmit={function (event) { event.preventDefault(); }}>
        <SearchBar value={search} onChange={onSearchChange} />

        <div className="field">
          <label htmlFor="area">Area</label>
          <select
            id="area"
            value={area}
            onChange={function (event) { onAreaChange(event.target.value); }}
          >
            <option value="all">All areas</option>
            {AREAS.map(function (name) {
              return <option key={name} value={name}>{name}</option>;
            })}
          </select>
        </div>

        <fieldset className="field checks">
          <legend>Must have</legend>
          {AMENITIES.map(function (name) {
            return (
              <label key={name}>
                <input
                  type="checkbox"
                  checked={amenities.includes(name)}
                  onChange={function () { onToggleAmenity(name); }}
                />{" "}
                {name}
              </label>
            );
          })}
        </fieldset>
      </form>
    </section>
  );
}

export default FilterBar;
