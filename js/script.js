var textWrapper = document.querySelector(".header__main2-text");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".header__main2-text .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  })
  .add({
    targets: ".header__main2-text",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

$("#send__button").click(function() {
  Swal.fire(
    "Ma'lumotingiz yuborildi!",
    "24soat ichida sizga qo'ng'iroqni amalga oshiramiz!",
    "success"
  );
});

$('.section__two-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});
