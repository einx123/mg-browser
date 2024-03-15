function handleSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    
    // Check if the search term is a valid URL
    if (isValidURL(searchTerm)) {
      window.location.href = searchTerm; // Redirect to the URL
    } else {
      // Handle other search queries (if needed)
      alert("Not a valid URL. Please enter a valid URL.");
    }
  }
  
  function isValidURL(url) {
    // Regular expression to validate URLs
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(url);
  }
  const searchHistory = ["Query 1", "Query 2", "Query 3"];

  function toggleSearchHistory() {
      const searchHistoryElement = document.getElementById("searchHistory");
  
      if (searchHistoryElement.style.display === "block") {
          searchHistoryElement.style.display = "none";
      } else {
          searchHistoryElement.style.display = "block";
          renderSearchHistory();
      }
  }
  
  function renderSearchHistory() {
      const searchHistoryElement = document.getElementById("searchHistory");
      searchHistoryElement.innerHTML = "";
  
      searchHistory.forEach(query => {
          const historyItem = document.createElement("div");
          historyItem.textContent = query;
          searchHistoryElement.appendChild(historyItem);
      });
  }
  async function getUserIPAddress() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
}

// Function to fetch user's country based on IP address
async function getUserCountry(ip) {
    const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY&ip=${ip}`);
    const data = await response.json();
    return data.country_name;
}

async function setSiteLanguage() {
    const userIP = await getUserIPAddress();
    const userCountry = await getUserCountry(userIP);

    let userLanguage = 'en'; 

    if (userCountry === 'France') {
        userLanguage = 'fr'; 
    } if (userCountry === 'Spain') {
        userLanguage = 'es';
    }
    else if (userCountry === 'persian') {
    userLanguage = 'fa'; 
}

    document.getElementById('language').textContent = `Your site language is set to: ${userLanguage}`;
    document.documentElement.lang = userLanguage; // Set the HTML lang attribute for language
}

setSiteLanguage();
document.addEventListener('DOMContentLoaded', function() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const body = document.querySelector('body');

  if (prefersDarkScheme) {
      body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
  });
  function handleSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    var searchResults = document.getElementById("searchResults");

    // Clear previous search results
    searchResults.innerHTML = "";

    // Simulate search results (replace with actual search logic)
    var searchResultItem = document.createElement("div");
    searchResultItem.textContent = "Search results for: " + searchTerm;
    searchResults.appendChild(searchResultItem);
}
const addUrlButton = document.getElementById('addUrlButton');
const urlInput = document.getElementById('urlInput');
const redirectButton = document.getElementById('redirectButton');

addUrlButton.addEventListener('click', function() {
    urlInput.style.display = 'block';
    redirectButton.style.display = 'block';
});

redirectButton.addEventListener('click', function() {
    const url = urlInput.value;
    if (url.trim() !== '') {
        window.location.href = url;
    }
});
    document.addEventListener('DOMContentLoaded', function() {
        var addUrlButton = document.getElementById('addUrlButton');
        var urlInput = document.getElementById('urlInput');
        var redirectButton = document.getElementById('redirectButton');

        addUrlButton.addEventListener('click', function() {
            if (urlInput.value !== '') {
                redirectButton.style.display = 'block';
            }
        });

        redirectButton.addEventListener('click', function() {
            // Add your redirection logic here
            // For example, you can use window.location.href = urlInput.value; to redirect to the entered URL
        });
    });
