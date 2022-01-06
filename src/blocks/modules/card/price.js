/* document.addEventListener("DOMContentLoaded", () => {
    const priceSum = document.querySelector(".price-sum");
    if (priceSum) {
        const priceTotal = document.querySelector(".price__total");
        const stepper = document.querySelector(".stepper");
        const stepperInput = stepper.querySelector('.stepper__input');
        const stepperBtnUp = stepper.querySelector('.stepper__btn--up');
        const stepperBtnDown = stepper.querySelector('.stepper__btn--down');
        let priceValue = priceSum.dataset.sum;

        const priceWithoutSpaces = (str) => {
            return str.replace(/\s/g, '');
        };

        const plusFullPrice = (currentPrice) => {
            return price += currentPrice;
        };

        const minusFullPrice = (currentPrice) => {
            return price -= currentPrice;
        };

        const printFullPrice = () => {
            fullPrice.textContent = `${normalPrice(price)} р`;
        };

        const printQuantity = (num) => {
            cartCount.textContent = num;
        };

        const normalPrice = (str) => {
            return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        };

        console.log(priceWithoutSpaces(priceValue));

        stepperBtnUp.addEventListener("click", () => {
            setPrice();
        });
        stepperBtnDown.addEventListener("click", () => {
            priceTotal.innerHTML -= priceValue;
        });
    }
}); */