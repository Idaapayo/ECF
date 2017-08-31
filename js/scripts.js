$(document).ready(function () {
  $("form#employee-names").submit(function (event) {
    event.preventDefault();
    var inputtedName = $("input#username").val();
    var inputtedSerial =$("input#staffno").val();
    var inputtedDepart = $("input#depart").val();

    $(".username").text(inputtedName);
    $(".staffno").text(inputtedSerial);
    $(".depart").text(inputtedDepart);


  })
  $(".no").click(function() {
    $(".dates").hide();

  });

  $(".yes").click(function(){
    $(".dates").show();
  });


var disbursed = ("input#disbursed");
var repaid = ("input#repaid");
function Amount(disbursed, repaid) {
  this.disbursed = disbursed;
  this.repaid = repaid;
}

function difference () {
  var result = (disbursed - repaid)
  return(result)
}

if($(disbursed === 0)
 alert('As you have no loans with us, you are cleared pending final approval. An e-mail has been sent to the head of department for finalisation')

  else if
    $(result === 0) {
      alert("As you have no loans with us, you are cleared pending final approval. An e-mail has been sent to the head of department for finalisation")
  }
    else if
     $(repaid < disbursed) {
       alert("You are currently not cleared due to the pending loan repayment. An e-mail has been sent to the head of department for follow up")
     }
   });
});



// if (true) {
//
// } else {
//
// }
