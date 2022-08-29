function SearchCovidData() {

  // Accessing input element

  let input = document.getElementById('covidSearch').value; // This is the user input.
  document.getElementById("CovidInfo").style.width = "100%";

  // This is the URL for the API 
  let url = 'https://covid-19-tracking.p.rapidapi.com/v1/world';
  // This is the regex to replace end of url string.
  let regex = /\w+$/g;
  // If-else statement to check for empty input.
  if (input.length == 0) {
    console.log(url);
  } else {
    // Replacing end of url string with customer input.
    url = url.replace(regex, input);
    // console.log(url);
  }
  // This is the API Fetch Code.............
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fdc2bfa2c7msh9bbefe74000b7fbp134f42jsn20bc45c4a096',
      'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
    }
  };
  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      //Gather data received from API, Get access to div.
      let yourResult = document.getElementById('covid-Info');
      let keys = Object.keys(response);
      let values = Object.values(response);
      // create an empty array to push created elements with Key information.
      let divArr = [];
      for (let key of keys) {
        // Create a div to display the Key
        let displayDiv = document.createElement("div");
        displayDiv.setAttribute("id", "covidDisplayDiv");
        // The key will be displayed in an H2 element.
        let heading = document.createElement("h2");
        //The regex removed the unwanted characters behind the Key
        let newKey = key.replace(/_\w+$/g, "");
        // Set the innerHTML as the Key Data
        heading.innerText = `${newKey}`;
        //Appended Button
        displayDiv.append(heading);
        yourResult.appendChild(displayDiv);
        divArr.unshift(displayDiv);
        //
      }
      // Loop through Values in API Object
      for (let value of values) {
        //Check If value is less than 0
        let myValue = divArr.pop();
        let myInfo = document.createElement("p");
        myInfo.setAttribute("class", "myInfo");
        if (value <= 0) {
          value = "N/A";
          myInfo.innerHTML = `${value}`; // Set value to paragraph element.
          myValue.append(myInfo);
          yourResult.appendChild(myValue);
        } else {
          myInfo.innerHTML = `${value}`; // Set values to paragraph Element.
          myValue.append(myInfo);
          yourResult.appendChild(myValue);
        }
      }
      console.log(response);
    })
    .catch(error => {
      let message = document.getElementById('covid-Info');
      message.innerHTML = `Error: ${error}`;
      // message.append(message.innerHTML);
    });
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeCovidData() {
  document.getElementById("CovidInfo").style.width = "0%";
  // Accessing the elements created to delete on window close.
  const myInfo = document.getElementById('covid-Info');
  myInfo.textContent = "";
  const mySearch = document.getElementById('covidSearch');
  mySearch.value = "";
  // Remove elements

}