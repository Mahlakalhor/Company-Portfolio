import "./style.css";
// const slidesEl = document.querySelectorAll<HTMLDivElement>(".slide");
// const prevBtnEl = document.getElementById("prevBtn") as HTMLOrSVGElement;
// const nextBtnEl = document.getElementById("nextBtn") as HTMLOrSVGElement;

// // slidesEl.forEach((s, i) => {
// //   if (i === 0) { s.classList.add("current"); s.classList.remove("hidden"); }
// //   else { s.classList.add("hidden"); s.classList.remove("current"); }
// // });

// // // بعدی
// // nextBtnEl.addEventListener("click", () => {
// //   const currentEl = document.querySelector(".current") as HTMLDivElement;

// //   currentEl.classList.remove("current");
// //   currentEl.classList.add("hidden");

// //   // برو خواهر/برادر بعدی که .slide باشه
// //   let next = currentEl.nextElementSibling as HTMLElement;
// //   while (next && !next.classList.contains("slide")) {
// //     next = next.nextElementSibling as HTMLElement;
// //   }

// //   const nextSlide = (next as HTMLElement) || (slidesEl[0] as HTMLElement);
// //   nextSlide.classList.remove("hidden");
// //   nextSlide.classList.add("current");
// // });

// // // قبلی
// // prevBtnEl.addEventListener("click", () => {
// //   const currentEl = document.querySelector(".current") as HTMLDivElement;

// //   currentEl.classList.remove("current");
// //   currentEl.classList.add("hidden");

// //   // برو خواهر/برادر قبلی که .slide باشه
// //   let prev = currentEl.previousElementSibling as HTMLElement;
// //   while (prev && !prev.classList.contains("slide")) {
// //     prev = prev.previousElementSibling as HTMLElement;
// //   }

// //   const prevSlide =
// //     (prev as HTMLElement) || (slidesEl[slidesEl.length - 1] as HTMLElement);
// //   prevSlide.classList.remove("hidden");
// //   prevSlide.classList.add("current");
// // });
