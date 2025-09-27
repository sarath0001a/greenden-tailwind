 const sidenav  = document.getElementById("sidenav")
 const menuicon = document .getElementById("menuicon")
 const closenav = document.getElementById("close-nav")
 
 menuicon.addEventListener("click",function(){
    sidenav.style.right=0

 })

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})

const input = document.getElementById("input")
const container = document.getElementById("container")
const paragraph = container.querySelectorAll("div")

input.addEventListener("keyup", function () {
    let entervalue = event.target.value.toUpperCase()

    for (count = 0; count < paragraph.length; count = count + 1) {
        if (paragraph[count].textContent.toUpperCase().indexOf(entervalue)==-1) {
            paragraph[count].style.display = "none"
        }
        else {
            paragraph[count].style.display = "block"
        }
    }
})