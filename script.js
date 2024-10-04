"use strict";

function validate() {
  if (document.login.uname.value == "") {
    alert("Enter Username!");
    return false;
  }

  if (document.login.email.value == "") {
    alert("Enter Email!");
    return false;
  }

  if (document.login.phnum.value == "") {
    alert("Enter Phone Number!");
    return false;
  }

  if (document.login.psw.value == "") {
    alert("Enter Password!");
    return false;
  }
  alert("Details Entered Successfully");
}

const modal = document.querySelector(".container");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const sbtn= document.querySelector('.sbtn');
const slbtn=document.querySelector('.slbtn');

openModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  openModal.classList.add("hidden");
});

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  openModal.classList.remove("hidden");
});

sbtn.addEventListener("click",function(){
  document.querySelector('.login').classList.add('hidden');
  document.querySelector('.signup').classList.remove('hidden');
});

slbtn.addEventListener("click",function(){
  document.querySelector('.login').classList.remove('hidden');
  document.querySelector('.signup').classList.add('hidden');
});