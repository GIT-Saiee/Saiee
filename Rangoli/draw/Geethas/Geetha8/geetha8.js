import {PageFlip} from "../../Geethas/page-flip.module.js";
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
 pageFlip1.loadFromImages(['images/24.png','images/0.png','images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png','images/11.png','images/12.png','images/13.png','images/14.png','images/15.png','images/16.png','images/17.png','images/18.png','images/19.png','images/20.png','images/21.png','images/22.png','images/23.png','images/24.png']);
});