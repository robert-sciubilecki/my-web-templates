"use strict";

// ****************************************************
// --------------CARD COMPONENTS-----------------------
// ****************************************************
// Nothing to control at this point
// ****************************************************
// -----------CARD COMPONENTS END----------------------
// ****************************************************
//
//
//
//
// ****************************************************
// --------------------MODAL WINDOW--------------------
// ****************************************************
//
// QUERRY SELECTORS
//
const ctaBtns = document.querySelectorAll(".cta-button");
const cardComponent = document.querySelector(".card-component");
const cardSection = document.querySelector(".card-component-section");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const plan = document.querySelector(".plan-span");
const btnClose = document.querySelector(".close-btn");

const modalComponents = [modalWindow, overlay];

//FUNCTIONS
function closeModal() {
  modalComponents.forEach((comp) => comp.classList.add("hidden"));
  plan.classList.remove("iron", "silver", "golden");
  //   for some reason there's a glitch when using forEach in setTimeout
  setTimeout(function () {
    modalWindow.classList.add("display-none");
    overlay.classList.add("display-none");
  }, 300);
}

//EVENT LISTENERS
cardComponent.addEventListener("click", function (e) {
  // if (e.target !=)
  if (!e.target.classList.contains("cta-button")) return;
  const cardColor = e.target
    .closest(".card")
    .querySelector(".plan-color")
    .textContent.replace("Plan: ", "");

  plan.textContent = cardColor;
  plan.classList.add(cardColor.toLowerCase());
  modalComponents.forEach((comp) =>
    comp.classList.remove("hidden", "display-none")
  );
  plan.style.color = cardColor === "Iron" ? "white" : "#303030";
});

overlay.addEventListener("click", closeModal);

window.addEventListener("keydown", function (e) {
  e.key === "Escape" && closeModal();
});

btnClose.addEventListener("click", closeModal);

// ****************************************************
// ----------------MODAL WINDOW- END-------------------
// ****************************************************
