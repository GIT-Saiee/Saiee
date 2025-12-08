import {PageFlip} from "../page-flip.module.js";
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
 pageFlip1.loadFromImages(['images/n13.png','images/n0.png','images/n1.png','images/n2.png','images/n3.png','images/n4.png','images/n5.png','images/n6.png','images/n7.png','images/n8.png','images/n9.png','images/n10.png','images/n11.png','images/n12.png','images/n13.png']);
});