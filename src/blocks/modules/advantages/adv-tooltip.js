/* document.addEventListener("DOMContentLoaded", () => {
    const advItem = document.querySelectorAll(".advantages__item");

    
    
    for(let i = 0; i< advItem.length; i++) {
        let el = advItem[i];
        el.addEventListener("mouseenter", (e) => {
            let flag = 0;
            let advTooltips = document.querySelectorAll(".advantages__tooltip");

            for(let i = 0; i < advTooltips.length; i++) {
                let el = advTooltips[i];
                el.classList.remove("show");
            }
            e.currentTarget.querySelector(".advantages__tooltip").classList.add("show")
        });

        el.addEventListener("mouseleave", (e) => {
            e.currentTarget.querySelector(".advantages__tooltip").classList.remove("show")
        });
    }
}); */