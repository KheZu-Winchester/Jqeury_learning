$('document').ready(function(){
  $('#clearSearch').hide();
  $("input").keypress(function(){
    $('#clearSearch').show() 
  }); 
})


$("document").ready(function () {
  $("#btn").click(function(){
     $("#modal").modal("show")
  })
});


let Id = 0;
let Totals = [];
console.log(Totals);

$('#first_form').submit(function(e) {
e.preventDefault();
let ID = $("input[name='id']").val();
let Product = $("input[name='product']").val();
let Quantity = $("input[name='quantity']").val();
let Price = $("input[name='price']").val();
let Result = Quantity * Price
let total = {
  ID : ID,
  Product : Product,
  Quantity : Quantity,
  Price : Price,
  Result : Result
 }
Totals.push(total);
console.log(Totals);

$(".error").remove();
if (Product.length = "") {
  return $('#product').after('<span class="error style="font-size:10px;color:red;margin-left:20px">Product is required</span>');
}                                                         
if (Quantity <= 0) {
  return $('#add').after('<span class="error" style="font-size:10px;color:red;margin-left:20px">Quantity is required</span>');
}
if (Price <= 0) { 
  return  $('#price').after('<span class="error" style="font-size:10px;color:red;margin-left:20px">Price is required</span>');
}


let arrSum =((Totals)=>{
    let sum = 0;
    for (let i = 0; i < Totals.length; i++) {
      sum += Totals[i].Result;
    }
    return sum;
  })
// Totals.forEach(function(total, index) {
//   let sum =0;
//   sum += Totals[total.Result,index]
// });

console.log(arrSum(Totals));
console.log(typeof arrSum(Totals));
let tableRow = '<tr><td id="id" class="pad px-4" style="padding:10px;"><li class="ms-3"></li>'+'</td><td style="display: none">'+ID+'</td> <td class="pad px-5" style="padding: 10px;">'+Product+'</td> <td class="pad px-4" style="padding: 10px;text-align:center">'+ Quantity.toLocaleString() +'</td><td style="display: none">'+Price+'</td> <td id="total" class="pad px-5" style="padding: 10px;text-align:center">'+ Result+'</td><td class="pad px-3" style="padding: 10px"><img id="edit" src="./edit.png"><img id="delete" src="./bin.png"></td>+'+'</tr>'
$('tbody').prepend(tableRow);
// console.log(priceArr);

$("#edit").click(function(){
  $("#modal").modal("show");
  var currentRow=$(this).closest("tr");
    total.ID = $("input[name='id']").val(currentRow.find("td:eq(1)").text());
    total.Product = $("input[name='product']").val(currentRow.find("td:eq(2)").text());
    total.Quantity = $("input[name='quantity']").val(currentRow.find("td:eq(3)").text());
    total.Price = $("input[name='price']").val(currentRow.find("td:eq(4)").text());
  $(this).closest("tr").remove();
  let editValue = Totals.findIndex(Totals=> Totals.ID == total.ID)
  if (editValue !== -1){
    total.ID = $("input[name='id']").val();
    total.Product = $("input[name='product']").val();
    total.Quantity = $("input[name='quantity']").val();
    total.Price = $("input[name='price']").val(); 
    Totals.splice(editValue,1)
    console.log(jQuery.hasData(ID)); 
  }
  // let tableRow = '<tr><td id="id" class="pad px-4" style="padding:10px;"><li class="ms-3"></li>'+'</td> <td class="pad px-5" style="padding: 10px;">'+Product+'</td> <td class="pad px-4" style="padding: 10px;text-align:center">'+ Quantity.toLocaleString() +'</td> <td id="total" class="pad px-5" style="padding: 10px;text-align:center">'+ Result+'</td><td class="pad px-3" style="padding: 10px"><img id="edit" src="./edit.png"><img id="delete" src="./bin.png"></td>+'+'</tr>'
  // $('tbody').prepend(tableRow);
  console.log(total.Quantity);
})

$("#delete").click(function(){
   $(this).closest("tr").remove();
  let price_index = Totals.findIndex(Totals=> Totals.ID == total.ID)
  if (price_index !== -1) {
  Totals.splice(price_index ,1)
}
  $("#result").text(arrSum(Totals));
})

$("#result").text(arrSum(Totals));


console.log(Id,Product,Price,Quantity);     
$("input[name='id']").val("");
$("input[name='product']").val("");
$("input[name='quantity']").val("");
$("input[name='price']").val(""); 
$("#modal").modal("hide");
});


$(document).ready(function () {
  $('#subtract').click(function () {
      let input = $(this).parent().find('#quantity');
      let count = parseInt(input.val()) - 1;
      count = count < 1 ? 1 : count;
      input.val(count);
      input.change();
      return false;
  })
})


$(document).ready(function () {
  $('#add').click(function () {
      let input = $(this).parent().find('#quantity');
      let count = parseInt(input.val()) + 1;
      count = count < 1 ? 1 : count;
      input.val(count)
      input.change();
      return false;
  })
})


$(document).ready(function(){
  $("#clearSearch").click(function(){
    $("#input").val("");
    $('#clearSearch').hide();
    });
  });
  

$("#input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });




// $(document).ready(function() {

  // $("#dialog").dialog({
  //               title : " This one is title",
  //               draggable : false,
  //               resizable : false,
  //               closeOnEscape : false,
  //               modal : false,
  //               autoOpen : true,
  //           })
  //           $("#btn1").click(function(){
  //               const modal= $("#dialog").dialog("option","autoOpen")

  //       })
  //           $("#btn2").click(function(){
  //               $("#dialog").remove();
  //       })
  //   $('#first_form').submit(function(e) {
  //     e.preventDefault();
  //     var first_name = $('#first_name').val();
  //     var last_name = $('#last_name').val();
  //     var email = $('#email').val();
  //     var password = $('#password').val();
  
  //     $(".error").remove();
  
  //     if (first_name.length < 1) {
  //       $('#first_name').after('<span class="error">This field is required</span>');
  //     }
  //     if (last_name.length < 1) {
  //       $('#last_name').after('<span class="error">This field is required</span>');
  //     }
  //     if (email.length < 1) {
  //       $('#email').after('<span class="error">This field is required</span>');
  //     } else {
  //       var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
  //       var validEmail = regEx.test(email);
  //       if (!validEmail) {
  //         $('#email').after('<span class="error">Enter a valid email</span>');
  //       }
  //     }
  //     if (password.length < 8) {
  //       $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
  //     }
  //   });
  
  // });
  
  
// $("document").ready(function(){
//     $("input").autocomplete({
//         source : ["html","Css","java","javascript","C",'C++','php','python','node js','express','mongoDB','react','vue','angular','blazer']
//     },{delay :1000,minLength: 2,autoFocus: true})
//     $("#dialog").dialog({
//             title : " Title using property",
//             draggable : false,
//             resizable : false,
//             closeOnEscape : false,
//             modal : false,
//             autoOpen : true,
//         })
//         $("#btn1").click(function(){
//             const modal= $("#dialog").dialog("option","autoOpen")
//             alert(modal);
//     })
//         $("#btn2").click(function(){
//             $("#dialog").dialog("option","autoOpen",false)
        
// $("document").ready(function(){
//     $("#btn1").click(function(){
//         $("#dialog").dialog("open")
//     })
// })
// $("#dialog").dialog({
//     title : " Title using property",
//     draggable : false,
//     resizable : false,
//     closeOnEscape : false,
//     modal : true,
//     autoOpen : false,
// })

// Jquery_widgets

                            //Datetime_picker 
 // $("#date").datepicker({
    //     showOtherMonths : true,
    //     selectOtherMonths : true,
    //     showButtonPanel : true,
    //     changeMonth : true,
    //     changeYear : true,
    //     minDate :  new Date(2022,0,1),
    //     maxDate : new Date(2026,12,1),
    //     numberOfMonths : 2,
    //     numberOfYears : 2
    // })

    // $('#div1').accordion({
    //     collapsible : true,
    //     icons : {
    //         header : "ui-icon-caret-1-s",activeHeader : "ui-icon-caret-1-n"},
    //         animate : 1000,
    //         event : "mouseover"
    //    });



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