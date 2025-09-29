// Navbar heart counter
let heartCount = 0;
const heartCounter = document.getElementById("add-heart");
const hearts = document.querySelectorAll(".card-heart");

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        heartCount++;
        heartCounter.textContent = heartCount;

       
        heart.classList.toggle("fa-solid");  
        heart.classList.toggle("fa-regular"); 
        heart.style.color = heart.classList.contains("fa-solid") ? "red" : "";
    });
});
