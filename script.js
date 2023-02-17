let panier = document.querySelector(".panier");
let popup_container = document.querySelector(".popup_container");
panier.addEventListener("click", function() {
    popup_container.classList.toggle("active")
})
popup_container.addEventListener("click", function() {
    popup_container.classList.toggle("active")
})