init();
init1();
function init(){
	var _li = $(".tuijian").find('ul').find('li').clone(false);
	var _ul = $(".tuijian").find('ul');
	
	$.get('../json/quanzi.json',function(data){
		_ul.empty();
		for(var i in data["quanzi"]["tuijian"]){
			var li = _li.clone(false);
			
			var imgSrc = data["quanzi"]["tuijian"][i]["img"];
			var name = data["quanzi"]["tuijian"][i]['name'];
			var guanzhu = data["quanzi"]["tuijian"][i]['guanzhu'];
			var tiezi = data["quanzi"]["tuijian"][i]['tiezi'];
			
			li.find('img').attr('src',imgSrc);
			li.find('h3').text(name);
			li.find('p').text("关注 "+guanzhu);
			li.find('span').text("贴子 "+tiezi);
			
			_ul.append(li);
		}
	})
	var onSet = true;
	$('.test').on('touchend',function(){
		if(onSet){
			$('.tuijian').css('display','block');
			$(".test").find("span").removeClass("icon-sjyou");
			$(".test").find("span").addClass("icon-sjxia");
		}else{
			$('.tuijian').css('display','none');
			$(".test").find("span").removeClass("icon-sjxia");
			$(".test").find("span").addClass("icon-sjyou");
		}
		onSet = !onSet;
	})
};




function init1(){
	var _li = $(".xingqu").find('ul').find('li').clone(false);
	var _ul = $(".xingqu").find('ul');
	
	$.get('../json/quanzi.json',function(data){
		_ul.empty();
		for(var i in data["quanzi"]["xingqu"]){
			var li = _li.clone(false);
			
			var imgSrc = data["quanzi"]["xingqu"][i]["img"];
			var name = data["quanzi"]["xingqu"][i]['name'];
			var guanzhu = data["quanzi"]["xingqu"][i]['guanzhu'];
			var tiezi = data["quanzi"]["xingqu"][i]['tiezi'];
			
			li.find('img').attr('src',imgSrc);
			li.find('h3').text(name);
			li.find('p').text("关注 "+guanzhu);
			li.find('span').text("贴子 "+tiezi);
			
			_ul.append(li);
		}
	})
	var onSet = true;
	$('.test1').on('touchend',function(){
		if(onSet){
			$('.xingqu').css('display','none');
			$(".test1").find("span").removeClass("icon-sjxia");
			$(".test1").find("span").addClass("icon-sjyou");
		}else{
			$('.xingqu').css('display','block');
			$(".test1").find("span").removeClass("icon-sjyou");
			$(".test1").find("span").addClass("icon-sjxia");
		}
		onSet = !onSet;
	})
}

