function clickLogin(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }
}

function addDef(element) {
    element.remove()
}
