document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal").forEach((wrap) => {
    const img = wrap.querySelector(".reveal-image");
    const box = wrap.querySelector(".hidden-box");

    img.addEventListener("click", () => {
      img.style.display = "none";
      box.style.display = "block";
    });

    box.addEventListener("click", () => {
      box.style.display = "none";
      img.style.display = "block";
    });
  });
});