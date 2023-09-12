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
console.log(songcontainerE1s.length);

songcontainerE1s.forEach(songcontainerE1 => {

    //adding Title to song-container
    const titleE1 = document.createElement("h4");
    titleE1.classList.add("title");
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
    const meaningE1 = document.createElement("img");
    meaningE1.src="Meaning/meaning.png";
    meaningE1.title="Meaning"
    meaningE1.classList.add("meaning");
    meaningE1.classList.add("active");
    songcontainerE1.appendChild(meaningE1);

    //adding write-icon to song-container
    const lyricsE1 = document.createElement("i");
    lyricsE1.classList.add("fa-solid");
    lyricsE1.classList.add("fa-pen" );
    lyricsE1.classList.add("write-icon");
    lyricsE1.classList.add("active");
    lyricsE1.title="lyrics";
    songcontainerE1.appendChild(lyricsE1);

    //adding audio to song-container
    const audioE1 = document.createElement("audio");
    
    audioE1.controls = true;
    audioE1.src =`audio/song${songcontainerE1.id}.mp4`;
    audioE1.innerHTML="<a href=audio/"+String(`song${songcontainerE1.id}.mp4`)+"> Download audio </a>";
    audioE1.classList.add("audio");
    audioE1.classList.add("active");
    console.log(audioE1);
    songcontainerE1.appendChild(audioE1);

    lyricsE1.addEventListener("click",()=>{
        if (lyricsE1.classList.contains("active")){
            console.log("hello")
            lyricsE1.classList.remove("active");
            songcontainerE1.classList.remove("active");
            const textcontainerE1 = document.createElement("div");
            textcontainerE1.classList.add("text-container1")
            textcontainerE1.id ="t"+`${songcontainerE1.id}`;

            element2 = document.querySelector(".text-container2");
            if(element2 != null){
                meaningE1.classList.add("active");
                element2.parentNode.removeChild(element2);
            }
            songcontainerE1.appendChild(textcontainerE1);

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
        } else {
            lyricsE1.classList.add("active");
            let textcontainerE1 = document.querySelector(".text-container1");
            let textcontainerE2 = document.querySelector(".text-container2");
            if(textcontainerE1!=null){
                textcontainerE1.parentNode.removeChild(textcontainerE1);  
            }
            songcontainerE1.classList.add("active");
        }
    })
    meaningE1.addEventListener("click",()=>{
        if (meaningE1.classList.contains("active")){
            meaningE1.classList.remove("active");
            songcontainerE1.classList.remove("active");
            const textcontainerE2 = document.createElement("div");
            textcontainerE2.classList.add("text-container2")
            textcontainerE2.id ="t"+`${songcontainerE1.id}`;
    
            element1 = document.querySelector(".text-container1");
            if(element1 != null){
                lyricsE1.classList.add("active")
                element1.parentNode.removeChild(element1);
            }
            
            songcontainerE1.appendChild(textcontainerE2);

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
                            document.getElementById(textcontainerE2.id).innerHTML = text;         
                        }
                    }
                }
            }
        } else {
            meaningE1.classList.add("active")
            
           let textcontainerE2 = document.querySelector(".text-container2");
           let textcontainerE1 = document.querySelector(".text-container1");
           if(textcontainerE2!=null){
                textcontainerE2.parentNode.removeChild(textcontainerE2);
           }
      
           songcontainerE1.classList.add("active");
        }
    })
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
