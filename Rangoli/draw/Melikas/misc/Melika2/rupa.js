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
   
     
 
 pageFlip2.loadFromImages(['../images/melika2/all15.png','../images/melika2/all.png', '../images/melika2/all1.png','../images/melika2/all2.png','../images/melika2/all3.png', '../images/melika2/all4.png','../images/melika2/all5.png','../images/melika2/all6.png', '../images/melika2/all7.png','../images/melika2/all8.png','../images/melika2/all9.png', '../images/melika2/all10.png','../images/melika2/all11.png','../images/melika2/all12.png', '../images/melika2/all13.png','../images/melika2/all14.png','../images/melika2/all15.png']);
    }); 