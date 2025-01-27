const SCROLL_SPEED = 0.9;
const CANVAS_WIDTH = 2800;
// const NOISE_SPEED = 0.004; // The frequency. Smaller for flat slopes, higher for jagged spikes.
// const NOISE_AMOUNT = 5;    // The amplitude. The amount the noise affects the movement.

const bubblespecs = [
  { s: .6, x: 1134, y: 45, name: "cosmos", desc: "Cosmos Flower"  }, 
  { s: .6, x: 620, y: 271, name: "dosa", desc: "Dosakaya" }, 
  { s: .6, x: 1761, y: 172, name: "dragon_fly", desc: "Orange Dragon Fly"  },
  { s: .6, x: 2000, y: 79, name: "green_lotus", desc: "It has Lotus Pattern "  },
  { s: .6, x: 1504, y: 344, name: "green1", desc: "Green House Construction"  },
  { s: .6, x: 1271, y: 616, name: "green2", desc: "GreenHouse Construction" },
  { s: .6, x: 1356,  y: 35, name: "greenhouse", desc: "Green House to keep Saplings"  },
  { s: .6, x: 276,  y: 156, name: "hibi_1", desc: "Yellow Hibiscus"  },
  { s: .6, x: 1210, y: 365, name: "hibi_2", desc: "Wonderful Maroon centered Hibiscus"  },
  { s: .6, x: 444,  y: 193, name: "hibi", desc: "Hibiscus"  },
  { s: .6, x: 545, y: 287, name: "ladybug", desc: "Essential Garden Insect LadyBug"  },
  { s: .8, x: 1303, y: 193, name: "mari", desc: "Mari Golds to attract Bees"  },
  { s: .8, x: 207,  y: 88, name: "methi", desc: "Methi Plant"   },
  { s: .8, x: 1263,  y: 45, name: "mirchi", desc: "Peppers from garden"  },
  { s: .8, x: 1356,  y: 40, name: "pom", desc: "Pomegrante broken as it riped on the tree itself"   },
  { s: .8, x: 129,  y: 357, name: "small_methi", desc: "Methi Sapling"  },
  { s: .8, x: 1440, y: 342, name: "smallsun", desc: "Sun Flower sapling"  },
  { s: .8, x: 2929, y: 90, name: "sun_flower", desc: "Sun Flower"  },
  { s: .8, x: 135, y: 90, name: "swiss", desc: "Swiss Chard"  },
  { s: .8, x: 1376, y: 20, name: "tom", desc: "tomatoplant"   },
  { s: .8, x: 1954, y: 182, name: "tulasi", desc: "Tulasi Plant"  },
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
    constructor(index, {x,y,s = 1, name, desc}) { 
        this.index = index;
        this.x = x;
        this.y = y;
        this.scale = s;

        // this.noiseSeedX = Math.floor(Math.random() * 64000);
        // this.noiseSeedY = Math.floor(Math.random() * 64000);
    

        this.hreflink = document.createElement("a");
        this.hreflink.href = `images/jpgs/big_jpgs/${name}.jpg`;
        this.hreflink.setAttribute("data-lightbox", "my-bubbles");
        this.hreflink.setAttribute("data-title", desc);
        this.el = document.createElement("div");
        this.el.className = `bubble ${name}`;
        this.hreflink.appendChild(this.el)
        bubblesEl.appendChild(this.hreflink);
    }
    

    update() { 
        this.x = (this.x <  -200) ? CANVAS_WIDTH : this.x - SCROLL_SPEED; 
        this.el.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
        // this.noiseSeedX += NOISE_SPEED;
        // this.noiseSeedY += NOISE_SPEED;
      
        // // The noise library we're using: https://github.com/josephg/noisejs
        // let randomX = noise.simplex2(this.noiseSeedX, 0);
        // let randomY = noise.simplex2(this.noiseSeedY, 0);
      
        // this.x -= SCROLL_SPEED;
        // this.xWithNoise = this.x + (randomX * NOISE_AMOUNT);
        // this.yWithNoise = this.y + (randomY * NOISE_AMOUNT)
      
        // if (this.x <  -200) {
        //   this.x = CANVAS_WIDTH;
        // }
      
        // this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px) scale(${this.scale})`;
    }
}      
// For perlin noise
// noise.seed(Math.floor(Math.random() * 64000));

// Will be called every frame. Updates the bubble positionn.
const bubbles = new Bubbles(bubblespecs);

