
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



// Fade-in on page load 

window.addEventListener("load" , () => {
  // var heading = document.querySelector('.big-heading')
  // heading.classList.add('active')
  var reveals = document.querySelectorAll('.reveal')
  reveals.forEach((revealItem) => {
    if (revealItem.getBoundingClientRect().top < window.innerHeight) {
      revealItem.classList.add("active")
    }
  })
})


// Fade animation on Scroll

window.addEventListener("scroll", () => {

  var reveals = document.querySelectorAll(".reveal")

  reveals.forEach((revealItem) => {

    var windowHeight = window.innerHeight
    var revealItemTop = revealItem.getBoundingClientRect().top
    var revealPoint = 80

    if ((revealItemTop) < (windowHeight - revealPoint)) {
      revealItem.classList.add("active")
    } 
    // else {
    //   revealItem.classList.remove("active")
    // }

  })
})


// Email functionality

const form = document.querySelector('form')
const btn = document.querySelector('.btn-contact')

btn.addEventListener('click', () => {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "aliarif12333@gmail.com",
    Password : "E5F7E41ADC41410ABB7D2ABE59A2BE95927C",
    To : 'contact@techoniche.com',
    From : form.elements["email"].value,
    Subject : form.elements["subject"].value,
    Body : form.elements["message"].value + "<br>" + form.elements["name"].value + "<br>" + form.elements["phone"].value
  }).then(
    message => alert("Email successufully sent!")
  );
})











