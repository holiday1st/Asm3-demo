"use strict";

// test email
const info = document.querySelector(".infor");
const forms = document.querySelector(".forms-hidden");
const btnSubmit = document.getElementById("submit");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnSubmit.addEventListener("click", function () {
  const emails = document.getElementById("email").value;
  if (emails.match(regex)) {
    info.classList.remove("hidden");
    forms.classList.add("hidden");
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
});

// Show More
const btnShow = document.getElementsByClassName("show-link");
const more = document.getElementsByClassName("more");
const btnShowhide = document.getElementsByClassName("hide");
for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener("click", function () {
    more[i].classList.remove("hidden");
    btnShow[i].classList.add("hidden");
    btnShow[i].classList.toggle("btn-hide");
  });
  btnShowhide[i].addEventListener("click", function () {
    more[i].classList.add("hidden");
    btnShow[i].classList.remove("hidden");
    btnShow[i].classList.toggle("btn-hide");
  });
}
