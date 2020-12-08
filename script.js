const container = document.querySelector(".container");
const box = document.querySelectorAll(".box");

/* buttons */
const btnMenu = document.querySelector(".btnMenu");


/* settings */
const menuFrame = document.querySelector(".menuFrame");
const btnExit = document.querySelector(".btnExit");

/* settings inputs */
const textImg = document.querySelector(".textImg");
const textURL = document.querySelector(".textURL");
const imgDiv = document.querySelector(".imgDiv");
const imgPreview = document.querySelector("#imgPreview");

/* settings */
/* Open menuFrame, Exit menuFrame */

const menuFrameMagic = () => {
    if(menuFrame.style.display !== "none"){
        menuFrame.style.display = "none";
    }else{
        menuFrame.style.display = "flex";
    }
}

const windowClick = e => {
    if(e.target.className === menuFrame.className){
        menuFrameMagic();
    }else if(e.target.className === "noneyet"){
        
    }
}

menuFrameMagic();

/* image functions */
const preventD = e =>{
    return e.preventDefault();
}

const imageDrop = e =>{
    preventD(e);
    
    const file = e.dataTransfer.files[0];
    
    if(file.type.indexOf("image/")<0){
        console.log("nope");
    }else{
        const reader = new FileReader();
        
        reader.onloadend = () => {
            if(reader.error.message){
                console.log("error reading file");
                return;
            }
            
        }
        
        reader.readAsBinaryString(file);
    }
}

/* Open menuFrame, Exit menuFrame */
btnMenu.addEventListener("click", menuFrameMagic);
window.addEventListener("click", windowClick);
btnExit.addEventListener("click", menuFrameMagic);

/* image functions */
textImg.addEventListener("drop", imageDrop);
imgDiv.addEventListener("dragleave", preventD);
imgDiv.addEventListener("dragover", preventD);
imgDiv.addEventListener("dragenter", preventD);
imgDiv.addEventListener("drop", imageDrop);
