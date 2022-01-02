//situazione iniziale
$(document).ready(function(){
  $('.descrizione').slideUp('0', function () {
    
  });
  $('.descrizione1').slideUp('0', function () {
      
  });
});

//dettagli della descrizione
$(document).ready(function(){
    $('.dettagli').click(function(){
      
      $(".descrizione").slideToggle("slow");
    });
  }
 );
 $(document).ready(function(){
    $('.dettagli1').click(function(){
      
      $(".descrizione1").slideToggle("slow");
    });
  });
  //menu hamburger
  $(document).ready(function(){
    $('.hamburger').click(function(){
      
      $(".lista").slideToggle("slow");
    });
    
  });