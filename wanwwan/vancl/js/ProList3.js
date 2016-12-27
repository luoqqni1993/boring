var React=require("react");
var ReactDOM=require("react-dom");
var ProList3=React.createClass({
    getInitialState:function(){
        return {
            pro:""
        }
    },
    componentWillMount:function(){
        var timer1="";
        var count1=0;
        var _this=this;
        $.ajax({
            method:"get",
            url:"json/fList.json",
            dataType:"JSON",
            beforeSend:function(){
                time1=setInterval(function(){
                    count1++;

                },1000)
            },
            success:function(data){
                clearInterval(timer1);
                var len=data.length;
                var arr=[];
                for(var i=0;i<len;i++){
                    arr.push(data[i]);
                }
                _this.setState({
                    pro:arr
                })
            }
        })
    },
    render:function(){
        var arr=this.state.pro;
        var dataArr=[];
        var len=arr.length;
        for(var i=0;i<len;i++){
            dataArr.push(<div className="t1000">
                <div className="t1001">
                    <div><a href="#"><img src={arr[i]} alt=""/></a></div>
                </div>
            </div>)
        }
        return (
            <div className="proList">
                {dataArr}
            </div>
        )
    }
})
module.exports=ProList3;
