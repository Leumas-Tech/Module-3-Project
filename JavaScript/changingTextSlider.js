// This will have quotes and display them in a rectangle div that fits the screen.
// While simultaneously automatically scrolling through the quotes, they also have links to take our users where they need to go. 

const textSlideshow = document.createElement('textSlideshow');

textSlideshow.innerHTML = `

<div class="page">
  <div class="text">Scroll for text Animation!</div>
  <div class="text text--random" data-scroll="out" data-splitting="">Random</div>
  <div class="text text--enter" data-scroll="out" data-splitting="">Enter</div>
  <div class="text text--swapsies" data-scroll="out" data-splitting="">Swapsies</div>
  <div class="text text--fading" data-scroll="out" data-splitting="">Fading</div>
  <div class="text text--flipping" data-scroll="out" data-splitting="">Flipping</div>
  <div class="text text--slide" data-scroll="out" data-splitting="">Slide</div>
  <div class="text text--karaoke" data-scroll="out" data-splitting="">Karaoke</div>
  <div class="text text--filling" data-scroll="out" data-splitting="">Filling</div>
  <div class="text">
    <p class="text text--blocks" data-scroll="out" data-splitting="">First</p>
    <p class="text text--blocks" data-scroll="out" data-splitting="">Blocks</p>
    <p class="text text--blocks" data-scroll="out" data-splitting="">Last</p>
  </div>
  <div class="text text--scale" data-scroll="out" data-splitting="">Scale</div>
  <div class="text text--turning" data-scroll="out" data-splitting="">Turning</div>
  <div class="text text--folding" data-scroll="out" data-splitting="">Folding</div>
  <div class="text text--bulge" data-scroll="out" data-splitting="">Bulge</div>
  <div class="text text--perspective" data-scroll="out" data-splitting="">Perspective</div>
  <div class="text text--zipping" data-scroll="out" data-splitting="">Zipping</div>
</div>
<script src="./changingTextSlider.js"></script>
`;

    document.body.appendChild(textSlideshow);


    var _window = window,
    Splitting = _window.Splitting,
    ScrollOut = _window.ScrollOut;
  Splitting();
  ScrollOut({
    targets: ".word",
    scrollingElement: ".page"
  });
      