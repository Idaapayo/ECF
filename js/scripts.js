$(document).ready(function() {
  $("form#employee-names").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#username").val();
    var inputtedSerial = $("input#staffno").val();
    var inputtedDepart = $("input#depart").val();

    $(".username").text(inputtedName);
    $(".staffno").text(inputtedSerial);
    $(".depart").text(inputtedDepart);


  })
  $(".no").click(function() {
    $(".dates").hide();


  });

  $(".yes").click(function() {
    $(".dates").show();
  });

  $("form#questions").submit(function(event) {
    event.preventDefault();

    var disbursed = parseInt($("input#disbursed").val());
    var repaid = parseInt($("input#repaid").val());
    var result = (disbursed - repaid);

    function Amount(disbursed, repaid) {
      this.disbursed = disbursed;
      this.repaid = repaid;
    }
    // Amount.prototype.result = function () {
    //   return.this.disbursed - this.repaid;


    if ((disbursed === 0)) {
      alert('As you have no loans with us, you are cleared pending final approval. An e-mail has been sent to the head of department for finalisation')
    } else if ((result === 0)) {

      alert("As you have repaid all loans with us, you are cleared pending final approval. An e-mail has been sent to the head of department for finalisation")
    } else if (repaid < disbursed) {

      alert("You are currently not cleared due to the pending loan repayment. An e-mail has been sent to the head of department for follow up")
    } else {
      alert("Kindly fill the fields with your loan details. If you have no loans please indicate zero(0) in all fields")
    }

  });

  $("form#details").submit(function(event) {
    event.preventDefault();


  });
  $("#rid").click(function(e) {
    console.log($("#rid").is(':checked'));
  });

  if ($("#rid").is(':checked')) {
    alert("checked");
  }
});
