// // // https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
// // $(document).ready(function() {


// // 
// // });
// $('#submit').on('click', function(){
// event.preventDefault();
// dropdownPick = $('#search-type').val();
// userInput = $('#search-keyword').val()
//  $.ajax({
//    type: "GET",
//    url: 'https://api.spotify.com/v1/search?q='+userInput+'&type=' + dropdownPick
//  }).done(function(data, response){
//    // console.log(userInput);
//    $.each(data.albums.items, function(index, item){
//     console.log(item);
//     // if($.inArray(item, userInput) === -1) {
//       $('#results').append("<li>"+ item.name + "</li>");

//       // $('results').append("<li>" + item.name +"</li>")
//     // }
//    })
//  })
// })

// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
$(document).ready(function() {

  $('#submit_button').on('click', function(event) {
    event.preventDefault();
    search = $('#search-keyword').val();
    console.log(search);
    dropdownPick = $('#search-type').val();
    console.log(dropdownPick);

    $.ajax({
      type: 'GET',
      url: 'https://api.spotify.com/v1/search?q=' + search +'&type=' + dropdownPick
    }).done(function(data, response) {
      $.each(data.albums.items, function (index, item) {
        console.log(item);
      $('#results').append("<li>" + item.name + "</li>")
    })
    })
  })
});
