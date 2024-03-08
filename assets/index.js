let ham = document.getElementById("ham")
let nav2 = document.getElementById("navagain")
let cross = document.getElementById("cross")
ham.addEventListener('click',()=>{
    nav2.classList.toggle("hidden")

})

cross.addEventListener('click',()=>{
    nav2.classList.toggle("hidden")
})