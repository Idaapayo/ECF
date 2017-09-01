$(document).ready(function() {
  $("form#employee-names").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#username").val();
    var inputtedSerial = $("input#staffno").val();
    var inputtedDepart = $("input#depart").val();

    $(".username").text(inputtedName);
    $(".staffno").text(inputtedSerial);
    $(".depart").text(inputtedDepart);

    $(".text").show();

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


    if ((disbursed === 0)) {
      alert('As you have no loans with us, you are cleared pending final approval. An e-mail has been sent to the head of department for finalisation')
    } else if ((result === 0)) {

      alert("As you have repaid all loans with us, you are cleared pending final approval. An e-mail has been sent to the head of department for finalisation")
    } else if (repaid < disbursed) {

      alert("You are currently not cleared due to the pending loan repayment. An e-mail has been sent to the head of department for follow up")
      $(".issue2").text("Uncleared loan amount: " + result)
    } else {
      alert("Kindly fill the fields with your loan details. If you have no loans please indicate zero(0) in all fields")
    }
  });

  $("form#checkbox").submit(function(event) {
    event.preventDefault();



    if ($("#rid").is(':checked') && ($("#rhouse").is(':checked'))) {

      alert("You've been cleared awaiting final approval. An e-mail has been sent to the head of the department awaiting approval.")

    } else if ($("#uid").is(':checked') || ($("#uhouse").is(':checked'))) {

      alert("You are currently not cleared due to the unreturned company's assets. An e-mail has been sent to the head of the department for follow up.")
      $(".issue1").text("House: " + "Unreturned")
    } else {
      alert("Kindly make a selection on the checkboxes.")
    }
  })

});
