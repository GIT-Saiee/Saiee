const SCROLL_SPEED = 0.9;
const CANVAS_WIDTH = 2800;


const bubblespecs = [
  { s: .6, x: 1134, y: 45  }, 
  { s: .6, x: 1620, y: 271 }, 
  { s: .6, x: 1761, y: 372 },
  { s: .6, x: 2499, y: 79  },
  { s: .6, x: 2704, y: 334 },
  { s: .6, x: 2271, y: 356 },
  { s: .6, x: 795,  y: 226 },
  { s: .6, x: 276,  y: 256 },
  { s: .6, x: 1210, y: 365 },
  { s: .6, x: 444,  y: 193 },
  { s: .6, x: 2545, y: 387 },
  { s: .8, x: 1303, y: 193 },
  { s: .8, x: 907,  y: 88  },
  { s: .8, x: 633,  y: 320 },
  { s: .8, x: 323,  y: 60  },
  { s: .8, x: 129,  y: 357 },
  { s: .8, x: 1440, y: 342 },
  { s: .8, x: 1929, y: 293 },
  { s: .8, x: 2135, y: 198 },
  { s: .8, x: 2276, y: 82  },
  { s: .8, x: 2654, y: 182 },
  { s: .8, x: 2783, y: 60  },
  {        x: 1519, y: 118 },
];

const bubblesEl = document.querySelector('.bubbles');


class Bubbles {
    constructor(specs) {    
        this.bubbles = [];
        
        specs.forEach((spec, index) => {
          this.bubbles.push(new Bubble(index, spec));
        })
        requestAnimationFrame(this.update.bind(this));
     } // For creating the individual bubbles.

    update() {
        // Call each individual bubble's update method
        this.bubbles.forEach(bubble => bubble.update());
    
        // Queue up another update() method call on the next frame
        this.raf = requestAnimationFrame(this.update.bind(this))
    }      // Will be called every frame.
}
  
class Bubble {
    constructor(index, {x,y,s = 1}) { 
        this.index = index;
        this.x = x;
        this.y = y;
        this.scale = s;

        this.hreflink = document.createElement("a");
        this.hreflink.href = "images/jpgs/big_jpgs/dosa.jpg";
        this.hreflink.setAttribute("data-lightbox", "my-bubbles");
        this.hreflink.setAttribute("data-title", "Dosakaya");
        this.el = document.createElement("div");
        this.el.className = `bubble logo${this.index + 1}`;
        this.hreflink.appendChild(this.el)
        bubblesEl.appendChild(this.hreflink);
    }
    update() { 
        this.x = (this.x <  -200) ? CANVAS_WIDTH : this.x - SCROLL_SPEED; 
        this.el.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }
}      // Will be called every frame. Updates the bubble positionn.

const bubbles = new Bubbles(bubblespecs);

