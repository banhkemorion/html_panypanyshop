// JavaScript Document
$(document).ready(function() {
    $(".manu-left ul li").hover(function(){
		$(this).find("ul").fadeToggle();
		
	})
});