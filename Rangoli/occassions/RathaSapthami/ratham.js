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
 
 pageFlip1.loadFromImages(['images/ratha18.png','images/dot.png', 'images/dot1.png','images/ratha1.png','images/ratha2.png','images/ratha3.png','images/ratha4.png','images/ratha5.png','images/ratha6.png','images/ratha7.png','images/ratha8.png','images/ratha9.png','images/ratha10.png','images/ratha11.png','images/ratha12.png','images/ratha13.png','images/ratha14.png','images/ratha15.png','images/ratha16.png','images/ratha17.png']);

});