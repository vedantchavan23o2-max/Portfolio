/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);

});


/* ==========================
   TYPING EFFECT
========================== */

const typingText = document.getElementById("typing");

const words = [
    "Engineering Student",
    "first year student ",
    "civil student",
    "professional communicator ",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 60 : 120
    );
}

// Check if element exists before typing to avoid errors
if (typingText) {
    typeEffect();
}


/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ==========================
   ACTIVE NAVBAR LINK
========================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active-link");
        }

    });

});


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
    document.querySelectorAll(
        ".about-card, .timeline-item, .project-card, .certificate-card, .skill, .stat-box, .skill-card"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ==========================
   NAVBAR BACKGROUND
========================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0,0,0,0.85)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,0.3)";

        navbar.style.boxShadow = "none";
    }

});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
    document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    if (!statsSection) return; // Prevent errors if stats section isn't present

    const position =
        statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counters.forEach(counter => {

            let target =
                parseInt(counter.innerText);

            let count = 0;

            let speed = target / 50;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText =
                        Math.ceil(count) + "+";

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                        target + "+";
                }

            };

            updateCounter();

        });

        counterStarted = true;
    }

}

window.addEventListener(
    "scroll",
    startCounter
);


/* ==========================
   CONTACT FORM
========================== */

const form =
    document.querySelector(".contact-form");

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Message Sent Successfully!"
            );

            form.reset();

        }
    );
}


/* ==========================
   CERTIFICATE POPUP MODAL
========================= */

function openCertificate(imgSrc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certImage');
    
    if (modal && modalImg) {
        modal.classList.add('active');
        modalImg.src = imgSrc;
        
        // Disable page body scrolling behind popup window
        document.body.style.overflow = 'hidden';
    }
}

function closeCertificate() {
    const modal = document.getElementById('certModal');
    if (modal) {
        modal.classList.remove('active');
        
        // Re-enable scrolling layout
        document.body.style.overflow = 'auto';
    }
}

// Extra feature: Close modal instantly if user hits the 'Escape' key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeCertificate();
    }
});


/* ==========================
   DYNAMIC CSS INJECTION
========================== */

const style = document.createElement("style");

style.innerHTML = `

.about-card,
.timeline-item,
.project-card,
.certificate-card,
.skill,
.stat-box,
.skill-card {
    opacity: 0;
    transform: translateY(40px);
    transition: 0.8s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}

.nav-links.active {
    display: flex !important;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #120024;
    flex-direction: column;
    padding: 25px;
    gap: 20px;
    text-align: center;
}

.active-link {
    color: #ff2c74 !important;
}

`;

document.head.appendChild(style);