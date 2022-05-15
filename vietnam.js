document.getElementById("left").addEventListener("click", () => {
    containers = document.getElementsByClassName("grid-container")
    for (let i = 0; i < containers.length; i++) {
        let leftValue = +containers[i].style.left.slice(0, -2)
        leftValue -= 33

        containers[i].style.left = leftValue.toString() + "vw"
    }
})


document.getElementById("right").addEventListener("click", () => {
    containers = document.getElementsByClassName("grid-container")
    for (let i = 0; i < containers.length; i++) {
        let leftValue = +containers[i].style.left.slice(0, -2)
        leftValue += 33
        console.log(leftValue)

        containers[i].style.left = leftValue.toString() + "vw"
    }
})