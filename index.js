let ham = document.getElementById("ham")
let nav2 = document.getElementById("navagain")
let cross = document.getElementById("cross")
ham.addEventListener('click',()=>{
    nav2.classList.toggle("hidden")
})

cross.addEventListener('click',()=>{
    nav2.classList.toggle("hidden")
})

let hero = document.getElementById("heroTo")
let part2 = document.getElementById("part2to")
let part3 = document.getElementById("part3to")
let contact = document.getElementById("contactTo")

hero.addEventListener('click',()=>{
    nav2.classList.toggle("hidden")
})
part2.addEventListener('click',()=>{
    nav2.classList.toggle("hidden")
})
part3.addEventListener('click',()=>{
    nav2.classList.toggle("hidden")
})
contact.addEventListener('click',()=>{
    nav2.classList.toggle("hidden")
})