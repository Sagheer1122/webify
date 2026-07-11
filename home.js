document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.ham_burger_menu');
    var navBar = document.querySelector('.nav-bar');
    var contactSection = document.querySelector('.contect_section');
    var requestButtons = document.querySelectorAll('#button, #button-toggle');
    var crossButtons = document.querySelectorAll('.cross');

    if (hamburger && navBar) {
        hamburger.addEventListener('click', function () {
            navBar.classList.toggle('active');
        });
    }

    if (contactSection) {
        contactSection.style.display = 'none';
    }

    requestButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (contactSection) {
                contactSection.style.display = 'block';
            }
        });
    });

    crossButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (contactSection) {
                contactSection.style.display = 'none';
            }
        });
    });
});

