/*  Program Name: Recipe Display Application
    Author: Linda Rowe
    Date: July 28, 2017
    Filename: myRecipe.js */
    
    /* global $ */
    //displays the next element after the current target
        $("#starting_message").fadeOut(3100);
    function display(event) {
        $(event.currentTarget).next().fadeIn("slow");
        } //end of display
        
    //attach event listener to h3 elements to invoke display function when clicked
        $("h3").click(display);
        
    //displays and animates the next element after the current target
        function display2(event) {
            $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
            
    }//end of display2

        $("h2").css("color", "red");
        
        $(".ingr").children("li").css("color", "green");
        
        $(".instr").children("p").css("color", "green");
        
          //attach event listener to h3 elements to invoke display funtion when clicked
        $("h3").click(display2);
    
    //change the background color h3 element when mouse hovers over it
        $("h3").hover(function() {
            $(this).css("background-color", "orange");
            }, function() { 
            $(this).css ("background-color", "tan");
            });
    
    //hover() will trigger display2 method each time mouse hovers over header
        $("h3").hover(display2);
        
