import {PageFlip} from "https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.module.min.js";
// import {PageFlip} from "./page-flip.module.js";
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
   
     
 
 pageFlip2.loadFromImages(['../images/melika3/8.jpg','../images/melika3/1.jpg', '../images/melika3/2.jpg','../images/melika3/3.jpg','../images/melika3/4.jpg', '../images/melika3/5.jpg','../images/melika3/6.jpg','../images/melika3/7.jpg', '../images/melika3/8.jpg']);
    }); 