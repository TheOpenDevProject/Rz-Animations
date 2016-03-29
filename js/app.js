RZT = {
	Page_Init: $(document).on("ready",function(){
		var loadDelay = 1000;
		$(".about-tutor ul li").each(function(i, item){
			
			setTimeout(function(){
				$(item).animate({opacity:1},450);
			},500 + (i * 500));
		})
	})
}