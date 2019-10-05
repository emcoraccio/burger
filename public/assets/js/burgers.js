$(document).ready(function () {

  $("button.change-devoured").on("click", function (event) {

    let id = $(this).data("id");
    let newDevoured = $(this).data("new-devoured");

    let newState = {};

    if (newDevoured) {
      newState.devoured = false;
    }
    else {
      newState.devoured = true;
    }

    $.ajax(`api/burgers/${id}`, 
    {
      type: "PUT",
      data: newState
    }).then( 
      function() {

        location.reload();
      });

  });

  $("button#add_burger").on("click", function (event) {
    let newBurgerName = $("input#burger").val().trim();

    let newBurger = {
      burger_name: newBurgerName
    };

    $.post("/api/burgers", newBurger, function (data, status) {
      console.log(data);
      console.log("new burger added");
      
    });

  });


});