const navItem = document.querySelectorAll(".nav__item");
const mainMenuLink = document.querySelector(".main-menu__link--active");

document.addEventListener("click", (e) => {
    if(!e.target.closest(".main-menu__item")) {
        mainMenuLink?.classList.remove("active");
        mainMenuLink?.parentElement.querySelector(".menu-dropdown")?.classList.remove("show")
    }
});

mainMenuLink?.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    e.currentTarget.parentElement.querySelector(".menu-dropdown")?.classList.toggle("show")
});

for(let i = 0; i < navItem.length; i++) {
    let el = navItem[i];
    el.addEventListener("click", (e) => {
        e.currentTarget.querySelector(".nav-dropdown").classList.toggle("show");
        e.currentTarget.classList.toggle("active");
    });

    document.addEventListener("click", e => {
        if(!e.target.closest(".nav")) {
            document.querySelectorAll(".nav-dropdown").forEach(el => el.classList.remove("show"));
            document.querySelectorAll(".nav__item").forEach(el => el.classList.remove("active"));
        }
    })
}

const changeHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  changeHeight();
  
  
  window.addEventListener('resize', () => {
    changeHeight();
  });
  