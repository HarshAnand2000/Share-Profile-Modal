"use strict";

const shareBtn = document.querySelector(".btn-share");
const closeBtn = document.querySelector(".close");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
}

shareBtn.addEventListener("click", () => {
  openModal();
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

overlay.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
