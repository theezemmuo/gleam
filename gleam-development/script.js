const menuBar = document.querySelector(".hambergermenu")
const closeMenu = document.querySelector(".close-menu")
const menuModal = document.querySelector(".menu-modal")


menuBar.addEventListener("click", function() {
    menuModal.classList.toggle("hide-menu-modal")
    closeMenu.classList.toggle("hide-menu-modal")
    menuBar.classList.toggle("hide-menu-modal")
})

closeMenu.addEventListener("click", function() {
    menuModal.classList.toggle("hide-menu-modal")
    closeMenu.classList.toggle("hide-menu-modal")
    menuBar.classList.toggle("hide-menu-modal")
})