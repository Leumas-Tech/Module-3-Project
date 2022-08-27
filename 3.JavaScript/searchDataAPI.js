function SearchCovidData() {

  // Accessing input element
  let browse = document.getElementById("browse"); //This is the div that contains user input.
  let input = document.getElementById('covidSearch').value; // This is the user input.
  document.getElementById("CovidInfo").style.width = "100%";
  const contentArea = document.getElementById("overlay - content"); // display div


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
      //Gather data received from API, Get access to Table.
      let yourResult = document.getElementById('covid-Info');
      let keys = Object.keys(response);
      let values = Object.values(response);
      //Create a Table Row inside Table for Incoming Data
      let trHeader = document.createElement('tr');
      trHeader.setAttribute('id', 'Header');
      //Loop Through Keys in API Object
      for (let key of keys) {
        //Create a Table Header for each Key
        let th = document.createElement('th');
        //The regex removed the unwanted characters behind the Key
        let newKey = key.replace(/_\w+$/g, '');
        th.textContent = `${newKey}`;
        //Appended Table Header and Row
        trHeader.appendChild(th);
        yourResult.appendChild(trHeader);
      }
      //Create a Table Row inside Table for Incoming Data 
      let trData = document.createElement('tr');
      trData.setAttribute('id', 'Data');
      //Loop through Values in API Object
      for (let value of values) {
        let td = document.createElement('td');
        //Check If value is less than 0
        if (value <= 0) {
          value = 'N/A';
          td.textContent = `${value}`; // Set values to Table Data Element
          trData.appendChild(td);
          yourResult.appendChild(trData);
        } else {
          td.textContent = `${value}`; // Set values to Table Data Element
          trData.appendChild(td);
          yourResult.appendChild(trData);
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
}