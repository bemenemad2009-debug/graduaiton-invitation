// ===========================
// Loading Screen
// ===========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});

// ===========================
// Countdown
// ===========================

// غير التاريخ ده بتاريخ حفلة التخرج
const targetDate = new Date("December 31, 2026  9:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance <= 0) {

        clearInterval(timer);

        document.querySelector(".timer").innerHTML =
            "<h2>🎓 Graduation Day Has Arrived!</h2>";

    }

}, 1000);

// ===========================
// Smooth Scroll Animation
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".card,.box,.images img,.timer div")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});
// ===========================
// RSVP Button
// ===========================

const confirmBtn = document.getElementById("confirm");
const successPopup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

confirmBtn.addEventListener("click", () => {
    successPopup.classList.add("active");
});

closePopup.addEventListener("click", () => {
    successPopup.classList.remove("active");
});

// ===========================
// Floating Animation
// ===========================

setInterval(() => {

    document.querySelector(".name").classList.toggle("float");

}, 2500);

// ===========================
// Parallax Hero
// ===========================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY = window.pageYOffset * .5 + "px";

});

// ===========================
// Confetti Effect
// ===========================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        r: Math.random() * 6 + 2,

        d: Math.random() * 120,

        color: `hsl(${Math.random() * 360},100%,60%)`

    });

}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        ctx.fillStyle = p.color;

        ctx.fill();

    });

    update();

}

let angle = 0;

function update() {

    angle += 0.01;

    particles.forEach((p, i) => {

        p.y += Math.cos(angle + p.d) + 2;

        p.x += Math.sin(angle);

        if (p.y > canvas.height) {

            particles[i] = {

                x: Math.random() * canvas.width,

                y: -20,

                r: p.r,

                d: p.d,

                color: p.color

            };

        }

    });

}

setInterval(draw, 20);

// ===========================
// Resize Canvas
// ===========================

window.onresize = () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

};