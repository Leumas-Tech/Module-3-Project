// const changingTextAnimation = document.createElement('changingTextAnimation');

// changingTextAnimation.innerHTML = ``;

//     document.body.appendChild(NavigationMenu);



$(document).ready(function () {
    $(function () {
      $(".changingTextAnimation .slides:gt(0)").hide();
      setInterval(function () {
        $(".changingTextAnimation :first-child")
          .fadeOut(2000)
          .next(".slides")
          .fadeIn(2000)
          .end()
          .appendTo(".changingTextAnimation");
      }, 7000);
    });
  });
  