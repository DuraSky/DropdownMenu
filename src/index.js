import "./style.css"

const menuImg = document.getElementById("menuImg")
const menuContent = document.querySelector(".expandable")

menuImg.addEventListener("click", ()=>{
    if(menuContent.classList.contains("hidden")){
        menuContent.classList.remove("hidden");
        menuContent.classList.add("visible")
    }else{
        menuContent.classList.remove("visible")

        menuContent.classList.add("hidden");
    }
})