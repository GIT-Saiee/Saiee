const bodyE1 = document.querySelector("body");
console.log(bodyE1);
let recipe_count = Number(bodyE1.id);
console.log(recipe_count);
for (let index = 0; index < recipe_count; index++) {
    const anchorE1 = document.createElement("a");
    url="menu/"+String(`recipe${index}.html`)
    anchorE1.setAttribute("href",url);
    anchorE1.style.textDecoration = "none";
    
    const mainContainerE1 = document.createElement("div");
    mainContainerE1.classList.add("main-container");
    mainContainerE1.setAttribute("id",String(index));
    
    anchorE1.appendChild(mainContainerE1)
    bodyE1.appendChild(anchorE1);
    console.log("created 3 mains")
}
console.log(bodyE1);
const recipecontainerE1s = document.querySelectorAll(".main-container");
console.log(recipecontainerE1s);
recipecontainerE1s.forEach(recipecontainerE1 => {
    var file = new XMLHttpRequest();            
    url="http://127.0.0.1:3000/Cooking/nuts/recipes/sunflower_recipes/info/"+String(`info${Number(recipecontainerE1.getAttribute("id"))}.txt`);
    file.open("GET",url,true);
    file.send();
    file.onload= function() {
        if (file.readyState === XMLHttpRequest.DONE) {  // Makes sure the document is ready to parse
            if (file.status === 200) {  // Makes sure it's found the file
                text = file.responseText;
                const itemDetails = JSON.parse(text);

                // infoContainerE1.innerText = text;
                infoContainerE1.innerText = itemDetails.Info;
                titleContainerE1.innerText = itemDetails.Title;
            }
        }
    }

    //addding Title to recipe container
    const titleContainerE1 = document.createElement("div");
    titleContainerE1.classList.add("title-container");

    //Adding info to recipe container
    const infoContainerE1 = document.createElement("div");
    infoContainerE1.classList.add("info-container");

    
    recipecontainerE1.appendChild(titleContainerE1);
    

    //Adding Image to recipe container
    const imageContainerE1 = document.createElement("div");
    imageContainerE1.classList.add("img-container");
    const imgE1 = document.createElement("img");
    imgE1.src= "images/"+String(`img${Number(recipecontainerE1.getAttribute("id"))}.jpeg`);
    imageContainerE1.appendChild(imgE1);
    recipecontainerE1.appendChild(imageContainerE1);

    recipecontainerE1.appendChild(infoContainerE1);
    
    
    
});