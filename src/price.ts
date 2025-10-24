import "./style.css";
const dropDownEl = document.getElementById("dropdown") as HTMLElement;
const dropdownMenuEl = document.getElementById("dropdown-menu") as HTMLElement;
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header") as HTMLElement;
  if (window.scrollY > 200) {
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