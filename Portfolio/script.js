$(document).ready(function(){
  $("#container").hide();
  $("#container").fadeIn(2000);

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});
    }
  });
});
