init();
//初始化
function init(){
	
	swiper();
	function swiper(){
		var headerSwiper = new Swiper("#headerSwiper",{
			initialSlide :2,
			resistanceRatio:0,
			onSlideChangeEnd:function(swiper){
				var index = swiper.activeIndex;
				$("#headerUl").find("li").eq(index).addClass("active").siblings().removeClass("active");
			}
		});
		$("#headerUl").find("li").on("touchend",function(){
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			headerSwiper.slideTo(index, 300, true);//切换到第一个slide，速度为1秒
		});
	}
	
	back();
	function back(){
		$('.back').on('touchend',function(){
			history.go(-1);
		})
	}
}