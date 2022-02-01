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
    let flag = 0;
    el.addEventListener("click", (e) => {

        document.querySelector(".nav-dropdown.show")?.classList.remove("show")
        document.querySelector(".nav__item.active")?.classList.remove("active")

        if (flag == 0) {
            e.currentTarget.querySelector(".nav-dropdown").classList.toggle("show");
            e.currentTarget.classList.toggle("active");
            flag++
        } else {
            e.currentTarget.querySelector(".nav-dropdown").classList.remove("show");
            e.currentTarget.classList.remove("active");
            flag--
        }
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
  