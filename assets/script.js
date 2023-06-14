var findNearestMalls;
var key = "AIzaSyCLsgBkf2kPSWIYMK0fU7VFxf1p-5Rexi8";

button.addEventListener("findNearestMalls", getSearch())

function findNearestMalls() {
    var location = document.getElementById("location").value;
    if (location === "") {
      console.log("Please enter a location");
      return;
    }
    // Perform the search for nearest malls
    // ...
  }

// Get user search input
function getSearch() {
    var location = document.getElementById("location").value;
    if (location === "") {
      console.log("Please enter a city within Ontario");
    } else {
        //process result
        return getSearch;
    }
};

function fetchWikiExtract(searchTerm) {
    const wikiEndpoint = 'https://en.wikipedia.org/w/api.php';
    const wikiParams = `?action=query&prop=extracts&exintro&explaintext&format=json&origin=*&titles=${searchTerm}`;
  
    const wikiLink = wikiEndpoint + wikiParams;
  
    fetch(wikiLink)
    .then(response => response.json())
    .then(data => {
      const pages = data.query.pages;
      const extract = pages[0].extract;
      document.getElementById('wikiExtract').innerHTML = extract;
    })
    .catch(error => {
      console.error('Error fetching Wikipedia data:', error);
    });
}

// Use getSearch() to generate an array of info for search result
function searchArray(getSearch) {
  var name = this.name;
  var location = this.location;
  var contact = this.contact;
  var hours = this.hours;
  var webURL = this.url;
}

// Display the result in an organized way using CSS
// Add appropriate CSS rules in your style.css file