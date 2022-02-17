const modalBtn = document.querySelector("#display-modal");
const xBtn = document.querySelector("#x-btn");
const modalContainer = document.querySelector(".modal-container");

xBtn.addEventListener("click", () => (modalContainer.style.display = "none"));
modalBtn.addEventListener(
	"click",
	() => (modalContainer.style.display = "flex")
);
