/* =========================================
   MARISA CAFE - SCRIPT.JS
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll(".nav-menu a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   NAVBAR ON SCROLL
========================================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0, 0, 0, 0.97)";

    } else {

        navbar.style.background = "rgba(0, 0, 0, 0.92)";

    }

});


/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTop = document.getElementById("scrollTop");

if (scrollTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            scrollTop.classList.add("visible");

        } else {

            scrollTop.classList.remove("visible");

        }

    });


    scrollTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   GALLERY IMAGE MODAL
========================================= */

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

document.querySelectorAll(".gallery-item img").forEach(function (image) {

    image.addEventListener("click", function () {

        if (modal && modalImage) {

            modal.style.display = "block";
            modalImage.src = this.src;
            modalImage.alt = this.alt;

        }

    });

});


if (modal) {

    modal.addEventListener("click", function () {

        modal.style.display = "none";

    });

}


/* =========================================
   RESERVATION FORM
========================================= */

const reservationForm =
    document.getElementById("reservationForm");

const formMessage =
    document.getElementById("formMessage");


if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const guests =
            document.getElementById("guests").value;


        /* Check required fields */

        if (
            !name ||
            !phone ||
            !email ||
            !date ||
            !time ||
            !guests
        ) {

            showFormMessage(
                "Please fill in all required fields.",
                "error"
            );

            return;

        }


        /* Check email */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showFormMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }


        /* Check Ugandan phone number */

        const phonePattern =
            /^(07|03)\d{8}$/;

        if (!phonePattern.test(phone)) {

            showFormMessage(
                "Please enter a valid Ugandan phone number.",
                "error"
            );

            return;

        }


        /* Success */

        showFormMessage(
            "Thank you " +
            name +
            "! Your table for " +
            guests +
            " guest(s) has been reserved for " +
            date +
            " at " +
            time +
            ". We will contact you on " +
            phone +
            ".",
            "success"
        );


        reservationForm.reset();

    });

}


/* =========================================
   FORM MESSAGE FUNCTION
========================================= */

function showFormMessage(message, type) {

    if (!formMessage) {
        return;
    }

    formMessage.textContent = message;

    formMessage.className =
        "form-message " + type;

}


/* =========================================
   SET MINIMUM RESERVATION DATE
========================================= */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.min = today;

}


/* =========================================
   NEWSLETTER
========================================= */

function subscribeNewsletter() {

    const emailInput =
        document.getElementById("newsletterEmail");

    if (!emailInput) {
        return;
    }

    const email =
        emailInput.value.trim();


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    alert(
        "Thank you for subscribing to Marisa Cafe!"
    );

    emailInput.value = "";

}


/* =========================================
   SCROLL ANIMATIONS
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".section, .menu-category, .special-card, .contact-info"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-animation"
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});