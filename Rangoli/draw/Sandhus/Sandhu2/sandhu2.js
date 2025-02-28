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

 pageFlip1.loadFromImages(['images/19.jpg','images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/11.jpg','images/12.jpg','images/13.jpg','images/14.jpg','images/15.jpg','images/16.jpg','images/17.jpg','images/18.jpg','images/19.jpg']);
});