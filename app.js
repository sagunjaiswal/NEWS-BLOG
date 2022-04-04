function changeFunc(){
    let selectBox = document.getElementById("selectBox");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    filterProduct(selectedValue);
    
}

function filterProduct(value){
    let elements = document.querySelectorAll(".box");
    elements.forEach(element => {
        if(value=="All"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    })
}

function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("validationText");
    var pattern = /^[^ ]+\.[a-z]{1,3}$/;

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email address is valid";
        text.style.color = "#00ff00";
        text.style.display = "block"
        text.style.fontSize = "0.6rem";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Invalid email address";
        text.style.color = "#ff0000";
        text.style.fontSize = "0.6rem";
    }
}