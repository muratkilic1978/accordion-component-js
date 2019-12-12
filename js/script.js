const mainElement = document.querySelectorAll(".main");
const conElement = document.querySelectorAll(".content");

for(let x = 0; x < mainElement.length; x++){
    mainElement[x].addEventListener("click", function(){
        console.log(mainElement[x].nextElementSibling);
        clearActive();
        mainElement[x].nextElementSibling.classList.toggle("active");
    })    
}


function clearActive(){
    for(let x = 0; x < mainElement.length; x++){
        conElement[x].classList.remove("active");
    }
}