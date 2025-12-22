//import {PageFlip} from "https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.module.min.js";
import {PageFlip} from "../page-flip.module.js";
document.addEventListener('DOMContentLoaded', function() {

    const pageFlip2 = new PageFlip(
        document.getElementById("demoBookExample2"),
        {
            width: 300, // base page width
            height: 300, // base page height

            size: "stretch", // page display size
            // set threshold values:
            minWidth: 315,
            maxWidth: 500,
            minHeight: 420,
            maxHeight: 900,

            maxShadowOpacity: 0.5, // Half shadow intensity
            showCover: true,
            mobileScrollSupport: false // disable content scrolling on mobile devices
        }
    );



    pageFlip2.loadFromImages(['images/color2.png','images/final_star_dot.png','images/final_star_explain.png','images/0.png', 'images/1.png','images/2.png','images/3.png', 'images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/c0.png', 'images/c1.png','images/c2.png','images/c3.png', 'images/c4.png','images/star1.png','images/color1.png','images/color2.png']);
}); 
