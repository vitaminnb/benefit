var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    /*autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },*/
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  var swiper = new Swiper(".secondSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    /*autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },*/
    /*pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },*/
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 24,
    centeredSlides: false,

    breakpoints: {
    
      
      
        900: {
          slidesPerView: 3,  //브라우저가 768보다 클 때
          spaceBetween: 10,
        },

      },
   
    
});

