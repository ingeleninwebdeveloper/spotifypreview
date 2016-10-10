

 
 var template = Handlebars.compile($('#canciones').html());
  
  var show= function(){
    var artist_name= $('#input').val();
   
    $.getJSON("https://api.spotify.com/v1/search?q="+artist_name+"&type=track", function(data){
      $('.content').html(template({ canciones: data }));
      
      
     
    });
  }

  $('#input').on('keyup', function(e){
    if (e.which===13){
     show();
     $('#input').val('');
    }
  });

