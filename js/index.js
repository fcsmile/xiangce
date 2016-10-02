$(function(){
	var index=0;
	var imgbox=$('.imgbox');
	var lis=$('.imgbox li');
	var blis=$('.box li');
	var left=$('.left');
	var right=$('.right');
	var cha=$('.cha');
	var leftbox=$('.leftbox');
	var rightbox=$('.rightbox');
	var inner=$('.inner').outerWidth(true);
	imgbox.css({'zIndex':0,'opacity':0});
	blis.on('click',function(){
		imgbox.css({'zIndex':20,'opacity':1});
		lis.removeClass('active').eq($(this).index()).addClass('active');
		index=$(this).index();
	})
	imgbox.on('click',function(e){
		imgbox.css({'zIndex':0,'opacity':0});
	})
	cha.on('click',function(e){
		imgbox.css({'zIndex':0,'opacity':0});
		e.stopPropagation();
		return false;
	})
	left.on('click',function(e){
		index--;
		if(index==-1){index=lis.length-1}
		lis.removeClass('active').eq(index).addClass('active');
		e.stopPropagation();
	})
	right.on('click',function(e){
		index++;
		if(index==lis.length){index=0}
			lis.removeClass('active').eq(index).addClass('active');
		e.stopPropagation();
	})
	$(document).on('mousedown',false)
	$('.inner').on('click',function(e){
		if(e.pageX<inner/2){
			index--;
		if(index==-1){index=lis.length-1}
		lis.removeClass('active').eq(index).addClass('active');
		// e.stopPropagation();
		return false;
		}
		if(e.pageX>inner/2){
			index++;
		if(index==lis.length){index=0}
			lis.removeClass('active').eq(index).addClass('active');
		// e.stopPropagation();
		return false;
		}
		// return false;
	})
	// leftbox.on('click',function(e){
	// 	index--;
	// 	if(index==-1){index=lis.length-1}
	// 	lis.removeClass('active').eq(index).addClass('active');
	// 	e.stopPropagation();
	// 	return false;
	// })
	// rightbox.on('click',function(e){
	// 	index++;
	// 	if(index==lis.length){index=0}
	// 		lis.removeClass('active').eq(index).addClass('active');
	// 	e.stopPropagation();
	// 	return false;
	// })
})
