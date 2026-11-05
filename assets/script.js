(function ($) {
  "use strict";

  /*------------------------------------------
     product slider
  -------------------------------------------*/
  if ($(".product-active").length) {
    $(".product-active").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 30,
      loop: true,
      autoplayHoverPause: true,
      dots: true,
      nav: true,
      responsive: {
        0: {
          items: 2,
        },

        350: {
          items: 2,
          margin: 10,
        },
        500: {
          items: 2,
          margin: 10,
        },

        768: {
          items: 3,
          margin: 10,
        },
        992: {
          items: 3,
          margin: 10,
        },

        1200: {
          items: 3,
        },

        1400: {
          items: 3,
        },
      },
    });
  }

  if ($(".testimonial-active").length) {
    $(".testimonial-active").owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },

        350: {
          items: 1,
        },
        500: {
          items: 1,
        },

        768: {
          items: 1,
        },
        992: {
          items: 1,
        },

        1200: {
          items: 1,
        },

        1400: {
          items: 1,
        },
      },
    });
  }

  $(".cart-info-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 300,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      375: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
  });

  if ($(".mobileView").length) {
    $(".mobileView").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      smartSpeed: 300,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          margin: 10,
        },
        375: {
          items: 2,
          margin: 10,
        },
        500: {
          items: 2,
          margin: 10,
        },
        768: {
          items: 2,
          margin: 10,
        },
        1024: {
          items: 1,
        },
      },
    });
  }
  $(document).ready(function () {
    $(".tab-link").click(function () {
      var tabID = $(this).attr("data-tab");

      $(".tab-link").removeClass("active");
      $(".tab-content").removeClass("active");

      $(this).addClass("active");
      $("#" + tabID).addClass("active");
    });

    $(".tab-link:first").click();
  });

  // document.addEventListener("DOMContentLoaded", function () {
  //   const swiper = new Swiper(".mySwiper", {
  //     slidesPerView: "auto",
  //     spaceBetween: 15,
  //     loop: true,
  //     autoplay: {
  //       delay: 3500,
  //       disableOnInteraction: false,
  //     },
  //     breakpoints: {
  //       640: {
  //         slidesPerView: 2,
  //       },
  //       992: {
  //         slidesPerView: 4,
  //       },
  //       1200: {
  //         slidesPerView: 6,
  //       },
  //     },
  //   });
  // });

  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      centeredSlides: false,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      loopAdditionalSlides: 3,
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 15,
      freeMode: false,
      direction: "horizontal",
      threshold: 10,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      },
      on: {
        init: function () {
          handleVideoPlayback(this);
        },
        slideChangeTransitionEnd: function () {
          handleVideoPlayback(this);
        },
      },
    });

    function handleVideoPlayback(swiperInstance) {
      const allVideos = document.querySelectorAll(".slide-video");

      allVideos.forEach((video) => {
        video.pause();
        video
          .closest(".video-wrapper")
          .querySelector(".playOrPause").textContent = "▶️";
      });

      const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
      const activeVideo = activeSlide.querySelector(".slide-video");
      const activeBtn = activeSlide.querySelector(".playOrPause");

      if (activeVideo) {
        activeVideo
          .play()
          .then(() => {
            activeBtn.textContent = "";
          })
          .catch((err) => {
            console.warn("Autoplay failed:", err);
          });
      }
    }

    document.querySelectorAll(".playOrPause").forEach((btn) => {
      btn.addEventListener("click", function () {
        const video =
          this.closest(".video-wrapper").querySelector(".slide-video");

        const iconButton =
          this.closest(".video-wrapper").querySelector(".play-pause-btn");
        iconButton.classList.toggle("active");

        if (video.paused) {
          document.querySelectorAll(".slide-video").forEach((v) => {
            v.pause();
            v
              .closest(".video-wrapper")
              .querySelector(".slide-video").textContent = "▶️";
          });

          video.play();
          this.textContent = "⏸️";
        } else {
          video.pause();
          this.textContent = "▶️";
        }
      });
    });
  });
})(window.jQuery);

document.addEventListener("DOMContentLoaded", () => {
  const openBtns = document.querySelectorAll(".openBtns");
  const closeBtn = document.querySelector(".newsletter-close-btn");
  const myElement = document.querySelector(".newsletter-popup-area-section");

  // Check if elements exist before adding event listeners
  if (myElement) {
    openBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        myElement.classList.add("active");
      });
    });
  }

  if (closeBtn && myElement) {
    closeBtn.addEventListener("click", () => {
      myElement.classList.remove("active");
    });
  }
});

// Popup functionality

// $(document).ready(function () {
//   var oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
//   var popupClosedTime = localStorage.getItem("popupClosedTime");

//   function showPopup() {
//     $("#myPopup1").addClass("active"); // Add 'active' class
//     // $("#overlay").show();
//   }

//   function hidePopup() {
//     $("#myPopup1").removeClass("active"); // Remove 'active' class
//     // $("#overlay").hide();
//     // Store the time when the popup was closed
//     localStorage.setItem("popupClosedTime", Date.now());
//   }

//   // Check if the popup should be shown
//   if (!popupClosedTime || Date.now() - popupClosedTime > oneDay) {
//     // Show the popup after 1 minute
//     setTimeout(showPopup, 60000); // 60000 ms = 1 minute
//   }

//   // Close button click event
//   $("#closePopup").click(function () {
//     hidePopup();
//   });
// });

// faq

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const accordionItem = this.parentElement;
    const content = accordionItem.querySelector(".accordion-content");
    if (accordionItem.classList.contains("active")) {
      accordionItem.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      document
        .querySelectorAll(".accordion-item.active")
        .forEach((activeItem) => {
          activeItem.classList.remove("active");
          activeItem.querySelector(".accordion-content").style.maxHeight = null;
        });
      accordionItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Add to Cart functionality

function addToCart(id, quantity) {
  console.log("Adding item to cart:", id, quantity);
  // $(".addToCart").on("click", function (e) {
  // e.preventDefault();

  var productId = $("#variantId").val();
  var quantity = $("#quantity").val();

  $.ajax({
    type: "POST",
    url: "/cart/add",
    dataType: "json",
    data: {
      id: id,
      quantity: quantity,
    },
    success: function (data) {
      console.log("Item added to cart:", data);
      // Update cart count
      fetch(window.Shopify.routes.root + "cart.js")
        .then((response) => response.json())
        .then((cartData) => {
          console.log("Updated cart data:", cartData);
          const price = cartData?.total_price / 100;
          // if (price >= 50) {
          //   console.log("Price is greater than or equal to 50");
          //   fetch("/cart.js")
          //     .then((res) => res.json())
          //     .then((cart) => {
          //       console.log("cart=====", cart);
          //       const hasGift = cart.items.some(
          //         (item) => item.variant_id == "50160445227350"
          //       );
          //       if (!hasGift) {
          //         const response = fetch("/cart/add.js", {
          //           method: "POST",
          //           headers: { "Content-Type": "application/json" },
          //           body: JSON.stringify({
          //             id: "50160445227350",
          //             quantity: 1,
          //           }),
          //         })
          //           .then((res) => res.json())
          //           .then(() => {
          //             console.log("Gift added!");
          //             window.location.reload();
          //           });
          //       } else {
          //         console.log("Gift already in cart");
          //       }
          //     });
          // } else {
          //   console.log("Price is less than 50");
          //   // remove a product in cart
          //   fetch("/cart.js")
          //     .then((res) => res.json())
          //     .then((cart) => {
          //       console.log("cart=====", cart);
          //       const hasGift = cart.items.some(
          //         (item) => item.variant_id == "50160445227350"
          //       );
          //       if (hasGift) {
          //         const response = fetch("/cart/update.js", {
          //           method: "POST",
          //           headers: { "Content-Type": "application/json" },
          //           body: JSON.stringify({
          //             updates: { 50160445227350: 0 },
          //           }),
          //         })
          //           .then((res) => res.json())
          //           .then(() => {
          //             console.log("Gift removed!");
          //             window.location.reload();
          //           });
          //       } else {
          //         console.log("Gift already removed");
          //       }
          //     });
          //   location.reload();
          // }
        });
    },
    error: function (error) {
      console.error("Error adding item to cart:", error);
    },
  });
  // });
}

$(document).ready(function () {
  $(".acountMainIcon, .accountDropdown").hover(
    function () {
      // Show the dropdown when hovering on either .acountMainIcon or .accountDropdown
      $(".accountDropdown").show();
    },
    function () {
      // Hide the dropdown when moving the mouse away from both .acountMainIcon and .accountDropdown
      $(".accountDropdown").hide();
    }
  );
});
$(document).ready(function () {
  $(".sliderBlck").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
  });
});
$(document).ready(function () {
  $(".readMore").on("click", function (e) {
    e.preventDefault();
    if ($("#longText").css("display") === "none") {
      $("#shortText").css("display", "none");
      $("#longText").css("display", "block");
      $(".readMore").css("display", "none");
      $(".readLess").css("display", "block");
      // $(this).text("Read Less");
    } else {
      $("#shortText").css("display", "block");
      $("#longText").css("display", "none");
      $(".readMore").css("display", "block");
      $(".readLess").css("display", "none");
      // $(this).text("Read More");
    }
  });

  $(".readLess").on("click", function (e) {
    e.preventDefault();
    if ($("#longText").css("display") === "none") {
      $("#shortText").css("display", "none");
      $("#longText").css("display", "block");
      $(".readMore").css("display", "none");
      $(".readLess").css("display", "block");
      // $(this).text("Read Less");
    } else {
      $("#shortText").css("display", "block");
      $("#longText").css("display", "none");
      $(".readMore").css("display", "block");
      $(".readLess").css("display", "none");
      // $(this).text("Read More");
    }
  });
});

$(document).ready(function () {
  $(".dropdownMenu").on("click", function () {
    // Select the closest `.widget` and find the `.heightMenu` inside it
    var $ul = $(this).closest(".widget").find(".heightMenu");

    // Toggle the active class to show/hide the menu
    $ul.toggleClass("active");

    // Show/hide the downSvg and upSvg based on menu visibility
    if ($ul.hasClass("active")) {
      $(this).closest(".widget-title").find(".downSvg").css("display", "none");
      $(this).closest(".widget-title").find(".upSvg").css("display", "block");
    } else {
      $(this).closest(".widget-title").find(".downSvg").css("display", "block");
      $(this).closest(".widget-title").find(".upSvg").css("display", "none");
    }
  });
});

var BASE_URL = "https://review.orustudio.com";

document.addEventListener("DOMContentLoaded", () => {
  const targetElement = document.querySelector(".cartButtonSticky"); // your sticky element
  const targetClass = "scrolledCart"; // class to add when sticky
  const scrollThreshold = 200; // show after scrolling 200px

  if (targetElement) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // when user scrolls near the bottom (within 100px)
      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;

      if (scrollTop >= scrollThreshold && !nearBottom) {
        // show sticky button when scrolled enough but not bottom
        targetElement.classList.add(targetClass);
        targetElement.style.display = "flex";
      } else {
        // hide sticky button (top or bottom)
        targetElement.classList.remove(targetClass);
        targetElement.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const targetElement = document.querySelector(".offer-area"); // your mobile sticky element
  const targetClass = "scrolledCart"; // class to add when visible
  const scrollThreshold = 200; // show after scrolling 200px
  const bottomOffset = 100; // how close to bottom before hiding (in px)

  // Only run this on mobile devices (max width 768px)
  if (window.innerWidth <= 768 && targetElement) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const nearBottom =
        scrollTop + windowHeight >= documentHeight - bottomOffset;

      if (scrollTop >= scrollThreshold && !nearBottom) {
        // show sticky area
        targetElement.classList.add(targetClass);
        targetElement.style.display = "block";
      } else {
        // hide at top or near bottom
        targetElement.classList.remove(targetClass);
        targetElement.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const reviewElements = document.querySelectorAll(".reviewCount");

  if (reviewElements.length === 0) {
    console.warn("No .reviewCount elements found.");
    return;
  }

  reviewElements.forEach((el) => {
    const productId = el.dataset.productid;
    if (productId) {
      updateReviewCount(el, productId); // Pass the element and product ID
    } else {
      console.warn("Missing data-productId on element:", el);
    }
  });
});

// Fetch and update review count for a specific product and element
async function updateReviewCount(element, productId) {
  try {
    const response = await fetch(`${BASE_URL}/api/avgrating`, {
      method: "POST",
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.statusText}`);
    }

    const res = await response.json();
    const reviews = res.reviews || [];

    element.innerHTML = `${reviews.length} review${
      reviews.length !== 1 ? "s" : ""
    }`;
  } catch (error) {
    console.error(`Failed to load reviews for product ${productId}:`, error);
  }
}

const utilityBar = document.querySelector(".utility-bar");
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll <= 0) {
    // At the very top -> show
    utilityBar.classList.remove("hide");
  } else {
    // Any scroll down or up -> hide
    utilityBar.classList.add("hide");
  }
});
window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll <= 0) {
    // At the very top -> show
    header.classList.remove("scrollHeader");
  } else {
    // Any scroll down or up -> hide
    header.classList.add("scrollHeader");
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const currentHostname = window.location.hostname;

//   // Define country-specific redirects dynamically
//   const redirects = {
//     NL: `https://nl.${currentHostname}`,
//     DE: `https://de.${currentHostname}`,
//     FR: `https://fr.${currentHostname}`,
//   };

//   console.log("Current Hostname:", currentHostname);

//   // Check for redirection status in localStorage
//   const lastRedirectTime = localStorage.getItem("redirectedAt");
//   const oneHourInMillis = 60 * 1000;

//   // Determine if redirection should occur
//   const shouldRedirect =
//     !lastRedirectTime ||
//     Date.now() - parseInt(lastRedirectTime, 10) > oneHourInMillis;

//   if (shouldRedirect) {
//     // Execute redirection only if the user is on the default domain
//     if (currentHostname === "houseofmabango.com") {
//       fetch("https://www.cloudflare.com/cdn-cgi/trace")
//         .then((response) => response.text())
//         .then((data) => {
//           const countryMatch = data.match(/loc=(\w{2})/); // Matches the country code
//           if (countryMatch) {
//             const userCountry = countryMatch[1];
//             console.log("User Country:", userCountry);

//             // Redirect to the country-specific URL or fallback to the default
//             const targetURL =
//               redirects[userCountry] || `https://${currentHostname}`;
//             if (targetURL !== window.location.href) {
//               console.log(`Redirecting to: ${targetURL}`);
//               localStorage.setItem("redirectedAt", Date.now().toString()); // Set the timestamp
//               window.location.href = targetURL;
//             }
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching location:", error);
//         });
//     } else {
//       console.log("Redirection skipped. Already on a country-specific domain.");
//     }
//   } else {
//     console.log(
//       "Redirection already performed within the last hour. Skipping."
//     );
//   }
// });
