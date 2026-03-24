const services = {
  plumbing: {
    id: "plumbing",
    name: "Plumber",
    icon: "&#x1F6B0;",
    estimate: [129, 179],
    summary: "Burst pipes, leaks, clogs, water heater issues",
    keywords: ["leak", "pipe", "sink", "drain", "toilet", "water heater"],
  },
  electrician: {
    id: "electrician",
    name: "Electrician",
    icon: "&#x1F50C;",
    estimate: [149, 229],
    summary: "Outages, panel issues, outlets, fixture installs",
    keywords: ["power", "outlet", "breaker", "panel", "light", "sparks"],
  },
  locksmith: {
    id: "locksmith",
    name: "Locksmith",
    icon: "&#x1F510;",
    estimate: [89, 149],
    summary: "Lockouts, rekeying, smart locks, broken keys",
    keywords: ["lock", "door", "key", "locked out", "smart lock"],
  },
  hvac: {
    id: "hvac",
    name: "HVAC",
    icon: "&#x2744;&#xFE0F;",
    estimate: [169, 269],
    summary: "No cooling, no heat, thermostat, airflow",
    keywords: ["ac", "heat", "hvac", "furnace", "thermostat", "air"],
  },
  appliance: {
    id: "appliance",
    name: "Appliance",
    icon: "&#x1F9FA;",
    estimate: [119, 199],
    summary: "Washer, dryer, fridge, dishwasher service",
    keywords: ["washer", "dryer", "fridge", "dishwasher", "appliance"],
  },
  handyman: {
    id: "handyman",
    name: "Handyman",
    icon: "&#x1F6E0;&#xFE0F;",
    estimate: [109, 169],
    summary: "Assembly, mounting, patching, minor repairs",
    keywords: ["mount", "assemble", "repair", "patch", "furniture"],
  },
};

const defaultLocation = {
  latitude: 40.7465,
  longitude: -73.9965,
  label: "Chelsea, New York",
};

const professionals = [
  {
    id: 1,
    name: "Marcus Reed",
    initials: "MR",
    category: "plumbing",
    rating: 4.9,
    reviews: 238,
    badges: ["Verified", "Licensed", "Background check"],
    skills: ["Leak repair", "Drain cleaning", "Water heaters"],
    description: "Licensed plumber focused on emergency leaks, clogged drains, and clean first-visit repairs.",
    experience: "8 years",
    price: "$120/hr",
    eta: 10,
    vehicle: "White Transit Van",
    code: "FN-2841",
    colors: ["#0e766e", "#0b4f5f"],
    offset: { latitude: 0.011, longitude: -0.006 },
    map: { x: "72%", y: "34%" },
  },
  {
    id: 2,
    name: "Selena Park",
    initials: "SP",
    category: "plumbing",
    rating: 4.8,
    reviews: 174,
    badges: ["Verified", "Licensed", "Insured"],
    skills: ["Pipe repair", "Fixture installs", "Sump pumps"],
    description: "Handles residential plumbing repairs with a strong record on fixture swaps and sump pump issues.",
    experience: "6 years",
    price: "$115/hr",
    eta: 12,
    vehicle: "Teal Utility Van",
    code: "FN-1924",
    colors: ["#7f9a71", "#0b4f5f"],
    offset: { latitude: 0.006, longitude: 0.004 },
    map: { x: "62%", y: "49%" },
  },
  {
    id: 3,
    name: "Omar Blake",
    initials: "OB",
    category: "plumbing",
    rating: 4.7,
    reviews: 119,
    badges: ["Verified", "Licensed", "Background check"],
    skills: ["Emergency shutoff", "Toilets", "Leak tracing"],
    description: "Emergency-first plumber who specializes in leak tracing and fast shutoff support.",
    experience: "9 years",
    price: "$109/hr",
    eta: 17,
    vehicle: "Red Service Pickup",
    code: "FN-4253",
    colors: ["#c94e43", "#c76b44"],
    offset: { latitude: -0.004, longitude: 0.012 },
    map: { x: "80%", y: "46%" },
  },
  {
    id: 4,
    name: "Alina Torres",
    initials: "AT",
    category: "electrician",
    rating: 4.8,
    reviews: 194,
    badges: ["Verified", "Licensed", "Insured"],
    skills: ["Panels", "Outlet repair", "Fixture installs"],
    description: "Residential electrician for panel issues, dead outlets, and safe fixture replacements.",
    experience: "7 years",
    price: "$145/hr",
    eta: 14,
    vehicle: "Blue Service SUV",
    code: "FN-3118",
    colors: ["#d7aa55", "#c76b44"],
    offset: { latitude: 0.008, longitude: -0.014 },
    map: { x: "30%", y: "42%" },
  },
  {
    id: 5,
    name: "Nico Alvarez",
    initials: "NA",
    category: "electrician",
    rating: 4.9,
    reviews: 287,
    badges: ["Verified", "Licensed", "Insured"],
    skills: ["Breaker panels", "Outages", "EV chargers"],
    description: "High-experience electrician with strong ratings for outage diagnosis and breaker panel work.",
    experience: "11 years",
    price: "$158/hr",
    eta: 9,
    vehicle: "Black Cargo Van",
    code: "FN-5308",
    colors: ["#25343a", "#d7aa55"],
    offset: { latitude: 0.017, longitude: -0.011 },
    map: { x: "24%", y: "28%" },
  },
  {
    id: 6,
    name: "Devon Price",
    initials: "DP",
    category: "locksmith",
    rating: 4.9,
    reviews: 321,
    badges: ["Verified", "Background check", "24/7"],
    skills: ["Lockouts", "Rekeying", "Smart locks"],
    description: "24/7 locksmith for lockouts, rekeying, and quick entry support without property damage.",
    experience: "10 years",
    price: "$99 flat",
    eta: 8,
    vehicle: "Grey Compact Van",
    code: "FN-1177",
    colors: ["#c94e43", "#912d3a"],
    offset: { latitude: -0.013, longitude: 0.003 },
    map: { x: "58%", y: "64%" },
  },
  {
    id: 7,
    name: "Harper Quinn",
    initials: "HQ",
    category: "locksmith",
    rating: 4.8,
    reviews: 205,
    badges: ["Verified", "Background check", "Insured"],
    skills: ["House lockouts", "Deadbolts", "Mailbox keys"],
    description: "Trusted locksmith with strong customer reviews on deadbolts, mailboxes, and home entry jobs.",
    experience: "5 years",
    price: "$109 flat",
    eta: 11,
    vehicle: "Slate Hatchback",
    code: "FN-9131",
    colors: ["#4f6a78", "#0b4f5f"],
    offset: { latitude: -0.018, longitude: -0.004 },
    map: { x: "47%", y: "74%" },
  },
  {
    id: 8,
    name: "Priya Shah",
    initials: "PS",
    category: "hvac",
    rating: 4.7,
    reviews: 162,
    badges: ["Verified", "Licensed", "EPA certified"],
    skills: ["AC repair", "Thermostats", "Airflow issues"],
    description: "HVAC technician for no-cool calls, thermostat faults, and low-airflow problems.",
    experience: "8 years",
    price: "$155/hr",
    eta: 18,
    vehicle: "Silver Sprinter",
    code: "FN-6672",
    colors: ["#0b4f5f", "#7f9a71"],
    offset: { latitude: 0.021, longitude: 0.002 },
    map: { x: "42%", y: "25%" },
  },
  {
    id: 9,
    name: "Jonah Ellis",
    initials: "JE",
    category: "appliance",
    rating: 4.8,
    reviews: 142,
    badges: ["Verified", "Factory trained", "Insured"],
    skills: ["Dishwashers", "Refrigerators", "Laundry"],
    description: "Appliance repair specialist for refrigerators, dishwashers, and laundry systems.",
    experience: "7 years",
    price: "$125/hr",
    eta: 16,
    vehicle: "Black Wagon",
    code: "FN-8022",
    colors: ["#4f6a78", "#25343a"],
    offset: { latitude: -0.006, longitude: -0.017 },
    map: { x: "18%", y: "58%" },
  },
  {
    id: 10,
    name: "Maya Collins",
    initials: "MC",
    category: "handyman",
    rating: 4.8,
    reviews: 207,
    badges: ["Verified", "Insured", "Top rated"],
    skills: ["TV mounting", "Assembly", "Drywall patching"],
    description: "Versatile handyman for furniture assembly, mounting, and clean drywall touch-up work.",
    experience: "6 years",
    price: "$110/hr",
    eta: 12,
    vehicle: "Copper Utility Truck",
    code: "FN-5409",
    colors: ["#c76b44", "#0e766e"],
    offset: { latitude: -0.009, longitude: 0.016 },
    map: { x: "82%", y: "62%" },
  },
];

const state = {
  flowStep: 0,
  flowCompleted: false,
  authStep: 2,
  activeSheetTab: "booking",
  hasBooking: false,
  paymentCompleted: false,
  partnerApplicationSubmitted: false,
  selectedCategory: "plumbing",
  urgency: "asap",
  selectedProfessionalId: 1,
  paymentMethod: "card",
  tip: 0,
  rating: 5,
  photoName: "",
  accountName: "",
  accountEmail: "",
  accountPhone: "",
  userLocation: { ...defaultLocation, accuracy: null, source: "fallback" },
  currentLocationText: "Detecting location...",
  favorites: new Set([1, 6]),
  history: [
    { title: "Garbage disposal reset", detail: "Marcus Reed - March 4", category: "plumbing" },
    { title: "Front door rekey", detail: "Devon Price - February 21", category: "locksmith" },
  ],
  notifications: [
    { title: "Marcus accepted the job", detail: "Arriving in 10 minutes." },
    { title: "Dispatch secured", detail: "Technician identity has been verified." },
  ],
  chat: [{ author: "pro", text: "I have the replacement fittings in the van. See you shortly." }],
  eta: 10,
  trackingStage: 0,
};

const sheetTabOrder = ["booking", "payment", "tracking"];

const statusSteps = [
  "Booked",
  "On the way",
  "Arrived",
  "Job in progress",
  "Job complete",
];

const emergencyMap = {
  "water leak": {
    category: "plumbing",
    prompt: "Emergency water leak in the kitchen. Need shutoff support and leak repair immediately.",
  },
  "power outage": {
    category: "electrician",
    prompt: "Power outage in part of the house. Breakers checked already. Need urgent electrical diagnosis.",
  },
  "locked out": {
    category: "locksmith",
    prompt: "Locked out of the home and need immediate entry assistance.",
  },
};

const categoryGrid = document.getElementById("category-grid");
const profilesList = document.getElementById("profiles-list");
const issueInput = document.getElementById("issue-input");
const searchInput = document.getElementById("search-input");
const photoInput = document.getElementById("photo-input");
const photoName = document.getElementById("photo-name");
const urgencyToggle = document.getElementById("urgency-toggle");
const scheduleInput = document.getElementById("schedule-input");
const estimateValue = document.getElementById("estimate-value");
const aiSuggestion = document.getElementById("ai-suggestion");
const matchSummary = document.getElementById("match-summary");
const profilesSummary = document.getElementById("profiles-summary");
const trackingTitle = document.getElementById("tracking-title");
const statusPill = document.getElementById("status-pill");
const etaValue = document.getElementById("eta-value");
const heroEta = document.getElementById("hero-eta");
const heroPro = document.getElementById("hero-pro");
const vehicleValue = document.getElementById("vehicle-value");
const codeValue = document.getElementById("code-value");
const statusList = document.getElementById("status-list");
const trackerLocation = document.getElementById("tracker-location");
const trackerDistance = document.getElementById("tracker-distance");
const trackerEta = document.getElementById("tracker-eta");
const trackerProgressBar = document.getElementById("tracker-progress-bar");
const chatThread = document.getElementById("chat-thread");
const chatInput = document.getElementById("chat-input");
const paymentMethods = document.getElementById("payment-methods");
const tipRow = document.getElementById("tip-row");
const serviceCost = document.getElementById("service-cost");
const laborCost = document.getElementById("labor-cost");
const platformCost = document.getElementById("platform-cost");
const tipCost = document.getElementById("tip-cost");
const payButton = document.getElementById("pay-button");
const reviewPanel = document.getElementById("review-panel");
const starRow = document.getElementById("star-row");
const favoritesList = document.getElementById("favorites-list");
const historyList = document.getElementById("history-list");
const notificationsList = document.getElementById("notifications-list");
const mapPins = document.getElementById("map-pins");
const userLocationMarker = document.getElementById("user-location-marker");
const vanMarker = document.getElementById("van-marker");
const routeLine = document.querySelector(".route-line");
const locationPill = document.getElementById("location-pill");
const sheetTabs = document.getElementById("sheet-tabs");
const sheetPageEyebrow = document.getElementById("sheet-page-eyebrow");
const sheetPageTitle = document.getElementById("sheet-page-title");
const sheetPageCopy = document.getElementById("sheet-page-copy");
const sheetBackButton = document.getElementById("sheet-back-button");
const flowShell = document.getElementById("flow-shell");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const guestForm = document.getElementById("guest-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const openLoginButton = document.getElementById("open-login");
const openGuestButton = document.getElementById("open-guest");
const openSignupButton = document.getElementById("open-signup");
const openPartnerButton = document.getElementById("open-partner");
const guestName = document.getElementById("guest-name");
const guestPhone = document.getElementById("guest-phone");
const guestEmail = document.getElementById("guest-email");
const partnerForm = document.getElementById("partner-form");
const partnerName = document.getElementById("partner-name");
const partnerBusiness = document.getElementById("partner-business");
const partnerEmail = document.getElementById("partner-email");
const partnerPhone = document.getElementById("partner-phone");
const partnerTrade = document.getElementById("partner-trade");
const partnerExperience = document.getElementById("partner-experience");
const partnerArea = document.getElementById("partner-area");
const partnerLicense = document.getElementById("partner-license");
const partnerNotes = document.getElementById("partner-notes");
const partnerSuccess = document.getElementById("partner-success");
const flowServiceGrid = document.getElementById("flow-service-grid");
const servicesBackButton = document.getElementById("services-back");
const servicesContinueButton = document.getElementById("services-continue");
const flowLocationText = document.getElementById("flow-location-text");
const locationSummary = document.getElementById("location-summary");
const nearbyPreview = document.getElementById("nearby-preview");
const refreshLocationButton = document.getElementById("refresh-location");
const enterAppButton = document.getElementById("enter-app");
const mapDetailName = document.getElementById("map-detail-name");
const mapDetailService = document.getElementById("map-detail-service");
const mapDetailBio = document.getElementById("map-detail-bio");
const mapDetailRating = document.getElementById("map-detail-rating");
const mapDetailPrice = document.getElementById("map-detail-price");
const mapDetailExperience = document.getElementById("map-detail-experience");
const mapDetailBook = document.getElementById("map-detail-book");
const reviewInput = document.getElementById("review-input");

let trackingTimer;

function getSelectedService() {
  return services[state.selectedCategory];
}

function getFilteredProfessionals() {
  return professionals
    .filter((pro) => pro.category === state.selectedCategory)
    .sort((first, second) => getDistanceMiles(first) - getDistanceMiles(second));
}

function getSelectedProfessional() {
  return professionals.find((pro) => pro.id === state.selectedProfessionalId) ?? getFilteredProfessionals()[0];
}

function getReferenceLocation() {
  return state.userLocation ?? defaultLocation;
}

function getProfessionalLocation(professional) {
  const base = getReferenceLocation();
  return {
    latitude: base.latitude + professional.offset.latitude,
    longitude: base.longitude + professional.offset.longitude,
  };
}

function getDistanceMiles(professional) {
  const origin = getReferenceLocation();
  const target = getProfessionalLocation(professional);
  const toRadians = (value) => (value * Math.PI) / 180;
  const earthRadiusMiles = 3958.8;
  const dLat = toRadians(target.latitude - origin.latitude);
  const dLng = toRadians(target.longitude - origin.longitude);
  const lat1 = toRadians(origin.latitude);
  const lat2 = toRadians(target.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  return earthRadiusMiles * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function formatDistanceMiles(value) {
  return `${value.toFixed(1)} mi away`;
}

function getMapBounds() {
  const locations = [getReferenceLocation(), ...professionals.map((pro) => getProfessionalLocation(pro))];
  const latitudes = locations.map((item) => item.latitude);
  const longitudes = locations.map((item) => item.longitude);
  const latPadding = 0.01;
  const lngPadding = 0.01;

  return {
    minLatitude: Math.min(...latitudes) - latPadding,
    maxLatitude: Math.max(...latitudes) + latPadding,
    minLongitude: Math.min(...longitudes) - lngPadding,
    maxLongitude: Math.max(...longitudes) + lngPadding,
  };
}

function projectLocationToMap(latitude, longitude) {
  const bounds = getMapBounds();
  const xRatio =
    (longitude - bounds.minLongitude) / Math.max(bounds.maxLongitude - bounds.minLongitude, 0.0001);
  const yRatio =
    (latitude - bounds.minLatitude) / Math.max(bounds.maxLatitude - bounds.minLatitude, 0.0001);

  return {
    x: `${14 + xRatio * 72}%`,
    y: `${78 - yRatio * 56}%`,
  };
}

function getServiceCountLabel(count) {
  return `${count} ${getSelectedService().name.toLowerCase()}${count === 1 ? "" : "s"}`;
}

function formatMoney(value) {
  return `$${value}`;
}

function getPaymentMethodLabel(method) {
  const labels = {
    card: "Card",
    applepay: "Apple Pay",
    wallet: "Wallet",
  };
  return labels[method] ?? method;
}

function getSheetTabLabel(tab) {
  const labels = {
    booking: "Booking",
    payment: "Payment",
    tracking: "Live tracker",
  };
  return labels[tab] ?? tab;
}

function isSheetTabAvailable(tab) {
  if (tab === "booking") return true;
  if (tab === "payment") return state.hasBooking;
  if (tab === "tracking") return state.paymentCompleted;
  return false;
}

function getPreviousSheetTab() {
  const currentIndex = sheetTabOrder.indexOf(state.activeSheetTab);
  for (let index = currentIndex - 1; index >= 0; index -= 1) {
    const candidate = sheetTabOrder[index];
    if (isSheetTabAvailable(candidate)) {
      return candidate;
    }
  }
  return null;
}

function getBookButtonLabel(profileId) {
  if (state.paymentCompleted && state.selectedProfessionalId === profileId) {
    return "Open tracker";
  }
  if (state.hasBooking && state.selectedProfessionalId === profileId) {
    return "Continue to payment";
  }
  return "Book and continue";
}

function getEstimateRange() {
  const service = getSelectedService();
  const issue = issueInput.value.toLowerCase();
  let [min, max] = service.estimate;

  if (state.urgency === "asap") {
    min += 18;
    max += 24;
  }

  if (issue.includes("emergency") || issue.includes("burst") || issue.includes("smoke")) {
    min += 22;
    max += 40;
  }

  return [min, max];
}

function getStatusDetail(index) {
  const details = [
    "Your pro is selected and the job details are locked in.",
    "Payment cleared and live tracking is active while your pro heads over.",
    "Technician has checked in at your location.",
    "Work is being completed and status updates stay live here.",
    "The visit is complete and you can leave a review when you're ready.",
  ];
  return details[index];
}

function renderFlow() {
  flowShell.classList.toggle("completed", state.flowCompleted);
  [...flowShell.querySelectorAll(".flow-layer")].forEach((layer) => {
    layer.classList.toggle("active", Number(layer.dataset.step) === state.flowStep);
  });
}

function renderSheetTabs() {
  [...sheetTabs.querySelectorAll("[data-sheet-tab]")].forEach((button) => {
    const available = isSheetTabAvailable(button.dataset.sheetTab);
    const active = button.dataset.sheetTab === state.activeSheetTab;
    button.disabled = !available;
    button.classList.toggle("active", active);
    button.setAttribute("aria-disabled", available ? "false" : "true");
    button.setAttribute("aria-selected", active ? "true" : "false");
  });

  [...document.querySelectorAll("[data-sheet-panel]")].forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.sheetPanel === state.activeSheetTab);
  });

  renderSheetHeader();
}

function renderSheetHeader() {
  const pro = getSelectedProfessional();
  const content = {
    booking: {
      eyebrow: "Booking details",
      title: "Choose your pro, then continue to payment.",
      copy: "Booking is its own page now. After you book, checkout opens immediately, then live tracking unlocks after payment.",
    },
    payment: {
      eyebrow: "Payment",
      title: `Confirm payment to dispatch ${pro.name}.`,
      copy: "This checkout happens before live tracking. Once payment clears, the live map, distance, and ETA tracker open automatically.",
    },
    tracking: {
      eyebrow: "Live tracker",
      title: `Track ${pro.name} like a live ride.`,
      copy: "See the route between you and your technician, how far away they are, and the current ETA from the map above.",
    },
  }[state.activeSheetTab];

  const previousTab = getPreviousSheetTab();

  sheetPageEyebrow.textContent = content.eyebrow;
  sheetPageTitle.textContent = content.title;
  sheetPageCopy.textContent = content.copy;
  sheetBackButton.hidden = !previousTab;
  sheetBackButton.disabled = !previousTab;
  sheetBackButton.textContent = previousTab ? `Back to ${getSheetTabLabel(previousTab)}` : "Previous tab";
}

function renderPartnerState() {
  partnerSuccess.classList.toggle("hidden-panel", !state.partnerApplicationSubmitted);
}

function renderFlowServices() {
  flowServiceGrid.innerHTML = Object.values(services)
    .map((service) => {
      const active = service.id === state.selectedCategory ? "active" : "";
      return `
        <button class="layer-service-option ${active}" data-flow-service="${service.id}" type="button">
          <span class="category-icon">${service.icon}</span>
          <strong>${service.name}</strong>
          <span class="muted">${service.summary}</span>
        </button>
      `;
    })
    .join("");
}

function renderLocationLayer() {
  const pros = getFilteredProfessionals();
  flowLocationText.textContent = state.currentLocationText;
  const nearestDistance = pros[0] ? formatDistanceMiles(getDistanceMiles(pros[0])) : "nearby";
  locationSummary.textContent = `We found ${getServiceCountLabel(pros.length)} near ${state.currentLocationText}. Closest option is ${nearestDistance}.`;

  nearbyPreview.innerHTML = pros
    .slice(0, 3)
    .map(
      (pro) => `
        <article class="nearby-card">
          <div>
            <strong>${pro.name}</strong>
            <p class="muted">${getSelectedService().name} - ${pro.experience} - ${formatDistanceMiles(getDistanceMiles(pro))}</p>
          </div>
          <div class="nearby-card-meta">
            <span>${pro.price}</span>
            <span>&#9733; ${pro.rating}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderMapDetail() {
  const pro = getSelectedProfessional();
  mapDetailName.textContent = pro.name;
  mapDetailService.textContent = `${services[pro.category].name} - ${pro.experience} - ${formatDistanceMiles(getDistanceMiles(pro))}`;
  mapDetailBio.textContent = pro.description;
  mapDetailRating.textContent = `${pro.rating} / 5`;
  mapDetailPrice.textContent = pro.price;
  mapDetailExperience.textContent = pro.experience;
  mapDetailBook.textContent = getBookButtonLabel(pro.id);
}

function renderCategories() {
  categoryGrid.innerHTML = Object.values(services)
    .map((service) => {
      const active = service.id === state.selectedCategory ? "active" : "";
      return `
        <button class="category-button ${active}" data-category="${service.id}" type="button">
          <span class="category-icon">${service.icon}</span>
          <strong>${service.name}</strong>
          <span class="muted">${service.summary}</span>
        </button>
      `;
    })
    .join("");
}

function renderProfiles() {
  const pros = getFilteredProfessionals();
  const nearestDistance = pros[0] ? formatDistanceMiles(getDistanceMiles(pros[0])) : "nearby";
  profilesSummary.textContent = `Showing ${pros.length} ${getSelectedService().name.toLowerCase()}${pros.length > 1 ? "s" : ""} available near you. Nearest is ${nearestDistance}.`;
  matchSummary.textContent = `${pros.length} verified ${getSelectedService().name.toLowerCase()}${pros.length > 1 ? "s" : ""} are sorted from your current location.`;

  profilesList.innerHTML = pros
    .map((pro) => {
      const selected = pro.id === state.selectedProfessionalId ? "selected" : "";
      const saved = state.favorites.has(pro.id) ? "Saved" : "Save";
      const bookLabel = getBookButtonLabel(pro.id);
      return `
        <article class="profile-card ${selected}" data-profile="${pro.id}">
          <div class="avatar" style="--avatar-a:${pro.colors[0]}; --avatar-b:${pro.colors[1]};">${pro.initials}</div>
          <div>
            <div class="profile-head">
              <h3>${pro.name}</h3>
              <span class="verified-chip">&#10003; ${pro.badges[0]}</span>
            </div>
            <div class="meta-row">
              <span>&#9733; ${pro.rating} &middot; ${pro.reviews} reviews</span>
              <span>${pro.badges.slice(1).join(" &middot; ")}</span>
              <span>${formatDistanceMiles(getDistanceMiles(pro))}</span>
              <span>ETA ${pro.eta} mins</span>
            </div>
            <div class="skills-row">
              ${pro.skills.map((skill) => `<span>${skill}</span>`).join("")}
            </div>
          </div>
          <div class="profile-actions">
            <div class="price-tag">${pro.price}</div>
            <button class="favorite-button" data-favorite="${pro.id}" type="button">${saved}</button>
            <button class="primary-button" data-book="${pro.id}" type="button">${bookLabel}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function getCurrentTravelDistanceMiles(pro) {
  const baselineDistance = getDistanceMiles(pro);
  if (!state.paymentCompleted) {
    return baselineDistance;
  }
  if (state.trackingStage >= 2) {
    return 0;
  }
  const etaRatio = Math.max(Math.min(state.eta / Math.max(pro.eta, 1), 1), 0);
  return Math.max(baselineDistance * etaRatio, 0.1);
}

function getTrackingProgressPercent() {
  if (!state.paymentCompleted) {
    return 0;
  }
  const progressByStage = [10, 36, 62, 84, 100];
  return progressByStage[state.trackingStage] ?? 0;
}

function renderTracking() {
  const pro = getSelectedProfessional();
  const trackingUnlocked = state.paymentCompleted;
  const activeStage = trackingUnlocked ? state.trackingStage : 0;
  const liveDistance = getCurrentTravelDistanceMiles(pro);

  trackingTitle.textContent = trackingUnlocked
    ? `${pro.name} is ${getTrackingCopy()}.`
    : `${pro.name} is ready once payment is confirmed.`;
  statusPill.textContent = trackingUnlocked ? statusSteps[activeStage] : "Awaiting payment";
  etaValue.textContent = trackingUnlocked ? `${state.eta} mins` : "--";
  heroEta.textContent = trackingUnlocked ? `${state.eta} mins` : "Awaiting payment";
  heroPro.textContent = pro.name;
  vehicleValue.textContent = pro.vehicle;
  codeValue.textContent = pro.code;
  trackerLocation.textContent = trackingUnlocked
    ? `${pro.name} to ${state.currentLocationText}`
    : `${pro.name} waiting for dispatch`;
  trackerEta.textContent = trackingUnlocked ? `${state.eta} mins` : "--";
  trackerProgressBar.style.width = `${getTrackingProgressPercent()}%`;
  routeLine.style.display = trackingUnlocked ? "block" : "none";
  vanMarker.style.display = trackingUnlocked ? "grid" : "none";

  if (!trackingUnlocked) {
    trackerDistance.textContent = "Complete payment to unlock the live route, distance from you, and ETA tracker.";
  } else if (state.trackingStage === 1) {
    trackerDistance.textContent = `${formatDistanceMiles(liveDistance)} from you and moving now.`;
  } else if (state.trackingStage === 2) {
    trackerDistance.textContent = `${pro.name} has arrived at your location.`;
  } else if (state.trackingStage === 3) {
    trackerDistance.textContent = `${pro.name} is working on the job right now.`;
  } else {
    trackerDistance.textContent = "The visit is complete. You can leave a review below.";
  }

  statusList.innerHTML = statusSteps
    .map((step, index) => {
      let className = "";
      if (index < activeStage) className = "done";
      if (index === activeStage) className = "current";
      return `
        <div class="status-item ${className}">
          <span class="status-dot"></span>
          <div>
            <strong>${step}</strong>
            <div class="muted">${getStatusDetail(index)}</div>
          </div>
        </div>
      `;
    })
    .join("");

  if (trackingUnlocked) {
    const travelProgress = Math.max(18 - state.eta, 0) / 18;
    const x = 72 - travelProgress * 38;
    const y = 34 + travelProgress * 12;
    vanMarker.style.setProperty("--van-x", `${x}%`);
    vanMarker.style.setProperty("--van-y", `${y}%`);
  }

  reviewPanel.classList.toggle("hidden-panel", !(trackingUnlocked && state.trackingStage === statusSteps.length - 1));
}

function getTrackingCopy() {
  const copy = {
    0: "booked",
    1: "on the way",
    2: "at your location",
    3: "working on the job",
    4: "finished the visit",
  };
  return copy[state.trackingStage];
}

function renderChat() {
  chatThread.innerHTML = state.chat
    .map((message) => `<div class="bubble ${message.author}">${message.text}</div>`)
    .join("");
  chatThread.scrollTop = chatThread.scrollHeight;
}

function renderCosts() {
  const [low] = getEstimateRange();
  const serviceCall = Math.round(low * 0.52);
  const labor = Math.round(low * 0.36);
  const platform = Math.round(low * 0.12);
  const total = serviceCall + labor + platform + state.tip;

  serviceCost.textContent = formatMoney(serviceCall);
  laborCost.textContent = formatMoney(labor);
  platformCost.textContent = formatMoney(platform);
  tipCost.textContent = formatMoney(state.tip);
  payButton.disabled = !state.hasBooking || state.paymentCompleted;
  payButton.textContent = state.paymentCompleted ? `Paid ${formatMoney(total)}` : `Pay ${formatMoney(total)} to dispatch`;
}

function renderFavorites() {
  const savedPros = professionals.filter((pro) => state.favorites.has(pro.id));
  favoritesList.innerHTML = savedPros
    .map(
      (pro) => `
        <div class="favorite-item">
          <span class="mini-title">${pro.name}</span>
          <div class="muted">${pro.category} &middot; ${pro.price} &middot; ETA ${pro.eta} mins</div>
          <button class="ghost-button" data-book="${pro.id}" type="button">Book again</button>
        </div>
      `
    )
    .join("");
}

function renderHistory() {
  historyList.innerHTML = state.history
    .map(
      (job, index) => `
        <div class="history-item">
          <span class="mini-title">${job.title}</span>
          <div class="muted">${job.detail}</div>
          <button class="ghost-button" data-rebook="${job.category}" data-history-index="${index}" type="button">Rebook service</button>
        </div>
      `
    )
    .join("");
}

function renderNotifications() {
  notificationsList.innerHTML = state.notifications
    .slice(0, 6)
    .map(
      (notice) => `
        <div class="notice-item">
          <span class="mini-title">${notice.title}</span>
          <div class="muted">${notice.detail}</div>
        </div>
      `
    )
    .join("");
}

function renderMapPins() {
  mapPins.innerHTML = professionals
    .map((pro) => {
      const active = pro.id === state.selectedProfessionalId ? "active" : "";
      const projected = projectLocationToMap(getProfessionalLocation(pro).latitude, getProfessionalLocation(pro).longitude);
      return `
        <button class="map-pin ${active}" data-profile="${pro.id}" type="button" style="left:${projected.x}; top:${projected.y}; transform: translate(-50%, -50%);">
          <span>${services[pro.category].icon}</span>
          <div class="pin-label">${pro.name.split(" ")[0]}</div>
        </button>
      `;
    })
    .join("");
}

function renderUserLocationMarker() {
  const origin = getReferenceLocation();
  const projected = projectLocationToMap(origin.latitude, origin.longitude);
  userLocationMarker.style.left = projected.x;
  userLocationMarker.style.top = projected.y;
}

function updateEstimate() {
  const [min, max] = getEstimateRange();
  estimateValue.textContent = `${formatMoney(min)} - ${formatMoney(max)}`;
  renderCosts();
}

function updateSuggestion() {
  const issue = issueInput.value.trim().toLowerCase();
  const search = searchInput.value.trim().toLowerCase();
  const service = getSelectedService();
  const combined = `${issue} ${search}`;

  if (state.photoName) {
    aiSuggestion.textContent = `Photo attached. AI suggests ${service.name.toLowerCase()} dispatch with a likely first-visit fix kit.`;
    return;
  }

  const keyword = service.keywords.find((item) => combined.includes(item));
  if (keyword) {
    aiSuggestion.textContent = `AI suggests a ${service.name.toLowerCase()} because it detected "${keyword}" in your request.`;
    return;
  }

  aiSuggestion.textContent = `AI is leaning toward ${service.name.toLowerCase()} help. Add a symptom, location, or photo for a tighter estimate.`;
}

function syncSearchToIssue() {
  if (!issueInput.value.trim() && searchInput.value.trim()) {
    issueInput.value = searchInput.value.trim();
  }
}

function resetCheckoutProgress(nextTab = "booking") {
  window.clearInterval(trackingTimer);
  state.hasBooking = false;
  state.paymentCompleted = false;
  state.activeSheetTab = nextTab;
  state.trackingStage = 0;
  reviewPanel.classList.add("hidden-panel");
}

function selectCategory(categoryId) {
  const categoryChanged = state.selectedCategory !== categoryId;
  if (categoryChanged) {
    resetCheckoutProgress();
  }
  state.selectedCategory = categoryId;
  const matching = getFilteredProfessionals();
  if (!matching.some((pro) => pro.id === state.selectedProfessionalId)) {
    state.selectedProfessionalId = matching[0].id;
    state.eta = matching[0].eta;
    state.trackingStage = 0;
  }
  renderAll();
}

function setFlowStep(step) {
  state.flowStep = step;
  renderFlow();
}

function completeFlow() {
  state.flowCompleted = true;
  renderFlow();
}

function selectProfessional(profileId, syncCategory = true) {
  const pro = professionals.find((item) => item.id === profileId);
  if (!pro) return;

  if (state.selectedProfessionalId !== profileId || (syncCategory && state.selectedCategory !== pro.category)) {
    resetCheckoutProgress();
  }
  state.selectedProfessionalId = profileId;
  if (syncCategory) {
    state.selectedCategory = pro.category;
  }
  state.eta = pro.eta;
  renderAll();
}

function toggleFavorite(profileId) {
  if (state.favorites.has(profileId)) {
    state.favorites.delete(profileId);
  } else {
    state.favorites.add(profileId);
  }
  renderProfiles();
  renderFavorites();
}

function bookProfessional(profileId) {
  const pro = professionals.find((item) => item.id === profileId);
  if (!pro) return;

  if (state.paymentCompleted && state.selectedProfessionalId === profileId) {
    setSheetTab("tracking");
    return;
  }

  if (state.hasBooking && !state.paymentCompleted && state.selectedProfessionalId === profileId) {
    setSheetTab("payment");
    return;
  }

  window.clearInterval(trackingTimer);
  state.selectedProfessionalId = profileId;
  state.selectedCategory = pro.category;
  state.eta = pro.eta;
  state.trackingStage = 0;
  state.hasBooking = true;
  state.paymentCompleted = false;
  state.activeSheetTab = "payment";
  reviewPanel.classList.add("hidden-panel");

  state.notifications.unshift({
    title: `${pro.name} booked`,
    detail: `Complete payment now to dispatch ${pro.name} and open live tracking.`,
  });

  state.chat = [{ author: "pro", text: "I'm ready to head out as soon as payment is confirmed." }];

  renderAll();
}

function renderAll() {
  renderFlow();
  renderSheetTabs();
  renderPartnerState();
  renderFlowServices();
  renderLocationLayer();
  renderCategories();
  renderProfiles();
  renderTracking();
  renderChat();
  renderCosts();
  renderFavorites();
  renderHistory();
  renderNotifications();
  renderMapPins();
  renderUserLocationMarker();
  renderMapDetail();
  updateEstimate();
  updateSuggestion();
}

function advanceTracking() {
  const pro = getSelectedProfessional();

  if (!state.paymentCompleted) {
    return;
  }

  if (state.trackingStage === 1) {
    if (state.eta > 2) {
      state.eta = Math.max(state.eta - 2, 2);
    } else {
      state.trackingStage = 2;
      state.eta = 1;
      state.chat.push({ author: "pro", text: "I'm outside and walking up now." });
      state.notifications.unshift({ title: `${pro.name} arrived`, detail: "Your technician has checked in." });
    }
  } else if (state.trackingStage === 2) {
    state.trackingStage = 3;
    state.eta = 0;
    state.chat.push({ author: "pro", text: "I've started the repair. I'll confirm once the issue is fixed." });
    state.notifications.unshift({ title: "Job in progress", detail: "Work has started and pricing remains locked." });
  } else if (state.trackingStage === 3) {
    state.trackingStage = 4;
    state.chat.push({ author: "pro", text: "All set. The job is complete." });
    state.notifications.unshift({ title: "Job complete", detail: "The visit is finished and your review is ready below." });
    state.history.unshift({
      title: `${services[state.selectedCategory].name} visit completed`,
      detail: `${pro.name} - ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" })}`,
      category: state.selectedCategory,
    });
  } else if (state.trackingStage < statusSteps.length - 1) {
    state.trackingStage += 1;
  }

  renderTracking();
  renderChat();
  renderHistory();
  renderNotifications();
}

function startTrackingDemo() {
  window.clearInterval(trackingTimer);
  trackingTimer = window.setInterval(() => {
    if (state.trackingStage >= statusSteps.length - 1) {
      window.clearInterval(trackingTimer);
      return;
    }
    advanceTracking();
  }, 7000);
}

function submitPayment() {
  if (!state.hasBooking) {
    setSheetTab("booking");
    return;
  }

  if (state.paymentCompleted) {
    setSheetTab("tracking");
    return;
  }

  const pro = getSelectedProfessional();
  const [estimate] = getEstimateRange();
  const total = Math.round(estimate * 0.52) + Math.round(estimate * 0.36) + Math.round(estimate * 0.12) + state.tip;

  state.paymentCompleted = true;
  state.activeSheetTab = "tracking";
  state.trackingStage = 1;
  state.chat.push({ author: "pro", text: "Payment confirmed. I'm on the way now." });

  state.notifications.unshift({
    title: "Payment complete",
    detail: `${formatMoney(total)} paid with ${getPaymentMethodLabel(state.paymentMethod)}. Live tracking is now active.`,
  });

  renderAll();
  startTrackingDemo();
}

function submitReview() {
  state.notifications.unshift({
    title: "Review posted",
    detail: `${state.rating} stars submitted: "${reviewInput.value.trim() || "Great experience."}"`,
  });
  renderNotifications();
  reviewInput.value = "";
}

function setRating(rating) {
  state.rating = rating;
  [...starRow.querySelectorAll(".star")].forEach((star) => {
    const starValue = Number(star.dataset.rating);
    star.classList.toggle("inactive", starValue > rating);
  });
}

function setPaymentMethod(method) {
  state.paymentMethod = method;
  [...paymentMethods.querySelectorAll(".method")].forEach((button) => {
    button.classList.toggle("active", button.dataset.payment === method);
  });
}

function setTip(value) {
  state.tip = value;
  [...tipRow.querySelectorAll(".tip")].forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.tip) === value);
  });
  renderCosts();
}

function setUrgency(mode) {
  state.urgency = mode;
  [...urgencyToggle.querySelectorAll(".toggle")].forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  scheduleInput.classList.toggle("visible", mode === "schedule");
  updateEstimate();
  renderProfiles();
}

function runInstantMatch() {
  syncSearchToIssue();
  updateSuggestion();

  const issue = `${searchInput.value} ${issueInput.value}`.toLowerCase();
  const matchingCategory =
    Object.values(services).find((service) => service.keywords.some((keyword) => issue.includes(keyword)))?.id ??
    state.selectedCategory;

  resetCheckoutProgress();
  state.selectedCategory = matchingCategory;
  const fastest = getFilteredProfessionals().slice().sort((a, b) => a.eta - b.eta)[0];
  state.selectedProfessionalId = fastest.id;
  state.eta = fastest.eta;
  state.trackingStage = 0;

  state.notifications.unshift({
    title: "Instant match ready",
    detail: `${fastest.name} was selected for speed, rating, and service fit. Book to continue to payment.`,
  });

  renderAll();
}

function triggerEmergency(type) {
  const emergency = emergencyMap[type];
  if (!emergency) return;
  searchInput.value = emergency.prompt;
  issueInput.value = emergency.prompt;
  setUrgency("asap");
  selectCategory(emergency.category);
  runInstantMatch();
}

function detectLocation() {
  function applyLocation(latitude, longitude, accuracy, label, source) {
    state.userLocation = { latitude, longitude, accuracy, label, source };
    state.currentLocationText = label;
    locationPill.textContent = label;
    const nearest = getFilteredProfessionals()[0];
    if (nearest && !state.hasBooking && !state.paymentCompleted) {
      state.selectedProfessionalId = nearest.id;
      state.eta = nearest.eta;
    }
    renderAll();
  }

  if (!("geolocation" in navigator)) {
    applyLocation(defaultLocation.latitude, defaultLocation.longitude, null, defaultLocation.label, "fallback");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const accuracy = Math.round(position.coords.accuracy);
      const label = `${latitude.toFixed(4)}, ${longitude.toFixed(4)} (+/-${accuracy}m)`;
      applyLocation(latitude, longitude, accuracy, label, "device");
    },
    () => {
      applyLocation(defaultLocation.latitude, defaultLocation.longitude, null, defaultLocation.label, "fallback");
    },
    { enableHighAccuracy: true, maximumAge: 30000, timeout: 8000 }
  );
}

function handleCategoryClicks(event) {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectCategory(button.dataset.category);
}

function handleProfileClicks(event) {
  const card = event.target.closest("[data-profile]");
  const bookButton = event.target.closest("[data-book]");
  const favoriteButton = event.target.closest("[data-favorite]");

  if (card && !bookButton && !favoriteButton) {
    selectProfessional(Number(card.dataset.profile));
  }

  if (bookButton) {
    bookProfessional(Number(bookButton.dataset.book));
  }

  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.favorite));
  }
}

function handleMapPinClicks(event) {
  const pin = event.target.closest("[data-profile]");
  if (!pin) return;
  selectProfessional(Number(pin.dataset.profile));
}

function handleHubClicks(event) {
  const rebookButton = event.target.closest("[data-rebook]");
  const bookButton = event.target.closest("[data-book]");

  if (rebookButton) {
    selectCategory(rebookButton.dataset.rebook);
    runInstantMatch();
  }

  if (bookButton) {
    bookProfessional(Number(bookButton.dataset.book));
  }
}

function handleSignupSubmit(event) {
  event.preventDefault();
  state.authStep = 2;
  state.accountName = signupName.value.trim();
  state.accountEmail = signupEmail.value.trim();
  state.accountPhone = "";

  if (!state.accountName || !state.accountEmail || !signupPassword.value.trim()) {
    return;
  }

  setFlowStep(4);
}

function handleLoginSubmit(event) {
  event.preventDefault();
  state.authStep = 1;
  state.accountEmail = loginEmail.value.trim();
  state.accountName = state.accountEmail.split("@")[0] || "Member";
  state.accountPhone = "";

  if (!state.accountEmail || !loginPassword.value.trim()) {
    return;
  }

  setFlowStep(4);
}

function openLogin() {
  state.authStep = 1;
  setFlowStep(1);
}

function handleGuestSubmit(event) {
  event.preventDefault();
  state.authStep = 3;
  state.accountName = guestName.value.trim();
  state.accountPhone = guestPhone.value.trim();
  state.accountEmail = guestEmail.value.trim();

  if (!state.accountName || !state.accountPhone) {
    return;
  }

  setFlowStep(4);
}

function openGuest() {
  state.authStep = 3;
  setFlowStep(3);
}

function openPartner() {
  state.partnerApplicationSubmitted = false;
  partnerForm.reset();
  renderPartnerState();
  setFlowStep(6);
}

function openSignup() {
  state.authStep = 2;
  setFlowStep(2);
}

function goBackToAuth() {
  setFlowStep(state.authStep);
}

function handlePartnerSubmit(event) {
  event.preventDefault();

  if (
    !partnerName.value.trim() ||
    !partnerBusiness.value.trim() ||
    !partnerEmail.value.trim() ||
    !partnerPhone.value.trim() ||
    !partnerTrade.value ||
    !partnerExperience.value.trim() ||
    !partnerArea.value.trim()
  ) {
    return;
  }

  state.partnerApplicationSubmitted = true;
  renderPartnerState();
}

function handleFlowServiceClicks(event) {
  const option = event.target.closest("[data-flow-service]");
  if (!option) return;
  selectCategory(option.dataset.flowService);
}

function showLocationStep() {
  setFlowStep(5);
  detectLocation();
  renderLocationLayer();
}

function setSheetTab(tab) {
  if (!isSheetTabAvailable(tab)) {
    return;
  }
  state.activeSheetTab = tab;
  renderSheetTabs();
}

function openLiveMap() {
  completeFlow();
  document.querySelector(".map-stage").scrollIntoView({ behavior: "smooth", block: "start" });
}

categoryGrid.addEventListener("click", handleCategoryClicks);
profilesList.addEventListener("click", handleProfileClicks);
favoritesList.addEventListener("click", handleHubClicks);
historyList.addEventListener("click", handleHubClicks);
mapPins.addEventListener("click", handleMapPinClicks);
flowServiceGrid.addEventListener("click", handleFlowServiceClicks);
loginForm.addEventListener("submit", handleLoginSubmit);
signupForm.addEventListener("submit", handleSignupSubmit);
guestForm.addEventListener("submit", handleGuestSubmit);
partnerForm.addEventListener("submit", handlePartnerSubmit);
openLoginButton.addEventListener("click", openLogin);
openGuestButton.addEventListener("click", openGuest);
openSignupButton.addEventListener("click", openSignup);
openPartnerButton.addEventListener("click", openPartner);
servicesBackButton.addEventListener("click", goBackToAuth);
servicesContinueButton.addEventListener("click", showLocationStep);
refreshLocationButton.addEventListener("click", detectLocation);
enterAppButton.addEventListener("click", openLiveMap);
mapDetailBook.addEventListener("click", () => bookProfessional(state.selectedProfessionalId));

[...document.querySelectorAll("[data-flow-back]")].forEach((button) => {
  button.addEventListener("click", () => setFlowStep(Number(button.dataset.flowBack)));
});

issueInput.addEventListener("input", () => {
  updateEstimate();
  updateSuggestion();
});

searchInput.addEventListener("input", updateSuggestion);

photoInput.addEventListener("change", () => {
  state.photoName = photoInput.files[0]?.name ?? "";
  photoName.textContent = state.photoName || "No file selected";
  updateSuggestion();
});

urgencyToggle.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  setUrgency(button.dataset.mode);
});

paymentMethods.addEventListener("click", (event) => {
  const button = event.target.closest("[data-payment]");
  if (!button) return;
  setPaymentMethod(button.dataset.payment);
});

sheetTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sheet-tab]");
  if (!button) return;
  setSheetTab(button.dataset.sheetTab);
});

sheetBackButton.addEventListener("click", () => {
  const previousTab = getPreviousSheetTab();
  if (!previousTab) return;
  setSheetTab(previousTab);
});

tipRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tip]");
  if (!button) return;
  setTip(Number(button.dataset.tip));
});

starRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rating]");
  if (!button) return;
  setRating(Number(button.dataset.rating));
});

document.getElementById("match-button").addEventListener("click", runInstantMatch);
document.getElementById("panic-fab").addEventListener("click", () => triggerEmergency("water leak"));
locationPill.addEventListener("click", detectLocation);
document.querySelector(".emergency-dock").addEventListener("click", (event) => {
  const button = event.target.closest("[data-emergency]");
  if (!button) return;
  triggerEmergency(button.dataset.emergency);
});

document.getElementById("advance-button").addEventListener("click", advanceTracking);
document.getElementById("call-button").addEventListener("click", () => {
  state.notifications.unshift({ title: "Secure relay call started", detail: "Your number remains hidden from the technician." });
  renderNotifications();
});

document.getElementById("message-button").addEventListener("click", () => {
  state.chat.push({ author: "user", text: "Please use the side entrance when you arrive." });
  state.chat.push({ author: "pro", text: "Received. I'll head to the side entrance." });
  renderChat();
});

document.getElementById("chat-send").addEventListener("click", () => {
  const value = chatInput.value.trim();
  if (!value) return;
  state.chat.push({ author: "user", text: value });
  state.chat.push({ author: "pro", text: "Thanks, I've got it." });
  chatInput.value = "";
  renderChat();
});

payButton.addEventListener("click", submitPayment);
document.getElementById("submit-review").addEventListener("click", submitReview);

renderAll();
setPaymentMethod(state.paymentMethod);
setTip(state.tip);
setRating(state.rating);
detectLocation();
