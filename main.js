const pageOne = document.createElement("div");
const pageTwo = document.createElement("div");

const body = document.querySelector("body");
const header = body.querySelector("header");
const mainContainer = body.querySelector(".main-container");

pageOne.appendChild(header.cloneNode(true));
pageOne.appendChild(mainContainer.cloneNode(true));
const pageOneEducation = pageOne.querySelector(
  "section[aria-labelledby='education']"
);
const pageOneProjects = pageOne.querySelectorAll(".project");
pageOneProjects[2].remove();
pageOneEducation.remove();

pageTwo.classList.add("page-break");
pageTwo.appendChild(header.cloneNode(true));
pageTwo.appendChild(mainContainer.cloneNode(true));

window.addEventListener("beforeprint", () => {
  body.removeChild(header);
  body.removeChild(mainContainer);

  body.appendChild(pageOne);
  body.appendChild(pageTwo);
});

window.addEventListener("afterprint", () => {
  body.removeChild(pageOne);
  body.removeChild(pageTwo);

  body.appendChild(header);
  body.appendChild(mainContainer);
});
