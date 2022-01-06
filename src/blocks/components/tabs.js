export const tabs = (slider) => {
    const tabsBtn = document.querySelectorAll(".tabs__btn");

    for(let i = 0; i < tabsBtn.length; i++) {
        let el = tabsBtn[i];

        el.addEventListener("click", () => {

            const tabsPath = el.getAttribute("data-tabs-path");


            el.closest(".tabs").querySelector('.tabs__btn--active').classList.remove('tabs__btn--active')
            
            el.closest(".tabs").querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');


            let tabsContent = el.closest(".tabs").querySelectorAll(".tabs__content");

            const switchContent = (path, element) => {
                slider?.update();
                for(let i = 0; i < tabsContent.length; i++) {
                    let el = tabsContent[i];
                    el.classList.remove('tabs__content--active')
                }
                element.closest(".tabs").querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
            };


            switchContent(tabsPath, el);
        });
    }
}