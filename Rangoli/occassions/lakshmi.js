import {PageFlip} from "./page-flip.module.js";
document.addEventListener('DOMContentLoaded', function() {

 const pageFlip1 = new PageFlip(
    document.getElementById("SahasradalaPadmaKolam"),
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

 pageFlip1.loadFromImages(['images/SPK/sahasra11.png','images/SPK/sahasra.png','images/SPK/sahasra1.png','images/SPK/sahasra2.png','images/SPK/sahasra3.png','images/SPK/sahasra4.png','images/SPK/sahasra5.png','images/SPK/sahasra6.png','images/SPK/sahasra7.png','images/SPK/sahasra8.png','images/SPK/sahasra9.png','images/SPK/sahasra10.png','images/SPK/sahasra11.png']);
});