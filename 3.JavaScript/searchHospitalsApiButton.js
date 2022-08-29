function SearchHospitalData() {
  // Accessing Input element.

  let input = document.getElementById("hospitalSearch").value; // This is user input...
  if (input.length == 0) {
    // keep window closed if user input is empty....
    alert("Please Enter a Valid Hospital Name.");
  } else { // With user input search for hospital with API................
    document.getElementById("HospitalInfo").style.width = "100%";
    // Url for Hospital API
    let url = "https://us-hospitals.p.rapidapi.com/?name=presbyterian";
    // Regex to remove and replace back section of url for search criteria.
    let regex = /\=[a-zA-Z]+/g;
    url = url.replace(regex, "=" + input);
    console.log(url);
    // API Fetch Code................................
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fdc2bfa2c7msh9bbefe74000b7fbp134f42jsn20bc45c4a096",
        "X-RapidAPI-Host": "us-hospitals.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        //Gather data from API results, get access to display.
        const myResult = document.getElementById("display");

        let i = 0;
        // set up while loop to go through array of objects.
        while (i <= response.length - 1) {
          let keys = Object.keys(response[i]);
          let value = Object.values(response[i]);
          // console.log(`${keys}:${value}`);
          const section = document.createElement("div");
          const header = document.createElement("h2");
          header.setAttribute("id", "hospitalHeader");
          const text = document.createElement("p");
          header.textContent = keys[i];
          text.textContent = value[i];
          section.append(header, text);
          myResult.appendChild(section);

          i++;
        }
      });

    
    // .catch(error => {
    //   let message = document.getElementById('covid-Info');
    //   message.innerHTML = `Error: ${error}`;
    //   // message.append(message.innerHTML);
    // });
  }
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeData() {
  document.getElementById("HospitalInfo").style.width = "0%";
  // Accessing the elements created to delete on window close.
  const myInfo = document.getElementById("display");
  myInfo.textContent = "";
  const input = document.getElementById("hospitalSearch");
  input.value = "";
  
  // Remove elements
}
