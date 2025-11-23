let burgerMenuElem_1 = document.querySelector(".burger_menu__burger_div_1");
let burgerMenuElem_2 = document.querySelector(".burger_menu__burger_div_2");
let burgerMenuElem_3 = document.querySelector(".burger_menu__burger_div_3");
let burgerMenu = document.querySelector(".body__burger_menu");
let links = document.querySelectorAll(".footer_img");
let count = 0;

burgerMenu.addEventListener("click", function(){
    if(count == 0){
        anime({
            targets: ".burger_menu__click_menu",
            translateX: ["-100%", "0%"],
            duration: 350,
            easing: "easeInBack",
            loop: false
        });

        burgerMenu.style.transform = "rotate(90deg)";
        burgerMenuElem_2.style.opacity = "0"
        burgerMenuElem_1.style.transform = "translateY(15px) rotate(-47deg)";
        burgerMenuElem_3.style.transform = "translateY(-15px) rotate(47deg)";
        count++;
        

    }else if(count == 1){
        burgerMenu.style.transform = "rotate(0deg)";
        burgerMenuElem_2.style.opacity = "1"
        burgerMenuElem_1.style.transform = "translateY(0px) rotate(0deg)";
        burgerMenuElem_3.style.transform = "translateY(0px) rotate(0deg)";
        count = 0;

        anime({
            targets: ".burger_menu__click_menu",
            translateX: ["0%", "-100%"],
            duration: 500,
            easing: "easeInBack",
            loop: false
        });
  
    }

});

// for(let i = 0; i < 3; i++){
//     links[i].addEventListener("click", function(){
//         anime({
//             targets: links[i],
//             x: '16rem',
//             loopDelay: 1500,
//             loop: true,
//             alternate: true,
//             onLoop: self => $value.textContent = ++loops
//         });
//     })
// }


