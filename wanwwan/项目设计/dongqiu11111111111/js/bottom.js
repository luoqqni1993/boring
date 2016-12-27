function change(){
	$('.change').eq(0).on('touchend',function(){
		window.location = '../football/index.html';
	})
	$('.change').eq(1).on('touchend',function(){
		window.location = 'zhibo.html';
	})
	$('.change').eq(2).on('touchend',function(){
		window.location = 'login.html';
	})
	$('.change').eq(3).on('touchend',function(){
		window.location = '../dqd/html/quanzi.html';
	})
	$('.change').eq(4).on('touchend',function(){
		window.location = '../dongqiu-1/html/shuju.html';
	})
}
change();