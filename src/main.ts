import "./style.css";
const slidesEl = document.querySelectorAll<HTMLDivElement>(".slide");
const prevBtnEl = document.getElementById("prevBtn") as HTMLButtonElement;
const nextBtnEl = document.getElementById("nextBtn") as HTMLButtonElement;

slidesEl[0].classList.add("current");

nextBtnEl.addEventListener("click", () => {
  const current = document.querySelector(".current") as HTMLDivElement;
  const next = (
    current.nextElementSibling as HTMLDivElement
  )?.classList.contains("slide")
    ? (current.nextElementSibling as HTMLDivElement)
    : slidesEl[0];

  current.classList.remove("current");
  current.classList.add("hidden");

  next.classList.add("current");
  next.classList.remove("hidden");
});

prevBtnEl.addEventListener("click", () => {
  const current = document.querySelector(".current") as HTMLDivElement;
  const prev = (
    current.previousElementSibling as HTMLDivElement
  )?.classList.contains("slide")
    ? (current.previousElementSibling as HTMLDivElement)
    : slidesEl[slidesEl.length - 1];

  current.classList.remove("current");
  current.classList.add("hidden");

  prev.classList.add("current");
  prev.classList.remove("hidden");
});
