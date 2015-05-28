// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
// $(document).ready(function() {
// });

$('#submit').on('click', function(){
  searching();
});

function searching () {
  var artists = [];

  $.ajax({
    type: 'GET',
    url: 'https://api.spotify.com/v1/search?q='+input+'&type='+searchType
  }).done(function(response){
//     info = $('#search-keyword').val()
// console.log(this)
// console.log(artists)
// console.log(searchType)
//   })


// }


// var input = $('#search-keyword').val()
// var searchType = $('#search-type').val()