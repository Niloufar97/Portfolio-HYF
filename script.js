const openOffcanvasButton = document.getElementById("openOffcanvas");
const offcanvas = document.getElementById("offcanvas");

const projectsContainer = document.querySelector(".projects-container");

// offcanvas
openOffcanvasButton.addEventListener("click", function () {
  offcanvas.style.right = offcanvas.style.right === "0" ? "-100%" : "0";
});

const closeOffcanvas = () => {
  offcanvas.style.right = "-100%";
};
const closeOffcanvasButton = document.getElementById("closeOffcanvas");
closeOffcanvasButton.addEventListener("click", closeOffcanvas);

const offcanvasLink = document.querySelectorAll(".offcanvas-link");
offcanvasLink.forEach((link) => {
  link.addEventListener("click", () => {
    closeOffcanvas();
  });
});
// fetch data-----------------------------
function getData(){
  fetch('https://raw.githubusercontent.com/Niloufar97/Niloufar97.github.io/main/my-projects/projectsData.json')
  .then(res => res.json())
  .then(data => renderProjects(data))
}
getData();

// add projects-----------------------------
function createProjectCard(project){
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const projectImage = document.createElement('img');
  projectImage.src = project.img;

  const projectTitle = document.createElement('h2');
  projectTitle.textContent = project.title;

  const projectTech = document.createElement('p');
  projectTech.textContent = project.tech;

  const projectCardForm = document.createElement('div');
  projectCardForm.classList.add("project-card-form");
  
  const readMoreButton = document.createElement("button");
  readMoreButton.innerText = "Read More";
  const demoButton = document.createElement('button');
  demoButton.innerText = "Github/Demo";

  projectCardForm.appendChild(readMoreButton);
  projectCardForm.appendChild(demoButton);
  
  projectDiv.appendChild(projectImage);
  projectDiv.appendChild(projectTitle);
  projectDiv.appendChild(projectTech);
  projectDiv.appendChild(projectCardForm);

  projectsContainer.appendChild(projectDiv);
}

// render projects----------------------------
const renderProjects = (projects) => {
  projects.map((project) => {
    createProjectCard(project);
  })
}
