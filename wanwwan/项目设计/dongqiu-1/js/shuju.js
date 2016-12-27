init();
function init(){
	var _ul = $('#headerUl');
	var _ulScore = $('.content-club').find('ul');
	var _liScore = _ulScore.find('li').clone(false);
	
	var _ulShoot = $('.content-shoot').find('ul');
	var _liShoot = _ulShoot.find('li').clone(false);
	
	var _ulHelp = $('.content-help').find('ul');
	var _liHelp = _ulHelp.find('li').clone(false);
	
	var _ulGame = $('.content-game').find('ul');
	var _liGame = _ulGame.find('li').clone(false);
	//滑动模块
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
			noSwiping : true,
			onSlideChangeEnd:function(swiper){
			var index = swiper.activeIndex;
				$("#navUl").find("li").eq(index).addClass("active").siblings().removeClass("active");
			}
		});
		
		$("#headerUl").find("li").on("touchend",function(){
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			headerSwiper.slideTo(index, 300, true);//切换到第一个slide，速度为1秒
		});
		$("#navUl").find("li").on("touchend",function(){
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			navSwiper.slideTo(index, 300, true);//切换到第一个slide，速度为1秒
		});
	}
	//获取json数据
	getData();
	function getData(){
		$.get("../json/shuju_league.json",function(data){
			console.log(data);
			drawData(data);
		});
		/*$.ajax({
			type:"post",
			url:"../json/shuju_league.json",
			async:true,
			success : function(data){
				drawData(data);
			}
		});*/
	}
	
	//渲染数据
	function drawData(data){
		console.log(data['shoot']);
		var _li = '';
		for(var i in data['league']){
			_li = document.createElement('li');
			if(i == 0){
				_li.className = 'active';
			}
			_li.innerText = data['league'][i]['name'];
			_ul.append(_li);
		}
		_ulScore.empty();
		_ulShoot.empty();
		_ulHelp.empty();
		_ulGame.empty();
		//积分榜
		for(var i in data['league'][0]['club']){
			
			var liScore = _liScore.clone(false);
			
			var imgSrc = data['league'][0]['club'][i]['img'];
			var rank = data['league'][0]['club'][i]['rank'];
			var name = data['league'][0]['club'][i]['name-ch'];
			var sai = data['league'][0]['club'][i]['sai'];
			var success = data['league'][0]['club'][i]['success'];
			var tie = data['league'][0]['club'][i]['tie'];
			var lose = data['league'][0]['club'][i]['lose'];
			var goal = data['league'][0]['club'][i]['goal'];
			var score = data['league'][0]['club'][i]['score'];
			
			
			
			liScore.find('.rank').text(rank);
			liScore.find('img').attr('src',imgSrc);
			liScore.find('.name').text(name);
			liScore.find('.sai').text(sai);
			liScore.find('.success').text(success);
			liScore.find('.tie').text(tie);
			liScore.find('.lose').text(lose);
			liScore.find('.goal').text(goal);
			liScore.find('.score').text(score);
			
			_ulScore.append(liScore);
			
		}
		//射手榜
		for(var i in data['shoot']){
			
			var liShoot = _liShoot.clone(false);
			
			var imgSrc = data['shoot'][i]["img"];
			var name = (parseInt(i)+1) + data['shoot'][i]['name'];
			var club = data['shoot'][i]['club'];
			var goal = data['shoot'][i]['goal'];
			
			
			liShoot.find('.club').text(club);
			liShoot.find('img').attr('src',imgSrc);
			liShoot.find('.star').text(name);
			liShoot.find('.goal').text(goal);
			
			_ulShoot.append(liShoot);
			
		}
		//助攻榜
		for(var i in data['help']){
			
			var liHelp = _liHelp.clone(false);
			
			var imgSrc = data['help'][i]["img"];
			var name = (parseInt(i)+1) + data['help'][i]['name'];
			var club = data['help'][i]['club'];
			var help = data['help'][i]['help'];
			
			
			liHelp.find('.club').text(club);
			liHelp.find('img').attr('src',imgSrc);
			liHelp.find('.star').text(name);
			liHelp.find('.help').text(help);
			
			_ulHelp.append(liHelp);
			
		}
		//赛程
		for(var i in data['game']){
			
			var liGame = _liGame.clone(false);
			
			var imgLeft = data['game'][i]["img-l"];
			var imgRight = data['game'][i]["img-r"];
			var left = data['game'][i]['left'];
			var right = data['game'][i]['right'];
			var dat = data['game'][i]['date'];
			var time = data['game'][i]['time'];
			var result = data['game'][i]['result'];
			
			
			liGame.find('.date').text(dat);
			liGame.find('.left').attr('src',imgLeft);
			liGame.find('.right').attr('src',imgRight);
			liGame.find('.club-left').text(left);
			liGame.find('.club-right').text(right);
			liGame.find('.result').text(result);
			liGame.find('.time').text(time);
			
			_ulGame.append(liGame);
			
		}
		
		
		
		
		
		
		swiper();
	}
}





