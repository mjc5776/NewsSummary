
//Delete article button
$(".delete").on("click", function() {
  console.log("Delete Clicked!");
    var id = $(this).attr("id");
    $.ajax({
        method: "POST",
        url: "/articles/delete/" + id
    }).done(function(data) {
        console.log("Updated!");
        
    })
});

//Save Article button
$(".savearticle").on("click", function() {
    console.log("Save Clicked!");
    var id = $(this).attr("id");
    $.ajax({
        method: "POST",
        url: "/articles/save/" + id
    }).done(function(data) {
        window.location = "/"
        console.log("Updated!");
    })
});

