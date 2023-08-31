const maincontainerE1 = document.querySelector(".main-container");
let song_container_count = Number(maincontainerE1.id);
for (let index = 0; index < song_container_count; index++) {
    const element = document.createElement("div");
    element.id=index;
    element.classList.add("song-container");
    element.classList.add("active");
    maincontainerE1.appendChild(element);
}
const songcontainerE1s = document.querySelectorAll(".song-container");
songcontainerE1s.forEach(songcontainerE1 => {

    //adding Title to song-container
    const titleE1 = document.createElement("h4");
    var file = new XMLHttpRequest();     
    var host = window.location.protocol + "//" + window.location.host;       
    url=host+"/Saiee/Songs/Titles/"+String(`title${songcontainerE1.id}.txt`);
    console.log(url)
    file.open("GET",url,true);
    file.send();
    file.onload= function() {
        if (file.readyState === XMLHttpRequest.DONE) {  // Makes sure the document is ready to parse
            if (file.status === 200) {  // Makes sure it's found the file
                text = file.responseText;
                titleE1.innerText = text;
            }
        }
    }
    songcontainerE1.appendChild(titleE1);
    const imgE1 = document.createElement("img");
    imgE1.src="Meaning/meaning.png";
    imgE1.title="Meaning"
    imgE1.classList.add("img");
    songcontainerE1.appendChild(imgE1);

    //adding write-icon to song-container
    const writeiconE1 = document.createElement("i");
    writeiconE1.classList.add("fa-solid");
    writeiconE1.classList.add("fa-pen" );
    writeiconE1.classList.add("write-icon");
    writeiconE1.classList.add("active");
    writeiconE1.title="lyrics";
    songcontainerE1.appendChild(writeiconE1);

    //adding text-container to song-container
    const textcontainerE1 = document.createElement("div");
    textcontainerE1.classList.add("text-container");
    textcontainerE1.classList.add("active");
    textcontainerE1.id ="t"+`${songcontainerE1.id}`;
    console.log(textcontainerE1.id);
    songcontainerE1.appendChild(textcontainerE1);

    //adding audio to song-container
    const audioE1 = document.createElement("audio");
    
    audioE1.controls = true;
    audioE1.src =`audio/song${songcontainerE1.id}.mp4`;
    audioE1.innerHTML="<a href=audio/"+String(`song${songcontainerE1.id}.mp4`)+"> Download audio </a>";
    audioE1.classList.add("audio");
    audioE1.classList.add("active");
    console.log(audioE1);
    songcontainerE1.appendChild(audioE1);


    writeiconE1.addEventListener("click",()=>{
    console.log(songcontainerE1);
    if(writeiconE1.classList.contains("active")){

        songcontainerE1.classList.remove("active");
        writeiconE1.classList.remove("active");
        textcontainerE1.classList.remove("active");
        load(); 
        
        function load() {
            var file = new XMLHttpRequest();
            var host = window.location.protocol + "//" + window.location.host;
            url=host+"/Saiee/Songs/Lyrics/"+String(`song${songcontainerE1.id}.html`);
            console.log(url)
            file.open("GET",url,true);
            file.send();
            file.onload= function() {
                if (file.readyState === XMLHttpRequest.DONE) {  // Makes sure the document is ready to parse
                    if (file.status === 200) {  // Makes sure it's found the file
                        text = file.responseText;
                        document.getElementById(textcontainerE1.id).innerHTML = text;
                    }
                }
            }
        }
        audioE1.classList.remove("active");
    }
    else{    

        songcontainerE1.classList.add("active");        
        writeiconE1.classList.add("active");
        textcontainerE1.classList.add("active");
        audioE1.classList.add("active");
        
    }
    
    
});


imgE1.addEventListener("click",()=>{
    console.log(songcontainerE1);
    if(imgE1.classList.contains("active")){

        songcontainerE1.classList.remove("active");
        imgE1.classList.remove("active");
        textcontainerE1.classList.remove("active");
        load(); 
        
        function load() {
            var file = new XMLHttpRequest();
            var host = window.location.protocol + "//" + window.location.host;
            url=host+"/Saiee/Songs/Meaning/"+String(`meaning${songcontainerE1.id}.html`);
            console.log(url)
            file.open("GET",url,true);
            file.send();
            file.onload= function() {
                if (file.readyState === XMLHttpRequest.DONE) {  // Makes sure the document is ready to parse
                    if (file.status === 200) {  // Makes sure it's found the file
                        text = file.responseText;
                        document.getElementById(textcontainerE1.id).innerHTML = text;
                    }
                }
            }
        }
        audioE1.classList.remove("active");
    }
    else{    

        songcontainerE1.classList.add("active");        
        imgE1.classList.add("active");
        textcontainerE1.classList.add("active");
        audioE1.classList.add("active");
        
    }
    
    
});


});

generateColors();

function generateColors(){
    songcontainerE1s.forEach((containerE1)=>{
        const newColorCode = randomColor()
        containerE1.style.backgroundColor="#" + newColorCode;
    })
}
function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = "";
    for(let index=0;index < colorCodeLength;index++){
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode +=chars.substring(randomNum,randomNum+1);
    }
    return colorCode;
}
