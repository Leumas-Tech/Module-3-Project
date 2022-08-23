const NavigationMenu = document.createElement('NavigationMenu');

NavigationMenu.innerHTML = `<div id="N" class="navMenu">
        <ul class="navigation">
         <li class="active">
             <a href="">
                 <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                 <span class="text">Home</span>
             </a>
         </li>
         <li>
             <a href="#">
                 <span class="icon"><ion-icon name="medkit-outline"></ion-icon></span>
                 <span class="text">Covid Data</span>
             </a>
         </li>
         <li>
             <a href="#">
                 <span class="icon"><ion-icon name="search-outline"></ion-icon></ion-icon></span>
                 <span class="text">Search Facilities</span>
             </a>
         </li>
         <li>
             <a href="#">
                 <span class="icon"><ion-icon name="star-outline"></ion-icon></span>
                 <span class="text">Trending</span>
             </a>
         </li>
         <li>
             <a href="#">
                 <span class="icon"><ion-icon name="medkit-outline"></ion-icon></span>
                 <span class="text">Symptom Checker</span>
             </a>
         </li>
     </ul> 
     </div>`;

    document.body.appendChild(NavigationMenu);





let list = document.querySelectorAll('.navigation li');
function activeNavLink(){
list.forEach((item) => item.classList.remove('active'));
this.classList.add('active');
}
list.forEach((item) => 
item.addEventListener('click', activeNavLink));  


