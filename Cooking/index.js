const gridContainer4 = document.querySelector(".grid-item4");
gridContainer4.addEventListener("click",(event)=>{
    console.log(gridContainer4.children[0]);
    gridContainer4.children[0].remove();
    console.log(gridContainer4.classList.contains("active"));
    if (!(gridContainer4.classList.contains("active"))){
        gridContainer4.classList.add("active");
        const imageContainerE1 = document.createElement("img");
        
        
        imageContainerE1.src = "wholefoods/pot.png";
        imageContainerE1.style.width=`${200}px`;
        imageContainerE1.style.height=`${200}px`;
        gridContainer4.appendChild(imageContainerE1);
    }

    else{
        gridContainer4.classList.remove("active");
        const headingE1 = document.createElement("h1");
        headingE1.textContent="Whole Foods";
        gridContainer4.appendChild(headingE1);
    }
});

