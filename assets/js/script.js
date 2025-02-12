document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const tab = button.getAttribute("data-tab");
            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));
            button.classList.add("active");
            document.getElementById(tab).classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });
});


