import { GraphModal } from "./modal";

document.addEventListener("DOMContentLoaded", () => {

    const modal = new GraphModal();

    const purchaseRemoveBtns = document.querySelectorAll(".purchase__remove");

    for(let i = 0; i < purchaseRemoveBtns.length; i++) {
        let el = purchaseRemoveBtns[i];
        el.addEventListener("click", (e) => {

            setTimeout(() => {
                el.parentElement.remove();
                if(document.querySelectorAll(".purchase__item").length == 0) {
                    modal.close();
                }
            }, 0);
            
        });
    }
});