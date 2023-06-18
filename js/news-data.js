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
  
  // Send the HTTP GET request
  fetch(apiUrl, {
    headers: {
      "x-api-key": apiKey
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then(data => {
      // Process the data as needed
      const headlines = data.articles;
      for (let i = 0; i < headlines.length; i++) {
        const headline = headlines[i].title;
        const listItem = document.createElement("li");
        listItem.textContent = headline;
        newsList.appendChild(listItem);
      }
    })
    .catch(error => {
      console.error(error);
    });

    function fetchNews() {
        // Send the HTTP GET request
        fetch(apiUrl, {
          headers: {
            "x-api-key": apiKey
          }
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Error: " + response.status);
            }
          })
          .then(data => {
            // Process the data as needed
            const headlines = data.articles;
            const newsList = document.getElementById("newsList");
            newsList.innerHTML = ""; // Clear previous news items
            for (let i = 0; i < headlines.length; i++) {
              const headline = headlines[i].title;
              const listItem = document.createElement("li");
              listItem.textContent = headline;
              newsList.appendChild(listItem);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    
      
      
      
      