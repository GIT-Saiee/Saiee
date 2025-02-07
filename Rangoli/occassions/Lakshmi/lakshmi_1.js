import {PageFlip} from "../page-flip.module.js";
document.addEventListener('DOMContentLoaded', function() {

 const pageFlip1 = new PageFlip(
    document.getElementById("LakshmiKolam"),
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

 pageFlip1.loadFromImages(['../images/lakshmi/lakshmi_14.png','../images/lakshmi/lakshmi_1.png','../images/lakshmi/lakshmi_2.png','../images/lakshmi/lakshmi_3.png','../images/lakshmi/lakshmi_4.png','../images/lakshmi/lakshmi_5.png','../images/lakshmi/lakshmi_6.png','../images/lakshmi/lakshmi_7.png','../images/lakshmi/lakshmi_8.png','../images/lakshmi/lakshmi_9.png','../images/lakshmi/lakshmi_10.png','../images/lakshmi/lakshmi_11.png','../images/lakshmi/lakshmi_12.png','../images/lakshmi/lakshmi_13.png','../images/lakshmi/lakshmi_14.png']);
});