const floatingTileBackground = document.createElement('floatingTileBackground');

floatingTileBackground.innerHTML = ` <!-- Every page so we can have the animated background, we add a class area to a main and class circles to a div just like follows. And dont forget a bunch of LIs at the bottom. The link to the CSS that i Got this from is here. https://alvarotrigo.com/blog/animated-backgrounds-css/ -->
<!-- I am also using Bootstrap 🙂 -->


  <div class="circles">

    <!-- This is for the animated background -->
    <li class="background" id="color2"></li>
    <li class="background"></li>
    <li class="background"></li>
    <li class="background" id="color2"></li>
    <li class="background" id="color2"></li>
    <li class="background"></li>
    <li class="background"></li>
    <li class="background" id="color2"></li>
    <li class="background"></li>
    <li class="background" id="color2"></li>
  </div>


`;

    document.body.appendChild(floatingTileBackground);