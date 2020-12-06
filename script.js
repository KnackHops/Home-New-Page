const container = document.querySelector(".container");
const box = document.querySelectorAll(".box");

/* buttons */
const btnMenu = document.querySelector(".btnMenu");

/* settings */
const menuFrame = document.querySelector(".menuFrame");

const chckBoxes = () => {
    
}

const menuFrameMagic = () => {
    if(menuFrame.style.display !== "none"){
        menuFrame.style.display = "none";
    }else{
        menuFrame.style.display = "flex";
    }
}

const clickExit = e => {
    if(e.target.className === menuFrame.className){
        menuFrameMagic();
    }else if(e.target.className === "noneyet"){
        
    }
}

menuFrameMagic();

btnMenu.addEventListener("click", menuFrameMagic);
window.addEventListener("click", clickExit);