var mySwiper=new Swiper(".swiper-container",{
	autoplay:"3000",
	pagination:".swiper-pagination",
	pagainationElement:"span"
});
var box=$(".box");
var classContent=$(".content").find("ul");
var classLidom=classContent.find("li").clone(false);
var navBox=$("nav").find("ul");
$.get("js/data.json",function(data){

	console.log(data[21].title[1]);
	box.find(".left").find("li:nth-child(1)").find("h2").text(data[16].title);
	box.find(".left").find("li:nth-child(1)").find("span").text(data[16].status);
	box.find(".left").find("li:nth-child(1)").find("del").text(data[16].number[0]);
	box.find(".left").find("li:nth-child(2)").find("img").attr("src","img/"+data[17].img);
	box.find(".left").find("li:nth-child(2)").find("h2").text(data[17].country);
	box.find(".left").find("li:nth-child(2)").find("del").text(data[17].number);
	box.find(".left").find("li:nth-child(3)").find("img").attr("src","img/"+data[19].img);
	box.find(".left").find("li:nth-child(3)").find("h2").text(data[19].country);
	box.find(".left").find("li:nth-child(3)").find("del").text(data[19].number);
	box.find(".right").find("li:nth-child(1)").find("h2").text(data[16].title);
	box.find(".right").find("li:nth-child(1)").find("span").text(data[16].status);
	box.find(".right").find("li:nth-child(1)").find("del").text(data[16].number[1]);
	box.find(".right").find("li:nth-child(2)").find("img").attr("src","img/"+data[18].img);
	box.find(".right").find("li:nth-child(2)").find("h2").text(data[18].country);
	box.find(".right").find("li:nth-child(2)").find("del").text(data[18].number);
	box.find(".right").find("li:nth-child(3)").find("img").attr("src","img/"+data[20].img);
	box.find(".right").find("li:nth-child(3)").find("h2").text(data[20].country);
	box.find(".right").find("li:nth-child(3)").find("del").text(data[20].number);
	for(var i=2;i<16;i++){
		
		var Li=classLidom.clone(false);
		
		Li.find("img").attr("src","img/"+data[i].img);
		Li.find("h2").text(data[i].title);
		Li.find("span").text(data[i].time);
		
		classContent.append(Li);
		
	}
	for(var i in data[21].title){
		var conDom=$("<li></li>");
		conDom.text(data[21].title[i]);
		navBox.append(conDom);
	}
	var num=data[21].title.length;
	navBox.width(num*1.1+"rem");
});
