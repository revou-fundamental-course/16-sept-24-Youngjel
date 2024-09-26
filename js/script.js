// Ini Javascript

replacement();

function validateForm() {
    // Mengambil nilai dari masing-masing input dalam form
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
  
    // Melakukan pengecekan apakah ada input yang kosong
    if (name === "" || birthDate === "" || gender === "" || messages === "") {
      alert("Tidak boleh ada yang kosong");
      return false; // Menghentikan pengiriman formulir
    }
  
    // Memanggil fungsi setSenderUI untuk memproses data lebih lanjut (jika diperlukan)
    setSenderUI(name, birthDate, gender, messages);
  
    // Mengapa return false; ada dua kali? Ini sebenarnya redundant.
    // Cukup satu kali return false; setelah alert untuk menghentikan pengiriman formulir.
    // return false;
  }
  
  function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
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