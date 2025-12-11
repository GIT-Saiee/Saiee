// Recalculate heights of all parent dropdown menus
const updateParentHeights = (element) => {
  let parent = element.parentElement;
  while (parent) {
    if (parent.classList.contains('dropdown-menu')) {
      // Force recalculation by temporarily setting to auto
      parent.style.height = 'auto';
      const newHeight = parent.scrollHeight;
      parent.style.height = `${newHeight}px`;
      parent = parent.parentElement?.parentElement;
    } else {
      break;
    }
  }
};

// Toggle the visibility of a dropdown menu
const toggleDropdown = (dropdown, menu, isOpen) => {
  dropdown.classList.toggle("open", isOpen);
  
  if (isOpen) {
    // Set height to auto first to get accurate scrollHeight
    menu.style.height = 'auto';
    const height = menu.scrollHeight;
    menu.style.height = '0px';
    // Force reflow
    menu.offsetHeight;
    menu.style.height = `${height}px`;
  } else {
    menu.style.height = '0px';
  }
  
  // Recalculate parent heights after a brief delay
  setTimeout(() => {
    updateParentHeights(dropdown);
  }, 250);
};

// Close all open dropdowns
const closeAllDropdowns = () => {
  document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
    const menu = openDropdown.querySelector(":scope > .dropdown-menu");
    toggleDropdown(openDropdown, menu, false);
  });
};

// Attach click event to all dropdown toggles
document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const dropdown = dropdownToggle.closest(".dropdown-container");
    const menu = dropdown.querySelector(":scope > .dropdown-menu"); // Only direct child
    const isOpen = dropdown.classList.contains("open");
  
    toggleDropdown(dropdown, menu, !isOpen); // Toggle current dropdown visibility
  });
});

// Attach click event to sidebar toggle buttons
document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
  button.addEventListener("click", () => {
    closeAllDropdowns(); // Close all open dropdowns
    document.querySelector(".sidebar").classList.toggle("collapsed"); // Toggle collapsed class on sidebar
  });
});

// Collapse sidebar by default on small screens
if (window.innerWidth <= 1024) document.querySelector(".sidebar").classList.add("collapsed");

// Close sidebar when clicking outside the sidebar
document.addEventListener("click", function (e) {
    const sidebar = document.querySelector(".sidebar");
    const toggler = document.querySelector(".sidebar-toggler");

    if (!sidebar.contains(e.target) && !toggler.contains(e.target)) {
        document.querySelector(".sidebar").classList.add("collapsed");
    }
});