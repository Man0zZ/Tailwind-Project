// NAVBAR
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".sidenav__menu");
  const navLists = document.querySelectorAll(".nav__list li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    //   Animate Links
    navLists.forEach((list, index) => {
      if (list.style.animation) {
        list.style.animation = "";
      } else {
        list.style.animation = `navListFade 0.3s ease forwards ${
          index / 15 + 0.3
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// // Dropdown
// let dropdownBtn = document.querySelectorAll(".dropdown");
// dropdownBtn.forEach((dropdown) => {
//   dropdown.addEventListener("click", () => {
//     dropdown.classList.toggle("active");
//   });
// });
// // Close the dropdown if the user clicks outside of it
// window.addEventListener("click", (event) => {
//   dropdownBtn.forEach((dropdown) => {
//     if (!event.target.matches(".dropbtn")) {
//       dropdown.classList.remove("active");
//     }
//   });
// });

// Delete search Input
const closeBtn = document.querySelector('.close')
closeBtn.addEventListener('click', () => {
  document.querySelector(".input").value = "";
})


document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

// Filters
const filterBtn = document.querySelector ('.btn-primary')
const filters = document.querySelector ('.filter__content')

filters.style.display = "none"

filterBtn.addEventListener('click', () => {
  if (filters.style.display === "inline-block") {
    filters.style.display = "none";
  } else {
    filters.style.display = "inline-block";
  }
})




