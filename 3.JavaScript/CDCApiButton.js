const CDCAPI = document.createElement('CDCAPI');

CDCAPI.innerHTML = `
<div onclick="openNav()"class="floater">

    <a href="#"  class="float" id="CDCBTN" class="overlay">
    <ion-icon class ="CDCicon" name="medkit-outline">
    </ion-icon>
    </a>
    
</div>

<div id="myNav" class="overlay">

  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>


  <div class="overlay-content" id="cdcInfo">
    <p>Weekly CDC updates</p>

  </div>

</div>

`;

document.body.appendChild(CDCAPI);


  let CDCbutton = document.getElementById("CDCBTN");

  CDCbutton.addEventListener("click", function(){

      const display = document.getElementById('myNav');
      const info = document.getElementById('cdcInfo');
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'fdc2bfa2c7msh9bbefe74000b7fbp134f42jsn20bc45c4a096',
                    'X-RapidAPI-Host': 'cdc-disease-or-condition-of-the-week.p.rapidapi.com'
                }
            };

            fetch('https://cdc-disease-or-condition-of-the-week.p.rapidapi.com/', options)
                .then(response => response.json())
                .then(response => {
                  let key = Object.keys(response);
                  let value = Object.values(response);
                  //  This creates the H1 element to Append the Title of the CDC condition.
                  let heading = document.createElement('h1');
                  heading.setAttribute('id', 'title');
                  heading.innerHTML = value[0];
                  //  This creates the Paragraph element to Append the Summary of the CDC condition.
                  let summary = document.createElement('p');
                  summary.setAttribute('id', 'summary');
                  summary.innerHTML = value[1];
                  //  This creates the Link element to send users to the CDC's page on current condition. 
                  let url = document.createElement('a');
                  url.setAttribute('id', 'link');
                  url.setAttribute('href', value[2]);
                  url.setAttribute('target', '_blank');
                  url.innerHTML = "CDC Link Here!";
                  // Appending all information to the HTML.
                  info.appendChild(heading);
                  info.appendChild(summary);
                  info.appendChild(url);
                  console.log(response);
                })
                .catch(err => console.error(err));

  });
// }

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  // Accessing HTML created for API, 

  const heading = document.getElementById('title');
  const summary = document.getElementById('summary');
  const url = document.getElementById('link');
  // CLoses window.

  // This code will delete elements when window is closed.
  heading.remove();
  summary.remove();
  url.remove();
}