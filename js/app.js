$(document).ready(function () {
  $("#profile_ripple").ripples({
    resolution: 512,
    dropRadius: 10,
  });

  const bars = document.querySelectorAll(".progress_bar");

  bars.forEach((bar, index) => {
    let percentage = bar.dataset.percent;

    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });

  //  counter_wrapper

  const counters = document.querySelectorAll(".counter");

  function runCounter() {
    counters.forEach((count, index) => {
      count.innerText = 0;
      let target = +count.dataset.counter;
      let displayedCount = 0;

      function countIt() {
        if (displayedCount < target) {
          displayedCount = displayedCount + 1;
          count.innerText = displayedCount;
          setTimeout(countIt, 100);
        } else {
          count.innerText = displayedCount;
        }
      }

      countIt();
    });
  }

  //    it will detect the scroll event AND then counting animation will happene

  let counterSection = document.querySelector(".counter_wrapper");

  let options = {
    rootMargin: "0px 0px -100px 0px",
  };

  const sectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      runCounter();
    }
  }, options);

  sectionObserver.observe(counterSection);

  // image filter in Works and Review section

  let portfolioWrapper = $(".portfolio_wrapper");
  // let magnific = $('.magnific');
  let tabLinks = document.querySelectorAll(".tabs a");
  console.log(tabLinks);

  

  tabLinks.forEach((links, index) => {
    let filterTab = links.dataset.filter;

    links.addEventListener("click", (e) => {
      e.preventDefault();
      portfolioWrapper.isotope({
        filter: filterTab,
        layoutMode: "masonry",
        animationOptions: {
          duration: "750",
          easing: "linear",
        },
      });

      tabLinks.forEach((links) => {
        links.classList.remove("active");
      });

      e.target.classList.add("active");
    });
  });

  // initialize isotope

  portfolioWrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: "750",
      easing: "linear",
    },
  });

  // magnific popup for image gallery

  $(".popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
    },
  });

  // slick slider 

  $('.slider').slick({
     arrows:false,
     autoplay:true
  })

  // aos animation 
  AOS.init({
    duration:300,
    
  })
});
