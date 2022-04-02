const images = ["french-toast.jpeg", "crepe-2.png", "breakfast-plate.png", "crepe.jpeg", "burger.png", "crepes-3.jpeg", "restaurant.jpeg", "eggs.png"];
const alt = ["Pamela's French Toast Plate", "Pamela's Crepe Plate Number 1", "Pamela's Variety Breakfast Plate", "Pamela's Crepe Plate Number 2", "Pamela's Burger Plate", "Pamela's Crepe Plate Number 3", "Pamela's Dining Area Image", "Pamela's Egg Plate"];

let slideIndex = 1;
showSlides()

function showSlides(){
        $("#cur-img").attr("src", "images/"+images[slideIndex]);
        $("#cur-img").attr("alt", alt[slideIndex]);
        slideIndex++;
        if (slideIndex >= images.length) {slideIndex = 0}
        setTimeout(showSlides, 3000);
}