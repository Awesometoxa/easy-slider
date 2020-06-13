const slides = document.querySelectorAll(".slider-item");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#previous");
let sliderIndex = 1;

function showSlides(num) {
	if (num < 1) {
		sliderIndex = slides.length;
	}
	if (num > slides.length) {
		sliderIndex = 1;
	}

	slides.forEach((el) => (el.style.display = "none"));

	slides[sliderIndex - 1].style.display = "block";
}

function plusSlide(x) {
	showSlides((sliderIndex += x));
}

showSlides(sliderIndex);

nextBtn.addEventListener("click", () => {
	plusSlide(1);
});

prevBtn.addEventListener("click", () => {
	plusSlide(-1);
});
