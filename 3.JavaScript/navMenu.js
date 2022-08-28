const NavigationMenu = document.createElement('NavigationMenu');

NavigationMenu.innerHTML = `<div id="N" class="navMenu">
        <ul class="navigation">
         <li>
             <a href="./index.html">
                 <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                 <span class="text">Home</span>
             </a>
         </li>
       
         <li>
             <a href="./2.html/searchNearestHospital.html">
                 <span class="icon"><ion-icon name="navigate-outline"></ion-icon></ion-icon></span>
                 <span class="text">Search Facilities</span>
             </a>
         </li>
         <li>
             <a href="./2.html/covidDataSearchPage.html">
                 <span class="icon"><ion-icon name="search-outline"></ion-icon></span>
                 <span class="text">Trending</span>
             </a>
         </li>
           <li>
             <a href="./2.html/SymptomChecker.html">
                 <span class="icon"><ion-icon name="bandage-outline"></ion-icon></span>
                 <span class="text">Symptoms</span>
             </a>
         </li>
         <li>
             <a href="./2.html/AboutCovidAPI.html">
                 <span class="icon"><ion-icon name="people-circle-outline"></ion-icon></span>
                 <span class="text">Symptom Checker</span>
             </a>
         </li>
     </ul> 
     </div>`;

    document.body.appendChild(NavigationMenu);
