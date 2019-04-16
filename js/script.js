var favorites = [];
var currentUrl = "";

// Click Handlers
$("#search-button").click(function(){
   $('.gallery').empty();
   var searchTerm = $('#search-term').val();
   var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
   $.ajax({
       url: url,
       method: "GET",
       success: function(response){
           for (var i = 0; i < response.data.length; i++) {
               $('.gallery').append(
                   '<div class=".container1">\
                       <img src='+ response.data[i].images.fixed_width.url +'style="max-width:100%;cursor:pointer" onclick="onClick(this)" class="modal-hover-opacity">\
                   </div>'
               );
           }
       },
   });
});

$("#icon").click(function(){
    favorites.push(currentUrl);
    console.log(favorites[0]);
    $("#icon").css("background","red");
});

$("#closeModal").click(function(){
    $(".modal").css("display","none");
});

$("#Favorites").click(function(){
    $('.gallery').empty();
    for (var i = 0; i < favorites.length; i++) {
        $('.gallery').append(
            '<div class=".container1" data-backdrop="static">\
                <img src='+ favorites[i] +'style="max-width:100%;cursor:pointer" onclick="onClick(this)" class="modal-hover-opacity">\
             </div>'
        );
    }
});

$("#icon").css("background","white");

$('.modal-hover-opacity').click(function(){
	$('#modal01').modal({
		backdrop: 'static'
    });
});

// functions
function onClick(element) {
 document.getElementById("img01").src = element.src;
 document.getElementById("modal01").style.display = "block";
 currentUrl = element.src;
}