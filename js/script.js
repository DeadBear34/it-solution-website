// script.js
// JavaScript untuk menu navigasi responsif
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () =>{
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Efek parallax pada elemen gelombang
let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventListener('scroll', function(){
  let value = window.scrollY;

  wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
  wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
  wave3.style.backgroundPositionX = 200 + value * 2+ 'px';
  wave4.style.backgroundPositionX = 100 + value * -2+ 'px';
});

// Menghilangkan overlay setelah semua gambar dimuat
window.addEventListener('load', function () {
  const overlay = document.querySelector('.overlay');
  
  // Memeriksa apakah semua gambar telah dimuat
  const images = document.querySelectorAll('img');
  let imagesLoaded = 0;

  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === images.length) {
      overlay.classList.add('hidden');
    }
  }

  images.forEach(img => {
    if (img.complete) {
      imageLoaded();
    } else {
      img.addEventListener('load', imageLoaded);
    }
  });

  // Jika tidak ada gambar, langsung sembunyikan overlay
  if (images.length === 0) {
    overlay.classList.add('hidden');
  }
});
