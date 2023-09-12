import {PageFlip} from "./page-flip.module.js";
document.addEventListener('DOMContentLoaded', function() {

   const pageFlip1 = new PageFlip(
     document.getElementById("demoBookExample1"),
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
 pageFlip1.loadFromImages(['images/c15.png','images/c1.png','images/c2.png','images/c3.png','images/c4.png','images/c5.png','images/c6.png','images/c7.png','images/c8.png','images/c9.png','images/c10.png','images/c11.png','images/c12.png','images/c13.png','images/c14.png','images/c15.png']);
});