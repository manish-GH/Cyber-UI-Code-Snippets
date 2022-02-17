const modalBtn = document.querySelector("#display-modal");
const closeBtn = document.querySelector("#close-btn");
const modalContainer = document.querySelector(".modal-container");

closeBtn.addEventListener(
	"click",
	() => (modalContainer.style.display = "none")
);
modalBtn.addEventListener(
	"click",
	() => (modalContainer.style.display = "grid")
);
