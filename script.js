

// Fx audio

function playAudio() {
  const audio = new Audio('audio/letterSelect.mp3');
  audio.play();
}

function playAudio1() {
  const audio = new Audio('audio/backOnTop.mp3');
  audio.play();
}


// Fx links active

document.addEventListener('DOMContentLoaded', function () {
  const navLiItems = document.querySelectorAll('nav li');
  // const navLinks = document.querySelectorAll('nav a');
  const anchors = document.querySelectorAll('.link');

  navLiItems.forEach(navLi => {
    navLi.addEventListener('click', function () {
      //event.preventDefault();

      const targetId = this.querySelector('a').getAttribute('href').substring(1);

      navLiItems.forEach(item => {
        item.classList.remove('active');
      });

      navLi.classList.add('active');

      anchors.forEach(anchor => {
        if (anchor.id === targetId) {
          anchor.classList.add('active');
          playAudio()
          setTimeout(() => {
            anchor.classList.remove('active');
            navLi.classList.remove('active');
          }, 3000);
        } else {
          anchor.classList.remove('active');
        }
      });
    });
  });
});

// back-on-top audio fx

document.getElementById('back-on-top').addEventListener('click', function () {
  playAudio1()
})

// table row counter 

document.addEventListener('DOMContentLoaded', function () {
  const tableRows = document.querySelectorAll('tbody tr');
  const totalRows = tableRows.length;

  const tableInfoNumber = document.getElementById('table-info-number');
  tableInfoNumber.textContent = `Nombre total de définitions : ${totalRows}`;

  tableRows.forEach(row => {
    console.log(row);
  });
});





















