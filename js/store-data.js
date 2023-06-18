var map;
var markers = [];
var infoWindow;

function initMap() {
  var ottawa = {
    lat: 45.424721,
    lng: -75.695000,
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: ottawa,
    zoom: 11,
    mapTypeId: 'roadmap',
  });
  infoWindow = new google.maps.InfoWindow();
  searchStores();
}

const searchStores = () => {
  let foundStores = [];
  let postalCode = 'K2B 8C1'; // Bayshore Shopping Center postal code
  if (postalCode) {
    stores.forEach((store) => {
      let storePostalCode = store.address.postalCode;
      if (storePostalCode.startsWith(postalCode)) {
        foundStores.push(store);
      }
    });
  } else {
    foundStores = stores;
  }
  if (foundStores.length === 0) {
    foundStores = stores;
  }
  clearLocation();
  displayStores(foundStores);
  showStoresMarker(foundStores);
  setOnClickListener();
};

const clearLocation = () => {
  infoWindow.close();
  markers.forEach((marker) => {
    marker.setMap(null);
  });
  markers.length = 0;
};

const setOnClickListener = () => {
  let storeElements = document.querySelectorAll('.stores-container');
  storeElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      google.maps.event.trigger(markers[index], 'click');
    });
  });
};

const displayStores = (stores) => {
  let storesHTML = '';
  stores.forEach((store, count) => {
    storesHTML += `
      <div class="stores-container">
        <div class="store-container-background">
          <div class="store-info-container">
            <div class="store-address">
              <span>${store.address.streetAddressLine1}</span>
              <span>${store.address.city}, ${store.address.countrySubdivisionCode} ${store.address.postalCode}</span>
            </div>
            <div class="store-phone-number">${store.phoneNumber}</div>
          </div>
          <div class="store-number-container">
            <div class="store-number">${count + 1}</div>
          </div>
        </div>
      </div>
    `;
  });
  document.querySelector('.stores-list').innerHTML = storesHTML;
};

let stores = [{
  "recommendation": {},
  "storeNumber": "12345",
  "id": "67890",
  "name": "Bayshore Shopping Center",
  "phoneNumber": "613-123-4567",
  "coordinates": {
      "latitude": 45.3471,
      "longitude": -75.8069
  },
  "regulations": [],
  "address": {
      "streetAddressLine1": "100 Bayshore Drive",
      "streetAddressLine2": null,
      "streetAddressLine3": null,
      "city": "Ottawa",
      "countrySubdivisionCode": "ON",
      "countryCode": "CA",
      "postalCode": "K2B 8C1"
  },
  "timeZoneInfo": {
      "currentTimeOffset": -240,
      "windowsTimeZoneId": "Eastern Standard Time",
      "olsonTimeZoneId": "GMT-04:00 America/Toronto"
  },
  "brandName": "Bayshore Shopping Center",
  "ownershipTypeCode": "CO",
  "open": true,
  "openStatusText": "Open until 9:00 PM",
  "addressLines": ["100 Bayshore Drive", "Ottawa, ON K2B 8C1"],
  "mop": {
      "ready": false,
      "wait": null
  },
  "schedule": [{
      "dayName": "Today",
      "hours": "9:00 AM to 9:00 PM",
      "open": true,
      "holiday": ""
  }]
}];

const showStoresMarker = (stores) => {
  var bounds = new google.maps.LatLngBounds();
  stores.forEach((store, count) => {
    let latlng = new google.maps.LatLng(
      store.coordinates.latitude,
      store.coordinates.longitude
    );
    let name = store.name;
    let address = store.addressLines[0];
    let openStatus = store.openStatusText;
    let phoneNumber = store.phoneNumber;
    bounds.extend(latlng);
    createMarker(latlng, name, address, openStatus, phoneNumber, count + 1);
  });
  map.fitBounds(bounds);
};

const createMarker = (
  latlng,
  name,
  address,
  openStatus,
  phoneNumber,
  count
) => {
  var html = `
    <div class="store-info-window">
      <div class="store-info-name">
        ${name}
      </div>
      <div class="store-info-status">
        ${openStatus}
      </div>
      <div class="store-info-address">
        <div class="circle">
          <i class="fas fa-location-arrow"></i>
        </div>
        ${address}
      </div>
      <div class="store-info-phone">
        <div class="circle">
          <i class="fas fa-phone-alt"></i>
        </div>
        ${phoneNumber}
      </div>
    </div>
  `;
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    label: count.toString(),
  });
  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  });
  markers.push(marker);
};

// Call initMap when the Google Maps API is loaded
window.onload = () => {
  initMap();
};

