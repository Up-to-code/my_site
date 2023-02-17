let btn_start = document.querySelector(".btn_start");
btn_start.addEventListener('click', function () {
    btn_start.style.transform = "scale(0.8)"
    window.scrollTo(0, 641);

    let time = setInterval(() => {
        btn_start.style.transform = "scale(1)"
        clearInterval(time)
    }, 400);
})

//opn .contaner_links ul
let nav_bar = document.querySelector("nav")
let link_nav = document.querySelectorAll(".link a")

let ul = document.querySelector(".contaner_links ul");
let fa_bars = document.querySelectorAll(".spses");
let n = 0;
for (let index = 0; index < fa_bars.length; index++) {
    const element = fa_bars[index];
    element.addEventListener('click', function () {
        if (n == 0) {
            ul.style.height = "100vh"
            n = 1;
            console.log(n);
        } else {
            ul.style.height = "00vh"
            n = 0;
            console.log(n);

        }
    })
}

//function start


//exit .contaner_links ul

//start scccroll
// let nav_bar = document.querySelector("nav")
// let link_nav = document.querySelectorAll(".link a")

onscroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 100) {
        nav_bar.classList.add("addNav")
        if (window.innerWidth >= 721) {
            for (let index = 0; index < link_nav.length; index++) {
                const element = link_nav[index];
                element.style.color = "#000"

            }
        } else {
            for (let index = 0; index < link_nav.length; index++) {
                const element = link_nav[index];
                element.style.color = "#fff"
            }
        }

    } else {
        nav_bar.classList.remove("addNav");
        if (window.innerWidth >= 721) {
            for (let index = 0; index < link_nav.length; index++) {
                const element = link_nav[index];
                element.style.color = "#fff"

            }
        }

    }
}
let spes_box = document.querySelectorAll(".spes_box")
let box_aftr = document.querySelectorAll(".p_box .aftr")

for (let index = 0; index < spes_box.length; index++) {
    const element = spes_box[index];
    element.onmouseover = (event) => {
        console.log("noyes");
        element.style.height = "100%"
    };
    element.onmouseleave = (event) => {
        console.log("no");
        element.style.height = "200%"
    };
}

//nav_bar.onmouseover = (event) => { console.log("object"); };


