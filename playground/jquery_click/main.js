var isBottomBlue = true;

$(document).ready(function() {

    $("#uniqueDiv").click(function() {
        if (isBottomBlue === true) {
            $(".bottom").css("background", "orchid");
            isBottomBlue = false;
        } else {
            $(".bottom").css("background", "blue");
            isBottomBlue = true;
        }
        console.log("Changed the value of isBottomBlue to ", isBottomBlue, "!!!")
        
    });

    $(".bottom").click(function(){
        $(".top").fadeToggle(2000)
        $(".bottom").css("width", "500px");
    });
    
});