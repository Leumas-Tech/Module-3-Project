const HospitalAPI = document.createElement('HospitalAPI');

CDCAHospitalAPIPI.innerHTML = `
<div onclick="openNav()"class="floater">

    <a href="#"  class="float" id="CDCBTN myNav"class="overlay">
    <ion-icon class ="CDCicon" name="medkit-outline">
    </ion-icon>
    </a>
    
</div>

<div id="myNav" class="overlay">

  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>


  <div class="overlay-content">
<h1 class="CDCtitle">Name of Hospital Searched For <\h1>

<p class="CDCinfo">Here we can create a mini glass display that will neatly display all hospitals with an address, once address is linked, we can add a google maps API.</p>

  </div>

</div>


`;

    document.body.appendChild(HospitalAPI);
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      
      /* Close when someone clicks on the "x" symbol inside the overlay */
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }