var myApp=angular.module("myModule",["ngRoute"]);

myApp.controller("myController",["$scope","$http",function($scope,$http){
	$http.get("js/data.json").then(function(response){
		
		$scope.products=response.data;
		
	})
	$http.get("js/data2.json").then(function(response){
		console.log(response.data);
		$scope.goods=response.data;
		var haodongxi=["Domain","Price","Clicks","Update","Status"];
		for(var i=0;i<haodongxi.length;i++){
			console.log(haodongxi[i]);
			$scope.sortColumn=haodongxi[i];
			$scope.reverseSort=false;
			$scope.sortData=function(column){
			$scope.reverseSort=($scope.sortColumn==column) ? !$scope.reverseSort : false;
				$scope.sortColumn=column;
			}
			$scope.getSortClass=function(column){
				if($scope.sortColumn==column){
					return $scope.reverseSort ? "arrow-down" : "arrow-up";
				}
			}
		}
	})
	$http.get("http://10.9.169.186:3000/query").then(function(response){
		
		$scope.shops=response.data;
	})
	$http.get("http://10.9.169.186:3000/near").then(function(response){
		$scope.nears=response.data;
	})
	$scope.incrementLikes=function(pru){
		pru.Clicks++;
	}
	$scope.incrementDislikes=function(pru){
		pru.Clicks--;
	}
	
}])
/*myApp.config(function($routeProvider){
	$routeProvider.when("/kongzhitai",{
		template:"我是控制台"
	})
	.when("/wenzipaiban",{
		template:"我是文字排版"
	})
	.when("/biaoge",{
		template:""
	})
})*/
$(".content").find("li").on("click",function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".showInfo").find(".info").eq($(this).index()).css("display","block").siblings().css("display","none");
})

