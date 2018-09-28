$(function(){
    var bgimage = new Image();      
    bgimage.src="../public/images/careers.jpg";       
    $(bgimage).load(function(){
  		$('.careers-hero').addClass('visible');                  
    });
});