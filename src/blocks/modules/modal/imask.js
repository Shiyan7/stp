import imask from "imask";

const tells = document.querySelectorAll('.tell-mask');

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

for(let i = 0; i < tells.length; i++) {
  let el = tells[i];
  const mask = imask(el, maskOptions);
}