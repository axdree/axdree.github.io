$("#feedback-form").submit(function(e){
  e.preventDefault();
  // Retrieve input value and places in innerHTML of modal id
  $("#modalTitle").html($("#title").val());
  $("#modalDate").html($("#date").val());
  $("#modalFname").html($("#firstName").val());
  $("#modalLname").html($("#lastName").val());
  $("#modalEmail").html($("#email").val());
  $("#modalSubject").html($("#subject").val());
  $("#modalMessage").html($("#message").val());
  // Enable Modal
  $("#confirm-submit").modal("show")
})

// Leaving as alert only as form posting not requirement
$("#submit").click(function(){
  if(!alert('Form Submitted Successfully!\nClick Ok to Return to the Home Page!')){
    window.location.replace("../../index.html");
  }
})
