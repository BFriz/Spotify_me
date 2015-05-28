// // https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
// $(document).ready(function() {


// 
// });
$('#submit').on('click', function(){
event.preventDefault();
var user = [];

var userInput = $('#search-keyword').val()
 $.ajax({
   type: "GET",
   url: 'https://api.spotify.com/v1/search?q='+userInput+'&type=artist'
 }).done(function(response){
   console.log(userInput);
   var inputSelect = $('#search-keyword')
   inputSelect.empty();
   $.each(response, function(index, item){
    console.log(item);
    if($.inArray(item, userInput) === -1) {
      user.push(item.region);
      inputSelect.append('<body><iframe src="https://api.spotify.com/v1/search?q='+userInput+'&type=artist"width="300" height="380" frameborder="0" allowtransparency="true"></iframe></body>');
    }
// <iframe src="https://embed.spotify.com/?uri=spotify:track:7B9S4RiRczdw1B9ddjpFe8" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
    // if($)
   })
 })
})
