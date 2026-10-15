// ---------- 1. DATA ----------
// All sample data (made-up spots). Later you can move this into its own JSON file.
const spots = [
  { id: 1,  name: "Yabatech Corner Reading Room", area: "Yaba", price: 0,    amenities: ["Wi-Fi", "Quiet"],           description: "A calm reading room with long tables and plenty of natural light." },
  { id: 2,  name: "Lagoon Side Study Hub",        area: "Lekki", price: 2500, amenities: ["Wi-Fi", "Power", "Quiet"], description: "Air-conditioned co-working desks with backup power and a quiet zone." },
  { id: 3,  name: "Ikeja Central Library Annex",  area: "Ikeja", price: 0,    amenities: ["Quiet", "Power"],          description: "Free public library annex with silent study carrels." },
  { id: 4,  name: "Surulere Study Cafe",          area: "Surulere", price: 1500, amenities: ["Wi-Fi", "Power"],      description: "Cafe with strong Wi-Fi and plenty of sockets. A bit busy at lunch." },
  { id: 5,  name: "VI Focus Desk",                area: "Victoria Island", price: 4000, amenities: ["Wi-Fi", "Power", "Quiet"], description: "Private desks, steady power, and a quiet floor for exam prep." },
  { id: 6,  name: "Yaba Tech Co-Study",           area: "Yaba", price: 2000, amenities: ["Wi-Fi", "Power"],          description: "Shared tables near the tech cluster, popular with students." },
  { id: 7,  name: "Lekki Garden Reading Spot",    area: "Lekki", price: 1000, amenities: ["Quiet"],                  description: "Outdoor shaded seating, best in the morning before the heat." },
  { id: 8,  name: "Ikeja Night Owl Space",        area: "Ikeja", price: 3000, amenities: ["Wi-Fi", "Power"],         description: "Open late, good for last-minute revision sessions." }
];

// ---------- 2. GRAB ELEMENTS FROM THE PAGE ----------
const spotList   = document.getElementById("spot-list");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");

// ---------- 3. HELPERS ----------
function formatPrice(price) {
  return price === 0 ? "Free" : "₦" + price.toLocaleString() + " per day";
}

// Builds the HTML for ONE card
function createSpotCard(spot) {
  const amenityItems = spot.amenities
    .map(function (item) { return "<li>" + item + "</li>"; })
    .join("");

  return `
    <li>
      <article class="spot-card">
        <h3>${spot.name}</h3>
        <p class="spot-meta">${spot.area} &middot; ${formatPrice(spot.price)}</p>
        <p class="spot-desc">${spot.description}</p>
        <ul class="amenities" aria-label="Amenities">${amenityItems}</ul>
        <button type="button" class="btn" aria-pressed="false" data-id="${spot.id}">
          Save spot
        </button>
      </article>
    </li>
  `;
}

// ---------- 4. RENDER ----------
// Takes a list of spots and puts them on the page
function renderSpots(list) {
  spotList.innerHTML = list.map(createSpotCard).join("");
  resultCount.textContent = list.length + (list.length === 1 ? " spot found" : " spots found");
  emptyState.hidden = list.length !== 0;
}

// Show everything when the page first loads
renderSpots(spots);

// ---------- 5. TODO (your Task 1.2 interactivity) ----------
// a) Make the search box + area dropdown + checkboxes filter the list
// b) Make the "Save spot" button toggle on/off (and flip aria-pressed)
