$(document).ready(function(){
    generateGrid();
});

function generateGrid(width = 16, height = 16){
    for (var i = 0; i < width; i++) {
        $("#container").append("<div class='gen' id=" + i +"></div>")
        for (var y = 0; y < height; y++) {
            $("div #" + i).append("<div></div>");
        }
    }
}