const element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slidein";
function listener(event) {
    const l = document.createElement("li");
    switch (event.type) {
      case "animationstart":
        l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
        break;
      case "animationend":
        l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
        break;
      case "animationiteration":
        l.textContent = `New loop started at time ${event.elapsedTime}`;
        break;
    }
    document.getElementById("output").appendChild(l);
  }
  
  
  