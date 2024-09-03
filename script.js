const options = document.querySelectorAll(".option-img")

function clic(event) {
    console.log(event.currentTarget)
}


options.forEach( img => {
   img.addEventListener("click", clic)
})