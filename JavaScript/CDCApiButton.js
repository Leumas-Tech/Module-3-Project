const CDCAPI = document.createElement('CDCAPI');

CDCAPI.innerHTML = `
<div onclick="openNav()"class="floater">

    <a href="#"  class="float" id="CDCBTN myNav"class="overlay">
    <ion-icon class ="CDCicon" name="medkit-outline">
    </ion-icon>
    </a>
    
</div>

<div id="myNav" class="overlay">

  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>


  <div class="overlay-content">
<h1 class="CDCtitle">Name of disease from API <\h1>

<p class="CDCinfo">a paragraph of text that gives in details about what the disease is, i am making this a super duper long sentence so it filles up because i cant do lorem here and i need words but dont know what to say.... horse radish lorem lorem lorem lorem lorem oorem lorem lorem lorem olem lorem loerm lorem lorem lorem lorem lolem lorem lorem lorem lorem lorem lorem lorem loren lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loer with 
if we save this, and instead of paragraphs.. we added anchor tags, this could become a pop up dropDown menu as well </p>

  </div>

</div>


`;

    document.body.appendChild(CDCAPI);

function CDCweekly(){
    
    let CDCbutton = document.getElementById("CDCBTN");

   CDCbutton.addEventListener("click", function(){

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
            let info = document.getElementById('cdcInfo');
            let heading = document.createElement('h1');
            heading.innerHTML = value[0];
            let summary = document.createElement('p');
            summary.innerHTML = value[1];
            let url = document.createElement('link');
            url.setAttribute('href', value[2]);
            info.appendChild(heading);
            info.appendChild(summary);
            info.appendChild(url);
        })
        .catch(err => console.error(err));

   });
}

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
