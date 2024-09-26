// Ini Javascript

replacement();

function replaceName() {
    let name = prompt('Masukan nama anda');
    console.log(name);
    document.getElementById('user-name').innerHTML = name;
}

function validateForm() {
    let inputName = document.getElementById('input-name').value;
    if (inputName == '') {
        alert('Inputan Kosong');
    } else {
        document.getElementById('result-form').innerHTML = inputName;
        alert('Sukses Submit Form');
    }
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    // Get DOM Semua Image Banner
    let listImage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide);
    console.log(listImage);

    // Reset IndexSlide
    if (index > listImage.length) indexSlide = 1;

    // Hide All Images
    let i = 0;
    while (i < listImage.length) {
        listImage[1].style.display ='none';
        i++;
    }

    // Show Selected Image 
    listImage[indexSlide - 1].style.display = 'block';
}

// Autorun Banner Photo
setInterval(() => nextSlide(1), 2000);