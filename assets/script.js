var findNearestMalls;
button.addEventListener("findNearestMalls", getSearch())

//get user search input
function getSearch() {
    document.getElementById("location")
    if (location == null /** || (outside Ontario)**/) {
        console.log("Please enter a city within Ontario");
    }
    else{
        //process result
        return getSearch;
    }
};

function fetchWikiExtract(){
    const wikiEndpoint = 'https://simple.wikipedia.org/w/api.php';
    const wikiParams = '?action-query'
    + "&prop=extracts" //an'extract' is the type of property being used
    + "&exlimit=1" //idk
    + "&titles=" + "" //tells the link which specific wikipedia page to get an extract from (changes based on the 'ele' param)
    + "&explaintext=1" //tells the API to provide the content in plain text (instead of html code or other formats)
    + "&format=json" //requests data in Json format
    + "&formatversion=2" //makes the JSON properties easier to navigate using dot notation
    + "&origin=*" //omitting this param causes CORS error
    ;

    const wikiLink = wikiEndpoint + wikiParams;
    console.log(wikiLink);
}

//use getSearch() to generate array of info for search result
function searchArray(getSearch){
    var name = this.name;
    var location = this.location;
    var contact = this.contact;
    var hours = this.hours;
    var webURL = this.url;
}

//display the result in an organized way using CSS