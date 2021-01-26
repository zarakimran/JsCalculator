function scrnVal(num){
    var screen = document.getElementById("screen")
    screen.value += num
}

function cButton(){
    var screen = document.getElementById("screen")
    screen.value = ""
}

function equals(){
    var screen = document.getElementById("screen")
    screen.value = eval (screen.value)
}