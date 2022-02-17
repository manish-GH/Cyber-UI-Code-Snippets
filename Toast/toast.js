const toastBtn = document.querySelector("#display-toast");
const toastContainer = document.querySelector(".toast-container");

const displayToast = () => {
	toastContainer.style.display = "grid";
	setTimeout(() => (toastContainer.style.display = "none"), 2000);
};

toastBtn.addEventListener("click", () => displayToast());
