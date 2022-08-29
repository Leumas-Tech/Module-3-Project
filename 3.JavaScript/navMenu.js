// WE ENDED UP HAVING PROBLEMS WITH THIS!

// WHILE IT MAY WORK WELL AS A FILTER, IT WILL NOT FUNCTION IN BETWEEN PAGES WHILE IT IS A TEMPLATE

// SO WE HAD TO UNMAKE THIS A TEMPLATE AND PUT IT ONTO EVERY PAGE, ADDING LIKE 60 LINES TO EVERY PAGE, WHICH IS 300 LINES OF CODE TO THE PAGE


// NEVERMIND, WE CAN USE IT AS A TEMPLATE FOR 4/5 OF THE PAGES, ONE FOR THE HOME PAGE, AND THE OTHER AS A TEMPLATE THIS ONE IN THE TEMPLATER WILL HAVE THE DOUBLE DOTS BEFORE THE FILE PATH NAME IN ORDER TO BROWSE ALL FOLDERS, IDK IM NOIT REALLY SURE WHAT .. WAS, RYAN WOULD BE THE ONE TO EXPLAIN THAT BUT IT WORKED AND IM REALLY HAPPY!



const NavigationMenu = document.createElement('NavigationMenu');

NavigationMenu.innerHTML = `<div id="N" class="navMenu">
        <ul class="navigation">
         <li>
             <a href="../index.html">
                 <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                 <span class="text">Home</span>
             </a>
         </li>
       
         <li>
             <a href="../2.html/searchNearestHospital.html">
                 <span class="icon"><ion-icon name="navigate-outline"></ion-icon></ion-icon></span>
                 <span class="text">Search Facilities</span>
             </a>
         </li>
         <li>
             <a href="../2.html/covidDataSearchPage.html">
                 <span class="icon"><ion-icon name="search-outline"></ion-icon></span>
                 <span class="text">Trending</span>
             </a>
         </li>
           <li>
             <a href="../2.html/SymptomChecker.html">
                 <span class="icon"><ion-icon name="bandage-outline"></ion-icon></span>
                 <span class="text">Symptoms</span>
             </a>
         </li>
         <li>
             <a href="../2.html/AboutCovidAPI.html">
                 <span class="icon"><ion-icon name="people-circle-outline"></ion-icon></span>
                 <span class="text">Symptom Checker</span>
             </a>
         </li>
     </ul> 
     </div>`;

    document.body.appendChild(NavigationMenu);
