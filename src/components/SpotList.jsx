import SpotCard from "./SpotCard";

function SpotList({ spots, savedIds, onToggleSave }) {
  return (
    <ul className="spot-grid">
      {spots.map(function (spot) {
        return (
          <SpotCard
            key={spot.id}
            spot={spot}
            isSaved={savedIds.includes(spot.id)}
            onToggleSave={onToggleSave}
          />
        );
      })}
    </ul>
  );
}

export default SpotList;
