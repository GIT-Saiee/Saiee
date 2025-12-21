import {PageFlip} from "../page-flip.module.js";
document.getElementById('printBookButton').addEventListener('click', function() {
    // 1. Get the page images from your book instance
    // (The exact way to get the images depends on how you set up page-flip.module.js)
    // Assuming you can get an array of image sources or elements:
    const bookContainer = document.getElementById('demoBookExample2'); // Replace with your actual book container ID
   // const pageElements = bookContainer.querySelectorAll('.flip-book'); // Replace with your actual page selector
   // console.log(pageElements);
    let printableHTML = '<html><head><title>Print Pages</title>';
    printableHTML += '<style>';
    // Optional: Add basic styling for the print preview page
    printableHTML += 'body { font-family: sans-serif; }';
    printableHTML += '.print-item { display: inline-block; margin: 10px; border: 1px solid #ccc; padding: 10px; }';
    printableHTML += 'img { max-width: 200px; height: auto; display: block; margin-bottom: 5px; }';
    printableHTML += '@media print { .no-print { display: none; } .print-item { page-break-inside: avoid; } }';
    printableHTML += '</style>';
    printableHTML += '</head><body>';
    printableHTML += '<div class="no-print">';
    printableHTML += '<h2>Select Pages to Print</h2>';
    printableHTML += '<button onclick="window.print()">Print Selected</button>';
    printableHTML += '</div>';
    const pageElements=['images/13.png','images/12.png','images/0.png', 'images/1.png','images/2.png','images/3.png', 'images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png','images/11.png','images/12.png']
    // 2. Iterate and create the HTML with checkboxe
    pageElements.forEach((page, index) => {
       
        // Find the actual image source/URL
        // This is a guess; adjust based on your HTML structure
       // const imgSrc = page.src || page.getAttribute('data-src');
         const imgSrc = page;
        printableHTML += `<div class="print-item">`;
        // Checkbox: The value is set to the index/ID, but it's not strictly necessary here since we'll print what's visible
        printableHTML += `<label class="no-print"><input type="checkbox" id="page${index}" onchange="togglePrintable(this)"> Select Page ${index + 1}</label>`;
        // Image: We use an ID to easily hide/show it based on the checkbox
        printableHTML += `<img src="${imgSrc}" id="img${index}" style="display:none;">`;
        printableHTML += `</div>`;
    });

    printableHTML += '</body></html>';

    // 3. Open a new window and write the content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printableHTML);
    printWindow.document.close();

    // 4. Add the necessary toggle function to the new window
    printWindow.togglePrintable = function(checkbox) {
        const index = checkbox.id.replace('page', '');
        const imageElement = printWindow.document.getElementById(`img${index}`);
        imageElement.style.display = checkbox.checked ? 'block' : 'none';
    };
});