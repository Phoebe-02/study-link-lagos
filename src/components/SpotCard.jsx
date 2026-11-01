const WIFI_LABELS = {
  free: "Free Wi-Fi",
  paid: "Paid Wi-Fi",
  none: "No Wi-Fi",
};

function formatPrice(price) {
  return price === 0 ? "Free" : "Est. ₦" + price.toLocaleString() + " / day";
}

function SpotCard({ spot, isSaved, onToggleSave }) {
  return (
    <li>
      <article className="spot-card">
        <div className="spot-photo">
          {spot.image && (
            <img
              src={spot.image}
              alt={spot.imageAlt}
              width="800"
              height="500"
              loading="lazy"
              onError={function (event) {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
          <p className="rating">
            <span aria-hidden="true">★ </span>
            {spot.ratings.overall.toFixed(1)}
            <span className="visually-hidden"> out of 5 stars,</span>
            <span> ({spot.ratings.count} reviews)</span>
          </p>
        </div>

        <div className="spot-body">
          <h3>{spot.name}</h3>
          <p className="spot-address">{spot.address}</p>
          <p className="spot-meta">
            <strong>{formatPrice(spot.price)}</strong> &middot; {spot.distanceKm} km away
          </p>

          <dl className="facts">
            <div>
              <dt>Wi-Fi</dt>
              <dd>{WIFI_LABELS[spot.wifi]}</dd>
            </div>
            <div>
              <dt>Power</dt>
              <dd>{spot.power.sources} &middot; {spot.power.reliability}</dd>
            </div>
            <div>
              <dt>Seating</dt>
              <dd>{spot.seating}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{spot.hours}</dd>
            </div>
            <div>
              <dt>Noise</dt>
              <dd>{spot.environment}</dd>
            </div>
          </dl>

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
        </div>
      </article>
    </li>
  );
}

export default SpotCard;