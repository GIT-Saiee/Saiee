function popupModal(event) {

    event.preventDefault();
    const area = event.target;
    console.log(event);
    if (area.classList == "img-active") {
        return;
    }

    else {

        const windowName = area.target;

        const textE1 = document.querySelector("h1")
        textE1.textContent = windowName;
        //removing previously clicked spots
        const imgE1s = document.querySelectorAll(".img-active");
        imgE1s.forEach(element => {
            if (element.classList.contains("img-active")) {

                element.remove();
            }
        });

        //adding the newly clicked spot 
        var x = event.clientX;
        var y = event.clientY;

        const imgE1 = document.createElement("img");

        imgE1.src = "images/dot.png";
        imgE1.classList.add("img-active");
        imgE1.style.position = 'absolute';
        imgE1.style.left = x - 25 + 'px';
        imgE1.style.top = y - 25 + 'px';


        area.appendChild(imgE1);

    }

}
window.addEventListener('resize',()=>{
    
    const imgE1s = document.querySelectorAll(".img-active");
        imgE1s.forEach(element => {
            if (element.classList.contains("img-active")) {
                console.log("hello2")
                element.remove();
            }
        });
        map = document.getElementById("AP");
    
    const imgE1 = document.createElement("img");
    imgE1.src = "images/dot.png";
    imgE1.classList.add("img-active");
    
    imgE1.style.position = 'absolute';
    imgE1.style.left =  map.offsetLeft +120+ 'px';
    imgE1.style.top =  map.offsetTop-190 + 'px';
    
    map.appendChild(imgE1);
});
document.addEventListener("DOMContentLoaded", () => {
  
    
    map = document.getElementById("AP");
    
    const imgE1 = document.createElement("img");
    imgE1.src = "images/dot.png";
    imgE1.classList.add("img-active");
    
    imgE1.style.position = 'absolute';
    imgE1.style.left =  map.offsetLeft +120+ 'px';
    imgE1.style.top =  map.offsetTop-190 + 'px';
    
    map.appendChild(imgE1);
   
});
document.querySelector("map").addEventListener("click", popupModal);

