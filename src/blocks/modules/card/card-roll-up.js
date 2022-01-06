document.addEventListener("DOMContentLoaded", () => {
    const cardInfoRollUp = document.querySelector(".card-info__roll-up");
    const cardInfoList = document.querySelector(".card-info__list");

    cardInfoRollUp?.addEventListener("click", (e) => {
        let target = e.currentTarget.querySelector("span");
        e.currentTarget.classList.toggle("active");
        target.innerHTML !== 'Свернуть' ? target.innerHTML = 'Свернуть' : target.innerHTML = `Развернуть`;
        cardInfoList.classList.toggle("hidden");
    })
});