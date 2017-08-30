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

});
