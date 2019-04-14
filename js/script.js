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
                    '<img id="myImg" src='+ response.data[i].images.fixed_width.url +' >\
                     <div id="myModal" class="modal">\
                        <span class="close">&times;</span>\
                        <img class="modal-content" id="img01">\
                        <div id="caption"></div>\
                     </div>'
                );
                var modal = document.getElementById('myModal');
                // Get the image and insert it inside the modal - use its "alt" text as a caption
                var img = document.getElementById('myImg');
                var modalImg = document.getElementById("img01");
                var captionText = document.getElementById("caption");
                img.onclick = function(){
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }
                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];
                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                }
            }
        },
    });
});

// $('.gallery').append(
                // '<div class="col-md-offset-4 col-md-4 thumb">\
                //     <a class="thumbnail" href =' + response.data[i].images.fixed_width.url + '>\
                //         <img src=' + response.data[i].images.fixed_width.url + '/>\
                //     </a>\
                // </div>'
                // Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }