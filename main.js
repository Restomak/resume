// Create the pages for print.
const pageOne = document.createElement("div");
const pageTwo = document.createElement("div");

// Get the existing elements in the DOM.
const body = document.querySelector("body");
const header = body.querySelector("header");
const mainContainer = body.querySelector(".main-container");

// Set up the first page.
pageOne.classList.add("page");
pageOne.appendChild(header.cloneNode(true));
pageOne.appendChild(mainContainer.cloneNode(true));
const pageOneEducation = pageOne.querySelector(
  "section[aria-labelledby='education']"
);
const pageOneProjects = pageOne.querySelectorAll(".project");
pageOneProjects[2].remove();
pageOneEducation.remove();

// Set up the second page.
pageTwo.classList.add("page", "page-break");
pageTwo.appendChild(header.cloneNode(true));
pageTwo.appendChild(mainContainer.cloneNode(true));
const pageTwoIntroduction = pageTwo.querySelector(
  "section[aria-label='Introduction']"
);
const pageTwoExperience = pageTwo.querySelector("#experience");
const pageTwoProjects = pageTwo.querySelectorAll(".project");
pageTwoIntroduction.remove();
pageTwoExperience.remove();
pageTwoProjects[0].remove();
pageTwoProjects[1].remove();

// Remove the current DOM content and add the print pages before printing.
window.addEventListener("beforeprint", () => {
  body.removeChild(header);
  body.removeChild(mainContainer);

  body.appendChild(pageOne);
  body.appendChild(pageTwo);
});

// Revert the page to it's original state when printing is done.
window.addEventListener("afterprint", () => {
  body.removeChild(pageOne);
  body.removeChild(pageTwo);

  body.appendChild(header);
  body.appendChild(mainContainer);
});
