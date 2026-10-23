function formatPrice(price) {
  return price === 0 ? "Free" : "₦" + price.toLocaleString() + " per day";
}

function SpotCard({ spot, isSaved, onToggleSave }) {
  return (
    <li>
      <article className="spot-card">
        <h3>{spot.name}</h3>
        <p className="spot-meta">
          {spot.area} &middot; {formatPrice(spot.price)}
        </p>
        <p className="spot-desc">{spot.description}</p>

        <ul className="amenities" aria-label="Amenities">
          {spot.amenities.map(function (item) {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <button
          type="button"
          className="btn"
          aria-pressed={isSaved}
          onClick={function () { onToggleSave(spot.id); }}
        >
          {isSaved ? "Saved" : "Save spot"}
        </button>
      </article>
    </li>
  );
}

export default SpotCard;
