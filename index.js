const bodyE1 = document.querySelector("body");
bodyE1.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanE1 = document.createElement("span");
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";
    const size = Math.random()*100;
    spanE1.style.width =size + "px";
    spanE1.style.height =size + "px";
    bodyE1.appendChild(spanE1);
    setTimeout(()=>{
        spanE1.remove();
    }, 3000);
})

const hourE1 = document.getElementById("hour")
const minuteE1 = document.getElementById("minutes")
const secondE1 = document.getElementById("seconds")
const ampmE1 = document.getElementById("ampm")
function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";
    if(h > 12){
        h = h-12;
        ampm = "PM";
    }
    h = h<10? "0" + h : h;
    m = m<10? "0" + m : m;
    s = s<10? "0" + s : s;
    
    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    },1000);
}
updateClock();

const containerE1 = document.querySelector(".container");

const quotes = ["Do not be proud of wealth, people, relations and friends, or youth. All these are snatched by time in the blink of an eye. Giving up this illusory world, know and attain the supreme. --Adi Sankara",
"Life engenders life. Energy creates energy. It is by spending oneself that one becomes rich. --Sarah Bernhardt ",
"Be Kinder to yourself. And then let your kindness flood the world.-- Pema Chodron",
"Being is enlightenment, Becoming is Ignorance. But you have been taught to become this, to become that. And the mind is so cunning, And the ways of the Ego are so subtle that it even turns Godliness, Nirvana, Enlightenment, Truth, into goals; It starts asking how to acheive them. -OSHO",
"We do not have to improve ourselves; we just have to let go of what blocks our heart. -- Jack Kornfield.",
"Love is the real work of our life. It is our spiritual path. It is key to our growth and evolution. -- Robert Holden.",
"The only spiritual life you need is not to react. To be calm is the greatest asset in the world. When you are perfectly calm,time stops. There is no time, karma stops, samskaras stop. Everything becomes null and void. -- Ramana Maharshi",
"The one who plant trees, knowing that he will never sit in their shade, has atleast started to understand the meaning of life. --Rabindranath Tagore",
"Be the change that you wish to see in the world. --Mahatma Gandhi",
"Speak the truth in such a way that it is pleasing to others. Do not speak the truth in a manner injurious to others. Never speak untruth, though it may be pleasant. This is the eternal path of morality and dharma.--Bhagavad Gita"];

let quoteIndex = 0;
let characterIndex = 0;

updateText();
function updateText(){
    characterIndex++;
    containerE1.innerHTML = `<h1> ${quotes[quoteIndex].slice(0,characterIndex)}</h1>`;
    
    if(characterIndex === quotes[quoteIndex].length){
        quoteIndex++;
        characterIndex = 0 ;
    }
    setTimeout(updateText,200);
}