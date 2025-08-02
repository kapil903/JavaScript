console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".box").textContent)
console.log(document.querySelector(".box").hidden)
document.querySelector(".box").hidden = true
console.log(document.querySelector(".box").hidden)
document.querySelector(".box").hidden = false
document.querySelector(".box").innerHTML = "Hey i am kapil"
console.log(document.querySelector(".box").hasAttribute("style"))
document.querySelector(".box").setAttribute("style", "display: inline")
// let div = document.createElement("div")
// div.innerHTML = "Hey I am kapil <b>GOOD</b>"
// div.setAttribute("class", "created")
// document.querySelector(".container").append(div)
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforeend", "<b>I am kapil</b>")
console.log(cont.classList)
cont.classList.add("red")
console.log(cont.classList)
cont.classList.toggle("red")