const butdivs_container = document.querySelector(".butdivs_container")
const conteineri = document.querySelector(".conteineri")
const footer_div_p = document.querySelector(".footer_div_p")
const buts = document.querySelector(".buts")
const butss1 = document.querySelector(".butss1")
const butss2 = document.querySelector(".butss2")
const section_firstdiv_p = document.querySelector(".section_firstdiv_p")
const buts_divs = document.querySelector(".buts_divs")
const footer_div2_p = document.querySelector(".footer_div2_p")
const butss = document.querySelectorAll(".butss")

const ul1 = document.querySelectorAll(".ul1")
butdivs_container.children[0].style.opacity = "1"

function them() {
    butdivs_container.children[0].style.opacity = "1"
    butdivs_container.children[1].style.opacity = "0"
    butdivs_container.children[2].style.opacity = "0"
    conteineri.style.backgroundColor = "#3A4663"
    footer_div_p.style.color = "#FFFFFF"
    buts.style.backgroundColor = "#647198"
    butss1.style.backgroundColor = "#647198"



    butss2.style.backgroundColor = "#D03F2F"
    buts.style.boxShadow = "0 5px 0 0 #414E73"
    butss2.style.color = "#FFFFFF"
    section_firstdiv_p.style.backgroundColor = "#181F33"
    section_firstdiv_p.style.color = "#FFFFFF"
    buts_divs.style.backgroundColor = "#242D44"
    footer_div2_p.style.color = "#FFFFFF"
    butss.forEach((butss) => {
        butss.style.backgroundColor = "#EAE3DC"
        butss.style.color = "#434A59"
        butss.style.boxShadow = "0 5px 0 0 #B3A497"

    })
    ul1.forEach((ul1) => {
        ul1.style.color = "#FFFFFF"
    })
    butss1.style.boxShadow = "0 5px 0 0 #414E73"
    butss2.style.boxShadow = "0 5px 0 0 #93261A"
}
function them1() {
    butdivs_container.children[0].style.opacity = "0"
    butdivs_container.children[1].style.opacity = "1"
    butdivs_container.children[2].style.opacity = "0"
    conteineri.style.backgroundColor = "#E6E6E6"
    footer_div_p.style.color = "#36362C"
    buts.style.color = "#FFFFFF"
    butss1.style.backgroundColor = "#378187"




    buts.style.backgroundColor = "#378187"
    buts.style.boxShadow = "0 5px 0 0 #A79E91"
    butss2.style.backgroundColor = "#C85402"
    butss2.style.color = "#FFFFFF"
    section_firstdiv_p.style.backgroundColor = "#EEEEEE"
    section_firstdiv_p.style.color = "#36362C"
    buts_divs.style.backgroundColor = "#D2CDCD"
    footer_div2_p.style.color = "#36362C"
    butss.forEach((butss) => {
        butss.style.backgroundColor = "#E5E4E1"
        butss.style.color = "#434A59"
        butss.style.boxShadow = "0 5px 0 0 #A79E91"


    })
    ul1.forEach((ul1) => {
        ul1.style.color = "#36362C"
    })
    butss1.style.boxShadow = "0 5px 0 0 #1B6066"
    butss2.style.boxShadow = "0 5px 0 0 #873901"

}
function them2() {
    butdivs_container.children[0].style.opacity = "0"
    butdivs_container.children[1].style.opacity = "0"
    butdivs_container.children[2].style.opacity = "1"
    conteineri.style.backgroundColor = "#17062A"
    footer_div_p.style.color = "#FFE53D"
    butss1.style.backgroundColor = "#56077C"


    buts.style.backgroundColor = "#56077C"
    buts.style.boxShadow = "0 5px 0 0 #BE15F4"
    butss2.style.backgroundColor = "#00DED0"
    butss2.style.color = "#1A2327"
    section_firstdiv_p.style.backgroundColor = "#1E0936"
    section_firstdiv_p.style.color = "#FFE53D"
    buts_divs.style.backgroundColor = "#1E0936"
    footer_div2_p.style.color = "#FFE53D"
    butss.forEach((butss) => {
        butss.style.backgroundColor = "#331C4D"
        butss.style.color = "#FFE53D"
        butss.style.boxShadow = "0 5px 0 0 #881C9E"

    })
    ul1.forEach((ul1) => {
        ul1.style.color = "#FFE53D"
    })

    butss1.style.boxShadow = "0 5px 0 0 #881C9E"
    butss2.style.boxShadow = "0 5px 0 0 #6CF9F1"
    
}

console.dir(butss2)
console.dir(butss)