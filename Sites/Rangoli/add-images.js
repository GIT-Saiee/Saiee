$(document).ready(function() {
    var files = {'jpg':28};
    var html = "", src;
for (var ext in files){
     for (var i = 0; i < files[ext]; i++){
         src = "flower/" +(i+1) + "." + ext
         html += '<li><a href="#"><img src="'+ src +'" width=100 height=100/></a></li>';

     }

    $("#Home-Images").prepend(html );
}}); 
