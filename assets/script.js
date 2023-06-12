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

//use getSearch() to generate array of info for search result
function searchArray(getSearch){
    var name = this.name;
    var location = this.location;
    var contact = this.contact;
    var hours = this.hours;
    var webURL = this.url;
}

//display the result in an organized way using CSS