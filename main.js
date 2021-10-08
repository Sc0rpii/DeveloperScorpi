const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const navbar = document.getElementById('navbar');
const instagram = document.getElementById('instagram');
const email = document.getElementById('email');
const twitter = document.getElementById('twitter');
const img_1 = document.getElementById('img');
const img_2 =document.getElementById('img-2');
const momentaneo = document.getElementById('momentaneo');
toggle.onclick = function(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  sun.classList.toggle('active');
  moon.classList.toggle('active');
  navbar.classList.toggle('active');
  instagram.classList.toggle('active');
  email.classList.toggle('active');
  twitter.classList.toggle('active');
  img_1.classList.toggle('active');
  img_2.classList.toggle('active');
  momentaneo.classList.toggle('active');
}
