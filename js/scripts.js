$(document).ready(function () {
  $("form#employee-names").submit(function (event) {
    event.preventDefault();
    var inputtedName = $("input#employee-name").val();
    var inputtedSerial =$("input#employee-serial").val();

    $(".employee-name").text(inputtedName);
    $(".employee-serial").text(inputtedSerial);


  })

});
