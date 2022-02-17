star1 = document.querySelector(".rating-star-1");
star2 = document.querySelector(".rating-star-2");
star3 = document.querySelector(".rating-star-3");
star4 = document.querySelector(".rating-star-4");
star5 = document.querySelector(".rating-star-5");

star5.addEventListener("click", () => {
	star5.classList.remove("rating-inactive");
	star5.classList.add("rating-active");
	star1.classList.remove("rating-active");
	star2.classList.remove("rating-active");
	star3.classList.remove("rating-active");
	star4.classList.remove("rating-active");
});
star4.addEventListener("click", () => {
	star5.classList.remove("rating-inactive");
	star5.classList.add("rating-active");
	star4.classList.remove("rating-inactive");
	star4.classList.add("rating-active");
	star1.classList.remove("rating-active");
	star2.classList.remove("rating-active");
	star3.classList.remove("rating-active");
});
star3.addEventListener("click", () => {
	star5.classList.remove("rating-inactive");
	star5.classList.add("rating-active");
	star4.classList.remove("rating-inactive");
	star4.classList.add("rating-active");
	star3.classList.remove("rating-inactive");
	star3.classList.add("rating-active");
	star1.classList.remove("rating-active");
	star2.classList.remove("rating-active");
});
star2.addEventListener("click", () => {
	star5.classList.remove("rating-inactive");
	star5.classList.add("rating-active");
	star4.classList.remove("rating-inactive");
	star4.classList.add("rating-active");
	star3.classList.remove("rating-inactive");
	star3.classList.add("rating-active");
	star2.classList.remove("rating-inactive");
	star2.classList.add("rating-active");
	star1.classList.remove("rating-active");
});
star1.addEventListener("click", () => {
	star5.classList.remove("rating-inactive");
	star5.classList.add("rating-active");
	star4.classList.remove("rating-inactive");
	star4.classList.add("rating-active");
	star3.classList.remove("rating-inactive");
	star3.classList.add("rating-active");
	star2.classList.remove("rating-inactive");
	star2.classList.add("rating-active");
	star1.classList.remove("rating-inactive");
	star1.classList.add("rating-active");
});
