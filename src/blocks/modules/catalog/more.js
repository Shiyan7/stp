document.addEventListener("DOMContentLoaded", () => {
    const moreBtn = document.querySelector(".catalog__more");
    let flag = 0;
    moreBtn?.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle(".catalog__more--active")
        if(flag == 0) {
            e.currentTarget.innerHTML = "Свернуть обратно";
            e.currentTarget.parentElement.querySelector(".catalog__grid--hidden")?.classList.remove("catalog__grid--hidden");
            flag++;
        } else {
            e.currentTarget.innerHTML = "Показать больше";
            e.currentTarget.parentElement.querySelector(".catalog__grid")?.classList.add("catalog__grid--hidden");
            flag--;
        };
    });
});