$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
/* Tabs*/
function openTab(evt, tabName) {
  var i, tabContent, tabLinks;

  // Hide all tab contents and remove 'active' class
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].classList.remove("active");
  }

  // Remove 'active' class from all tab links
  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the clicked tab and add 'active' class
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");

  // Reset vertical tabs if 'main-skills' is selected
  if (tabName === "main-skills") {
    resetVerticalTabs();
  }
}

// Function to open vertical tabs
function openVerticalTab(evt, tabName) {
  var i, tabContent, tabLinks;

  // Get the parent vertical tabs container
  var verticalTabsContent = evt.currentTarget
    .closest(".vertical-tabs")
    .querySelector(".vertical-tabs__content");

  // Hide all vertical tab contents and remove 'active' class
  tabContent = verticalTabsContent.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].classList.remove("active");
  }

  // Remove 'active' class from all vertical tab links
  tabLinks = evt.currentTarget.parentElement.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the clicked vertical tab and add 'active' class
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Function to reset vertical tabs
function resetVerticalTabs() {
  var i, tabContent, tabLinks;

  // Hide all vertical tab contents and remove 'active' class
  tabContent = document
    .querySelector(".vertical-tabs__content")
    .getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].classList.remove("active");
  }

  // Remove 'active' class from all vertical tab links
  tabLinks = document
    .querySelector(".vertical-tabs__list")
    .getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the first vertical tab and add 'active' class
  document
    .querySelector(".vertical-tabs__list .tab-link")
    .classList.add("active");
  document
    .querySelector(".vertical-tabs__content .tab-content")
    .classList.add("active");
  document.querySelector(".vertical-tabs__content .tab-content").style.display =
    "block";
}

// Initialize the first main tab as active on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize main tabs
  document.querySelector(".tab-content").classList.add("active");
  document.querySelector(".tab-content").style.display = "block";
  document.querySelector(".tab-link").classList.add("active");

  // Initialize vertical tabs
  resetVerticalTabs();
});
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const demoLinks = document.querySelectorAll('.demo-link');
  const modal = document.getElementById('portfolioModal');
  const closeModal = document.querySelector('.close');

  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          const filter = button.getAttribute('data-filter');

          portfolioItems.forEach(item => {
              if (filter === 'all' || item.getAttribute('data-category') === filter) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  demoLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const title = link.getAttribute('data-title');
      const date = link.getAttribute('data-date');
      const tech = link.getAttribute('data-tech');
      const role = link.getAttribute('data-role');
      const url = link.getAttribute('data-link');
      const image = link.getAttribute('data-modal-image');  // Use modal image

      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDate').textContent = date;
      document.getElementById('modalTech').textContent = tech;
      document.getElementById('modalRole').textContent = role;
      document.getElementById('modalLink').textContent = url;
      document.getElementById('modalLink').href = url;
      document.getElementById('modalImage').src = image;  // Set modal image source

      modal.style.display = 'block';
    });
  });

  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
