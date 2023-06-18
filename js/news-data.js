const apiKey = "tuuHNzvbzwgB_7h4NTMx-TeyCUcyHbgfVcOtc7CnitM";
const url = "https://api.newscatcherapi.com/v2/latest_headlines";

// Set up the API parameters
const params = {
  countries: "ca", // Retrieve headlines from Canada
  cities: "ottawa", // Retrieve headlines for Ottawa
  topic: "business", // Example: Retrieve business-related headlines
  page_size: 10 // Example: Retrieve 10 headlines per page
};

// Create the URL with query parameters
const queryParams = new URLSearchParams(params);
const apiUrl = `${url}?${queryParams}`;

// Reference the news list element
const newsList = document.getElementById("newsList");

function fetchNews() {
    const newsList = document.getElementById("newsList");

    // Clear existing news items
    newsList.innerHTML = "";

    // Call the NewsCatcher API
    const apiUrl = "https://api.newscatcherapi.com/v2/latest_headlines";
    const apiKey = "tuuHNzvbzwgB_7h4NTMx-TeyCUcyHbgfVcOtc7CnitM";
    const country = "us"; // Change the country code if needed

    fetch(`${apiUrl}?country=${country}&topic=business&token=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        // Iterate over the news articles and create list items
        data.articles.forEach((article) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${article.title} - ${article.published_date}`;
          newsList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }
