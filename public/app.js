
$(document).on('click', '.scrape', function(){
    $.get( '/scrape', function (req, res) {
        console.log(res);
    }).then(function(data) {
        window.location.href = '/';
    });
 });


//Delete article button
$(".delete").on("click", function() {
  console.log("Delete Clicked!");
    var id = $(this).attr("id");
    $.ajax({
        method: "POST",
        url: "/articles/delete/" + id
    }).done(function(data) {
        window.location.href =  "/saved"
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
        window.location.href =  "/"
        console.log("Updated!");
    })
});


