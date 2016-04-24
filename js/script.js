$(document).ready(function(){
    generateGrid();
    
    window.setInterval(function(){
        
        $('.gen').on('mouseenter', function(){
            $(this).addClass('colored')
        });
    });
    
    $('button').on('click', function(){
        var inputW = getGridW();
        var inputH = getGridH();
        generateGrid(inputW, inputH);
    });
    
});

function generateGrid(width = 16, height = 16){
    $('.gen').remove();
    $('.iWrapper').remove();
    
    for (var i = 0; i < width; i++) {
        $("#container").append("<div class='iWrapper' id=" + i +"></div>")
        for (var y = 0; y < height; y++) {
            $("div #" + i).append("<div class='gen'></div>");
        }
    }
}

function getGridW(){
    var inputW = window.prompt("Enter the new width below:");
    return inputW;
}

function getGridH(){
    var inputH = window.prompt("Enter the new height below:");
    return inputH;
}