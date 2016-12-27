init();
//初始化
function init(){
	var di=$(".No1").clone(false);
	$.get('json/zhibo.json',function(data){
//			console.log(data.match[1].left.src);
			$(".chen").empty();
		
		for(var i in data.match){
			var _div=di.clone();
//			console.log(data.match[i])
			console.log(i)
					_div.find(".guo1").html(data.match[i].left.country);//国家1
					_div.find("#img1").attr("src","img/"+data.match[i].left.src);//国旗1
					_div.find(".yuxuan").html(data.match[i].center.cor);//预选
					_div.find(".grade1").html(data.match[i].center.p[0].grade1)//比分1
					_div.find(".grade2").html(data.match[i].center.p[2].grade2)//比分2
					_div.find(".now").html(data.match[i].center.now);//完场
					_div.find(".guo2").html(data.match[i].right.country);	//国家2
					_div.find("#img2").attr("src","img/"+data.match[i].right.src);//国旗2
				
				
				$(".chen").append(_div);
			
	}
});
	swiper();
	function swiper(){
		var headerSwiper = new Swiper("#headerSwiper",{
			resistanceRatio:0,
			onSlideChangeEnd:function(swiper){
				var index = swiper.activeIndex;
				$("#headerUl").find("li").eq(index).addClass("active").siblings().removeClass("active");
			}
		});
		var navSwiper = new Swiper("#navSwiper",{
			resistanceRatio:0,
			onSlideChangeEnd:function(swiper){
			var index = swiper.activeIndex;
				$("#navUl").find("li").eq(index).addClass("active").siblings().removeClass("active");
			}
		});
		
		$("#headerUl").find("li").on("touchend",function(){
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			headerSwiper.slideTo(index, 300, true);//切换到第一个slide，速度为1秒
				$.get('json/zhibo.json',function(data){
//			console.log(data.match[1].left.src);
			$(".chen").empty();
		
		for(var i in data.match){
			var _div=di.clone();
//			console.log(data.match[i])
			console.log(i)
					_div.find(".guo1").html(data.match[i].left.country);//国家1
					_div.find("#img1").attr("src","img/"+data.match[i].left.src);//国旗1
					_div.find(".yuxuan").html(data.match[i].center.cor);//预选
					_div.find(".grade1").html(data.match[i].center.p[0].grade1)//比分1
					_div.find(".grade2").html(data.match[i].center.p[2].grade2)//比分2
					_div.find(".now").html(data.match[i].center.now);//完场
					_div.find(".guo2").html(data.match[i].right.country);	//国家2
					_div.find("#img2").attr("src","img/"+data.match[i].right.src);//国旗2
				
				
				$(".chen").append(_div);
			
	}
});
		});
		$("#navUl").find("li").on("touchend",function(){
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			navSwiper.slideTo(index, 300, true);//切换到第一个slide，速度为1秒
		});
	}
}
//$.ajax({
//	type:"post",
//	url:"../json/zhibo.json",
//	async:true,
//
//	success:function(data){
//		console.log(data);
//	}
//	
//});



