document.addEventListener("DOMContentLoaded", () => {
    const cardWays = document.querySelector(".card-ways");

    if(cardWays) {
        const cardWaysBtn = document.querySelector(".card-ways__btn");

        cardWaysBtn.addEventListener("click", () => {
            cardWays.classList.toggle("show");
        });
    }
});