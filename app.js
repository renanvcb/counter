//Setting initial counter value
let count = 0

//Selecting value and buttons from page body
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (button) {
    button.addEventListener("click", function(e) {
        const classes = e.currentTarget.classList
        if (classes.contains("decrease")) {
            count --
        } else if (classes.contains("increase")) {
            count ++
        } else {
            count = 0
        }

        if (count > 0) {
            value.style.color = "green";
          }
          if (count < 0) {
            value.style.color = "red";
          }
          if (count == 0) {
            value.style.color = "#222";
          }

        value.textContent = count
    })
})