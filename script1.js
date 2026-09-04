// Smooth Scroll Functionality for any section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Photo Album Logic
const photos = [
  { src: 'assest/photo1.jpg', caption: 'MEMORY 01/03 - Thank you for showing up!' },
  { src: 'assest/photo2.jpg', caption: 'MEMORY 02/03 - Best moments together!' },
  { src: 'assest/photo3.jpg', caption: 'MEMORY 03/03 - Forever favorite person!' }
];
let currentPhotoIndex = 0;

function nextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  document.getElementById('album-img').src = photos[currentPhotoIndex].src;
  document.getElementById('album-caption').innerText = photos[currentPhotoIndex].caption;
}

// Wish Cards Logic
function revealWish(element, wishText) {
  element.innerHTML = `<p style="font-size:0.85rem; padding:10px; margin:0; color:#d81b60;">${wishText}</p>`;
  element.style.background = '#ffffff';
}

// Letter Popup Modal Logic
function openLetter() {
  document.getElementById('letter-modal').classList.remove('hidden');
}

function closeLetter() {
  document.getElementById('letter-modal').classList.add('hidden');
}