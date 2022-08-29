function SearchHospitalData() {

  // Accessing Input element.

  let input = document.getElementById('hospitalSearch').value; // This is user input...
  document.getElementById("HospitalInfo").style.width = "100%";

  // Url for Hospital API
  let url = 'https://us-hospitals.p.rapidapi.com/?name=presbyterian';
  // Regex to remove 
  let regex = /\=[a-zA-Z]+/g;
  // if else statement to check for empty input.
  if (input.length == 0) {
    // alert("Please Enter a Valid Hospital Name.");
  } else {
    url = url.replace(regex, '=' + input);
  }
  console.log(url);
  // API Fetch Code................................
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fdc2bfa2c7msh9bbefe74000b7fbp134f42jsn20bc45c4a096',
      'X-RapidAPI-Host': 'us-hospitals.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then(response => {

      //Gather data from API results, get access to display.
      const myResult = document.getElementById('display');

      let i = 0;
      // set up while loop to go through array of objects.
      while (i <= response.length - 1) {
        let keys = Object.keys(response[i]);
        let value = Object.values(response[i]);
        // console.log(`${keys}:${value}`);
        const section = document.createElement('div');
        const header = document.createElement('h2');
        const text = document.createElement('p');
        header.textContent = keys[i];
        text.textContent = value[i];
        section.append(header,text);
        myResult.appendChild(section);

        i++;
      }

    });

  //   .catch(error => {
  //     let message = document.getElementById('covidInfo');
  //     message.innerHTML = `Error: ${error}`;
  //     // message.append(message.innerHTML);
  // });

}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeData() {
  document.getElementById("HospitalInfo").style.width = "0%";
}