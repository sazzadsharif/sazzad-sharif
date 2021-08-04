var buttons = document.getElementById("button")
var nev = document.querySelector(".menu")
var subMenu = document.querySelectorAll(".subMenu")
buttons.addEventListener('click', function () {
    nev.classList.toggle("showMenu");
});
subMenu.forEach(value => {

    value.addEventListener("click", function (event) {
        event.stopPropagation()
    })
    value.closest("li").querySelector("a").innerHTML += "<i class='fa fa-caret-down' style='float:right'></i>"
    value.closest("li").addEventListener("click", function () {
        value.closest("li").querySelector("a i").classList.toggle('fa-caret-up')
        console.log(value.classList.contains("show"))
        if (value.classList.contains("show")) {
            value.classList.remove("show")
        } else {
            subMenu.forEach(szad => {
                szad.classList.remove("show")
            });
            value.classList.toggle("show")
        }
    })
})
 // start subMenu 2
var submenu2 = document.querySelectorAll('.subMenu2')
submenu2.forEach(sub2 => {
    sub2.closest("li").addEventListener("click", function () {
        sub2.closest("li").querySelector("a i").classList.toggle("fa-caret-up")
    })
    sub2.closest("li").querySelector("a").innerHTML += '<i class="fas fa-caret-down" style="float:right"></i>'
    sub2.closest("li").addEventListener("click", function (sub) {
        sub2.classList.toggle("showSubMENu2")
        sub2.addEventListener("click", function (sazzad) {
            sazzad.stopPropagation()
        })
    })
});
// start subMenu 3
var submenu3 = document.querySelectorAll('.subMenu3')
submenu3.forEach(sub3 => {
    sub3.closest("li").addEventListener("click", function () {
        sub3.closest("li").querySelector("a i").classList.toggle("fa-caret-up")
    })
    sub3.closest("li").querySelector("a").innerHTML += '<i class="fas fa-caret-down" style="float:right"></i>'

    sub3.closest("li").addEventListener("click", function (sub) {
        sub3.classList.toggle("showSubMENu3")
        sub3.addEventListener("click", function (sazzad) {
            sazzad.stopPropagation()
        })
    })
});

///////////////////////////////////
var neve = document.querySelectorAll("section")
neve.forEach(valuei => {
    valuei.addEventListener('click', function () {
        nev.classList.remove("showMenu");
    });
});

