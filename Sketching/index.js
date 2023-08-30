
const rotateIconE1s= document.querySelectorAll(".rotate-icon");
const imageE1s= document.querySelectorAll(".sketch-img");
rotateIconE1s.forEach(element => {
    var curr_degree=0;
    if(element.addEventListener("click",(event)=>{
           console.log(element.clientHeight);
           console.log(element.parentElement.offsetHeight);
           curr_degree += 90;
           element.parentElement.firstChild.nextSibling.style.transform=`rotate(${curr_degree}deg)`;   
        }));
    
});

