//import {PageFlip} from "https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.module.min.js";
import {PageFlip} from "../../page-flip.module.js";
document.addEventListener('DOMContentLoaded', function() {

    const pageFlip2 = new PageFlip(
        document.getElementById("demoBookExample2"),
        {
            width: 300, // base page width
            height: 300, // base page height

            size: "stretch",
            // set threshold values:
            minWidth: 315,
            maxWidth: 500,
            minHeight: 420,
            maxHeight: 1350,

            maxShadowOpacity: 0.5, // Half shadow intensity
            showCover: true,
            mobileScrollSupport: false // disable content scrolling on mobile devices
        }
    );
   
     
    pageFlip2.loadFromImages(['images/9.jpg','images/1.jpg', 'images/2.jpg','images/3.jpg','images/4.jpg', 'images/5.jpg','images/7.jpg', 'images/8.jpg','images/9.jpg']);
}); 
