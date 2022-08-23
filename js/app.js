
// Particles

particlesJS.load('particles-js', './js/particlesjs-config.json', function() {
  console.log('particles.js loaded - callback');
});


// Counter on scroll

let counters = document.querySelectorAll(".counter")
let section = document.querySelector(".counter-up")
let started = false;

window.onscroll = function () {
  if ((window.scrollY + window.innerHeight/1.5) >= section.offsetTop) {
    if (!started) {
      counters.forEach((num) => startCount(num))
    }
    started = true
  } 
  // else if ((window.scrollY + window.innerHeight/1.5) <= section.offsetTop) {
  //   started = false
  //   counters.forEach((num) => {
  //     num.textContent = 0
  //   })
  // }
}

function startCount(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++
    if (e.textContent == goal) {
      clearInterval(count)
    }
  }, 20)
}