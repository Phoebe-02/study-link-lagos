import { useState, useEffect } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import SpotList from "./components/SpotList";
import StatusMessage from "./components/StatusMessage";
import { FILTERS } from "./filters";

function App() {
  // ----- Data and status -----
  const [spots, setSpots] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "error" | "ready"

  // ----- Filters and saved spots -----
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("all");
  const [activeFilters, setActiveFilters] = useState([]); // keys like "freeWifi"
  const [savedIds, setSavedIds] = useState([]);

  function loadSpots() {
    setStatus("loading");
    fetch("/spots.json")
      .then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
      })
      .then(function (data) {
        setSpots(data);
        setStatus("ready");
      })
      .catch(function () {
        setStatus("error");
      });
  }

  useEffect(function () {
    loadSpots();
  }, []);

  // ----- Event handlers (passed down to child components) -----
  function toggleFilter(key) {
    setActiveFilters(function (current) {
      return current.includes(key)
        ? current.filter(function (item) { return item !== key; })
        : [...current, key];
    });
  }

  function toggleSave(id) {
    setSavedIds(function (current) {
      return current.includes(id)
        ? current.filter(function (item) { return item !== id; })
        : [...current, id];
    });
  }

  // ----- Work out which spots to show -----
  const text = search.trim().toLowerCase();

  const visibleSpots = spots.filter(function (spot) {
    const matchesName = spot.name.toLowerCase().includes(text);
    const matchesArea = area === "all" || spot.area === area;
    const passesFilters = activeFilters.every(function (key) {
      const filter = FILTERS.find(function (item) { return item.key === key; });
      return filter.test(spot);
    });
    return matchesName && matchesArea && passesFilters;
  });

  const emptyMessage =
    spots.length === 0
      ? "No study spots available yet."
      : "No spots match your search. Try a different area or remove a filter.";

  return (
    <>
      <a className="skip-link" href="#results">Skip to study spots</a>
      <Header />

      <main className="wrap">
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          area={area}
          onAreaChange={setArea}
          amenities={activeFilters}
          onToggleAmenity={toggleFilter}
        />

        <section id="results" aria-labelledby="results-title">
          <h2 id="results-title">Study spots</h2>

          {status === "loading" && <StatusMessage type="loading" />}
          {status === "error" && <StatusMessage type="error" onRetry={loadSpots} />}

          {status === "ready" && (
            <>
              <p id="result-count" aria-live="polite">
                {visibleSpots.length} {visibleSpots.length === 1 ? "spot" : "spots"} found
              </p>

              {visibleSpots.length === 0 ? (
                <StatusMessage type="empty" message={emptyMessage} />
              ) : (
                <SpotList
                  spots={visibleSpots}
                  savedIds={savedIds}
                  onToggleSave={toggleSave}
                />
              )}
            </>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>
            Study Link Lagos is a demo project. Spots, ratings, reviews and
            distances are sample data, and photos are for illustration only.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
