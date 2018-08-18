// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".button-dvr").on("click", function(event) {
      var id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: id
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $("#addNewBurger").on("click", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim()
      };

        $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });