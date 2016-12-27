var http=require('http');
var url=require('url');

var qs=require('querystring');

var dbApi=require('./mydb.js');     

http.createServer(function(request,response){
	response.writeHead('200',{'Content-Type':'application/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
	var _url=url.parse(request.url).pathname;
	switch(_url){ 
     //获取首页的列表  get
	  case "/query":
      console.log(dbApi);
      response.write(JSON.stringify(dbApi.query()));
      response.end();

	  break;
    //获取附近的列表 get
    case "/near":
     
      response.write(JSON.stringify(dbApi.near()));
      response.end();

    break;
    //搜索内容接口  get
	  case "/search":

      var id=url.parse(request.url).search;
      id=id.substring(1,id.length);
      id=qs.parse(id);

      var s=dbApi.search(id);
      response.write(JSON.stringify(s));
	    response.end();
	    break;
      //获取安全码接口 get请求
      case "/registerCode":
        var phone=url.parse(request.url).query;
        phone=phone.substring(6,phone.length);
        console.log(phone);
        var Num=""; 
        for(var i=0;i<6;i++) 
        { 
        Num+=Math.floor(Math.random()*10); 
        } 
        dbApi.saveCode(Num);
        response.write(Num.toString());
        response.end();
        
      break;
      //快速注册接口 post  传入 手机号,安全码
      case "/register":
        var postData='';
        request.addListener("data", function (data) {
                postData += data;
        });
            
        request.addListener("end", function () {
                var query = qs.parse(postData);
                console.log(query);
                console.log(postData);
                var s=dbApi.checkCode(query.safeCode);
                console.log(s);
                response.write(JSON.stringify(s));
                response.end();
        });
        
      break;
      //检查用户是否存在接口 get请求
      case "/checkuser":
      var username=url.parse(request.url).query;
      username=qs.parse(username);
      var s=dbApi.checkUser(username);
      response.write(JSON.stringify(s));
      response.end();
      break;

        //登录接口 post  传入 userName,passWord
        case "/login":
        var postData='';
        request.addListener("data", function (data) {
                postData += data;
        });
            
        request.addListener("end", function () {
                console.log(postData);
                var query = qs.parse(postData);
                console.log(query);
                var message=dbApi.login(query);
                console.log(message);
                response.write(JSON.stringify(message));
                response.end();
        });
        
        break;
    case "/list":
    //分页接口   传入 pageIndex  pageSize
      var _param=url.parse(request.url).query;
//    console.log(_param);
      // qs ---->  querystring把字符串转换成对象
      _param=qs.parse(_param);
//    console.log(_param)
      //调用mydb分页具体实现方法
      var res = dbApi.page(_param);

      response.write(JSON.stringify(res));
      response.end();
      break;

     case "/favicon.ico":

     break;
     
     case '/detail':
      	var _param=url.parse(request.url).query;
//    	console.log(_param);
      	// qs ---->  querystring把字符串转换成对象
      	_param=qs.parse(_param);
      	var res = dbApi.getDetail(_param);
      	response.write(JSON.stringify(res));
      	response.end();
     break;
     	
     //1.支付接口 post输入cardId , password,密码,金额 money
     case "/pay":
     response.writeHead('200',{'Content-Type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'});
     var postData='';
        request.addListener("data", function (data) {
                postData += data;
        });
            
      request.addListener("end", function () {
                console.log(postData);
                var query = qs.parse(postData);
                console.log(query);
                var styles={
                    div:'width:100%;height:300px;display:flex;justify-content:center;align-items:center;flex-direction:column;',
                    img:'width:100％;height:200px;display:block;color:green;font-size:30px',
                    btn:'display:block;width:120px;height:40px;border:none;outline:none;font-size:28px;background-color:green;color:#ffffff;'
                }

                var body='<div style="'+styles.div+'"><span  style="'+styles.img+'">付款成功！！！</span><a href="http://127.0.0.1:8080"><button style="'+styles.btn+'">返回</button></a></div>'
                setTimeout(function(){
                    response.write(body);
                response.end();
                },2000);
                
                
       });

     break;
	  
	}
}).listen(3000);
console.log("db server is started");