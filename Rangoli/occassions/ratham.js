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
 
 pageFlip1.loadFromImages(['images/ratham/ratha17.png','images/ratham/dot.png', 'images/ratham/dot1.png','images/ratham/ratha1.png','images/ratham/ratha2.png','images/ratham/ratha3.png','images/ratham/ratha4.png','images/ratham/ratha5.png','images/ratham/ratha6.png','images/ratham/ratha7.png','images/ratham/ratha8.png','images/ratham/ratha9.png','images/ratham/ratha10.png','images/ratham/ratha11.png','images/ratham/ratha12.png','images/ratham/ratha13.png','images/ratham/ratha14.png','images/ratham/ratha15.png','images/ratham/ratha16.png','images/ratham/ratha17.png']);

});