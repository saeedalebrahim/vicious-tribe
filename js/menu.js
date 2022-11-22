jQuery(document).ready(function () {
  changeHeadLogo();

  var open_btn = jQuery(".menu_btn");
  // var close_btn = $('.close_btn');
  var close_btn = jQuery(".clossse");

  var navigation = jQuery(".navigation");
  var header = jQuery(".header");
  var panels = jQuery(".panel");
  var links = jQuery(".litem");
  var lines = jQuery(".line");
  var data_content = jQuery(".data__content");
  var data_sub = jQuery(".data__sub");
  var footer = jQuery(".footer");

  var tl = new TimelineLite({ paused: true });

  tl.to(panels, 0.5, { width: "50%" })
    .to(
      open_btn,
      0.5,
      { opacity: 0, visibility: "hidden", "z-index": 0 },
      "-=0.5"
    )
    .to(data_content, 0.5, { y: 0, opacity: 1 })
    .to(data_sub, 0.5, { y: 0, opacity: 1 }, "-=0.25")
    .staggerTo(links, 0.3, { y: 0 }, 0.05, "-=0.75")
    .to(lines, 0.5, { opacity: 1 })
    .to(footer, 0.5, { opacity: 1 }, "-=0.5");

  // function openBtn(e){
  //     e.preventDefault();
  //     navigation.removeClass("menu-closed");
  //     navigation.addClass("menu-open");
  //     tl.play();
  // }

  open_btn.on("click", function (e) {
    e.preventDefault();
    navigation.removeClass("menu-closed");
    navigation.addClass("menu-open");
    tl.play();
  });

  close_btn.on("click", function (e) {
    e.preventDefault();
    navigation.removeClass("menu-open");
    navigation.addClass("menu-closed");
    tl.reverse();
  });
});
let oldNum = 0;
function changeHeadLogo() {
  console.log("hereley");
  var number = Math.floor(Math.random() * 5);
  if (number == oldNum) {
    number = Math.floor(Math.random() * 5);
  }
  oldNum = number;
  var image;
  if (number == 0) {
    image = "../assets/logo-head/head1.png";
  } else if (number == 1) {
    image = "../assets/logo-head/head2.png";
  } else if (number == 2) {
    image = "../assets/logo-head/head3.png";
  } else if (number == 3) {
    image = "../assets/logo-head/head4.png";
  } else {
    image = "../assets/logo-head/head5.png";
  }
  jQuery.noConflict()(function ($) {
    $("#logo-head").attr("src", `${image}`);
  });

  var sec = Math.floor(Math.random() * 10) + 4;
  setTimeout(changeHeadLogo, sec * 1000);
}
