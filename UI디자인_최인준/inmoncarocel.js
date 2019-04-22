			$(document).ready(function() {
			var slidedelay = 4000;	// 슬라이드 속도

			var count = 0;
			var aboutme = null;
			var animate = null;
			var menulength = $('.carosel_nav_menu').length;
			var cardSize = $('.carosel_content').css('width').replace(/[^-\d\.]/g, '');
			var menuSize = $('.carosel_nav').css('width').replace(/[^-\d\.]/g, '');
			var cardHeight = $('.carosel_content').css('height').replace(/[^-\d\.]/g, '');
			var menuHeight = $('.carosel_nav > li').css('height');

			var slideMaxSize = cardSize*menulength;

			var rightslideinv;
			var leftslideinv;

			if($('.inmon_carosel').is('.rightslide')){
				rightslideinv = setInterval(function(){right_slide();},slidedelay);
			}else if($('.inmon_carosel').is('.leftslide')){
				leftslideinv = setInterval(function(){leftslide();},slidedelay);
			}else{
				clearTimeout();
			}
			
			$('.carocel_slide').css({width: slideMaxSize+'px',height: cardHeight+'px'});
			$('.carosel_slide_card').css({width: cardSize+'px', height : cardHeight+'px'});
			$('#carosel_nav_bar').css({width : menuSize+'px',height : menuHeight});
			$('.carosel_nav').css('width', menuSize*(menulength+1)+'px');
			$('.carosel_nav > li').css('width', menuSize+'px');
			$('.carosel_view').css({width: cardSize+'px',height: cardHeight+'px'});
			
			$('.carosel_rightbutton').click(function(event) {
				right_slide();
			});
			$('.carosel_leftbutton').click(function(event) {
				left_slide();
			});
			$('.carosel_nav_menu').click(function(event) {
				target_slide($(this).index());
			});
			function target_slide(num){
				var indexcount = num;
				var temp = indexcount;
				indexcount = indexcount-count;
				count = temp;
				$('.carocel_slide').animate({left: '-='+(indexcount*cardSize)+'px'});
				$('#carosel_nav_bar').animate({left: '+='+(indexcount*menuSize)+'px'});
			}
			function right_slide(){
				if(count<menulength-1){
					$('.carocel_slide').animate({left: '-='+cardSize+'px'});
					$('#carosel_nav_bar').animate({left: '+='+menuSize+'px'});
					count++;
				}else{
					target_slide(0);
				}
			}
			function left_slide(){
				if(count>0){
					$('.carocel_slide').animate({left: '+='+cardSize+'px'});
					$('#carosel_nav_bar').animate({left: '-='+menuSize+'px'});
					count--;
				}else{
					target_slide(menulength-1);
				}
			}
			var playflag = true;
			$('#playbtn').click(function(event) {
				if(playflag){
					$('#playbtn > i:first-child').css('display', 'none');
					$('#playbtn > i:last-child').css('display', 'inline');
					clearInterval(rightslideinv);
					playflag = false;				
				}else{
					$('#playbtn > i:first-child').css('display', 'inline');
					$('#playbtn > i:last-child').css('display', 'none');
					rightslideinv = setInterval(function(){right_slide();},4000);
					playflag = true;
				}
			});
		});