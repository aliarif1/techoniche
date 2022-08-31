
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


// Email functionality using email.js

const form = document.querySelector('form')
const btn = document.querySelector('.btn-contact')

btn.addEventListener('click', () => {
  const params = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    phone: form.elements["phone"].value,
    subject: form.elements["subject"].value,
    message: form.elements["message"].value,
  }
  emailjs.send("service_kqynv4b", "template_q9q0ofm", params).then( (res) => {
    if (res.status === 200) {
      alert("Email Sent!")
      console.log("Status Code: " + res.status)
    } else {
      alert("Error! Status code: " + res.status)
      console.log("Status Code: " + res.status)
    }
  })
})











