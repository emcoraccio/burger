$(document).ready(function () {

  $("button.change-devoured").on("click", function (event) {

    
  });

  $("button#add_burger").on("click", function (event) {
    let newBurgerName = $("input#burger").val().trim();

    let newBurger = {
      burger_name: newBurgerName
    }

    $.post("/api/burgers", newBurger, function (data, status) {
      console.log(data);
      console.log("new burger added");
      
    });

  });


});