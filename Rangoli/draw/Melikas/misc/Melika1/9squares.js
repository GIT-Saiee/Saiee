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
   
     
 
 pageFlip2.loadFromImages(['../images/melika1/23.png','../images/melika1/1.png', '../images/melika1/2.png','../images/melika1/3.png','../images/melika1/4.png', '../images/melika1/5.png','../images/melika1/6.png','../images/melika1/7.png', '../images/melika1/8.png','../images/melika1/9.png','../images/melika1/10.png', '../images/melika1/11.png','../images/melika1/12.png','../images/melika1/13.png', '../images/melika1/14.png','../images/melika1/15.png','../images/melika1/16.png','../images/melika1/17.png','../images/melika1/18.png', '../images/melika1/19.png','../images/melika1/20.png','../images/melika1/21.png', '../images/melika1/22.png','../images/melika1/23.png']);
    }); 