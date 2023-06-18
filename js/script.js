$(document).ready(function(){
    $(".box").on("click", function(){
        /**
         * When we click on an element that has
         * a 'box' class, this event will be fired.
         */
        var ClassNames = $(this).attr("Class").split(" ");
        var boxClass = ClassNames[0];
        var ClassName = ClassNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)"){
            //If this object is already red, turn it balck
            $("." + ClassName).css("background-color","#000");
        } else {
            //Else turn all elements with a  box class black
            //and then change the color of all elements
            // with the same class name as the clicked element
            //to red.
            $("." + boxClass).css("background-color","#000");
            $("." + ClassName).css("background-color","red");
        }
    });
});