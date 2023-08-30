
const nextE1 = document.querySelector(".next")
const imgContainerE1 = document.querySelector(".img-container");
const imgsE1 = document.querySelectorAll("img");
const prevE1 = document.querySelector(".prev")
let currentImg = 1;
let timeout;
nextE1.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImage();
})
prevE1.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImage();
})
function updateImage(){
    if(currentImg > imgsE1.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgsE1.length;
    }
    imgContainerE1.style.transform = `translateX(-${(currentImg-1) *500}px)`
    timeout =setTimeout(()=>{
        currentImg++
        updateImage()
    },3000)
}