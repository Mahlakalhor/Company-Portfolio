import "./style.css";
const slidesEl = document.querySelectorAll<HTMLDivElement>(".slide");
const prevBtnEl = document.getElementById("prevBtn") as HTMLOrSVGElement;
const nextBtnEl = document.getElementById("nextBtn") as HTMLOrSVGElement;
const dropDownEl = document.getElementById("dropdown") as HTMLElement;
const dropdownMenuEl = document.getElementById("dropdown-menu") as HTMLElement;

let current = 0;

slidesEl.forEach((el, i) => {
  if (i === 0) {
    el.classList.remove("hidden", "opacity-0");
    el.classList.add("opacity-100", "current");
  } else {
    el.classList.add("hidden", "opacity-0");
    el.classList.remove("opacity-100", "current");
  }
});

function showSlide(index: number) {
  slidesEl[current].classList.add("hidden", "opacity-0");
  slidesEl[current].classList.remove("opacity-100", "current");

  current = (index + slidesEl.length) % slidesEl.length;

  slidesEl[current].classList.remove("hidden", "opacity-0");
  slidesEl[current].classList.add("opacity-100", "current");
}

nextBtnEl?.addEventListener("click", () => showSlide(current + 1));
prevBtnEl?.addEventListener("click", () => showSlide(current - 1));

setInterval(() => showSlide(current + 1), 5000);

window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header") as HTMLElement;
  if (window.scrollY > 900) {
    header.style.backgroundColor = "#000000";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
if (dropDownEl && dropdownMenuEl) {
  dropDownEl.addEventListener("mouseenter", () => {
    dropdownMenuEl.classList.remove("hidden");
  });

  dropDownEl.addEventListener("mouseleave", () => {
    dropdownMenuEl.classList.add("hidden");
  });
}
