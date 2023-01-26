$("document").ready(function(){
    $("#date").datepicker({
        showOtherMonths : true,
        selectOtherMonths : true,
        showButtonPanel : true,
        changeMonth : true,
        changeYear : true,
        minDate :  new Date(2022,0,1),
        maxDate : new Date(2026,12,1),
        numberOfMonths : 2,
        numberOfYears : 2
    })
})
















 // $("#btn").click(function(){
    //     $(".div1").append("<p>This is para</p>");
    // })
    // $("#btn").click(function() { 
    //     $(".div1").append('<img src="img/download.png" height="100px" weight="100px" />');
    // });
    // $("#btn1").click(function() { 
    //     $(".div1").prepend('<p id="para ">This is para</p>');
    // });
    // $("#btn2").click(function() { 
    //     $(".div1").before('<p id="para ">This is para</p>');
    // });
    // $("#btn3").click(function() { 
    //     $(".div1").after('<p id="para ">This is para</p>');
    // });
    // $("#btn4").click(function() { 
    //     $(".div1").remove()
    // });
    // $("#btn5").click(function() { 
    //     $("body").empty();
    // });