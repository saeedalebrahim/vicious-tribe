// function changeCharacter() {
//   var number = Math.floor(Math.random() * 2);
//   var image;
//   if (number == 0) {
//     image = "../../assets/CP/Footer.png";
//   } else if (number == 1) {
//     image = "../../assets/CP/Logo1.png";
//   }
//   $("#click").css("background", `url(${image})`);
// }
function changeBody() {
    var number = Math.floor(Math.random() * 6);
    var image;
    if (number == 0) {
      image = "../assets/rarity-assets/body/sheldon.png";
    } else if (number == 1) {
      image = "../assets/rarity-assets/body/cyber.png";
    } else if (number == 2) {
      image = "../assets/rarity-assets/body/demarcus.png";
    } else if (number == 3) {
      image = "../assets/rarity-assets/body/mercile.png";
    } else if (number == 4) {
      image = "../assets/rarity-assets/body/ngan.png";
    } else {
      image = "../assets/rarity-assets/body/base.png";
    }
    jQuery.noConflict()(function ($) {
    $("#body").css("background-image", `url(${image})`);
    });
  }
  
  function changeHead() {
    var number = Math.floor(Math.random() * 3);
    var image;
    if (number == 0) {
      image = "../assets/rarity-assets/head/akino.png";
    } else if (number == 1) {
      image = "../assets/rarity-assets/head/nibiru.png";
    } else {
      image = "../assets/rarity-assets/head/base.png";
    }
    jQuery.noConflict()(function ($) {

    $("#head").css("background-image", `url(${image})`);
  });

  }
  
  function changeEye() {
    var number = Math.floor(Math.random() * 3);
    var image;
    if (number == 0) {
      image = "../assets/rarity-assets/eye/akufa.png";
    } else if (number == 1) {
      image = "../assets/rarity-assets/eye/base.png";
    } else {
      image = "../assets/rarity-assets/eye/hoven.png";
    }
    jQuery.noConflict()(function ($) {

    $("#eye").css("background-image", `url(${image})`);
  });

  }
  
  function changeNose() {
    var number = Math.floor(Math.random() * 3);
    var image;
    if (number == 0) {
      image = "../assets/rarity-assets/nose/2.png";
    } else if (number == 1) {
      image = "../assets/rarity-assets/nose/base.png";
    } else {
      image = "../assets/rarity-assets/nose/voldemort.png";
    }
    jQuery.noConflict()(function ($) {

    $("#nose").css("background-image", `url(${image})`);
  });

  }
  
  function changeMouth() {
    var number = Math.floor(Math.random() * 3);
    var image;
    if (number == 0) {
      image = "../assets/rarity-assets/mouth/cinko.png";
    } else if (number == 1) {
      image = "../assets/rarity-assets/mouth/base.png";
    } else {
      image = "../assets/rarity-assets/mouth/shaka.png";
    }
    jQuery.noConflict()(function ($) {

    $("#mouth").css("background-image", `url(${image})`);
  });

  }
  
  function changeAccessory() {
    var number = Math.floor(Math.random() * 3);
    var image;
    if (number == 0) {
      image = "../assets/rarity-assets/accessory/earing.png";
    } else if (number == 1) {
      image = "../assets/rarity-assets/accessory/glass.png";
    } else {
      image = "../assets/rarity-assets/accessory/neckless.png";
    }
    jQuery.noConflict()(function ($) {

    $("#accessory").css("background-image", `url(${image})`);
  });

  }
  