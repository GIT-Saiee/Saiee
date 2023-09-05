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
  pageFlip1.loadFromImages(['../images/melika2/m5.png','../images/melika2/m1.png', '../images/melika2/m2.png','../images/melika2/m3.png','../images/melika2/m4.png','../images/melika2/m5.png']);
});