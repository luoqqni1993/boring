var React=require("react");
var ReactDOM=require("react-dom");
var count=0;
var Banner=React.createClass({
    getDefaultProps:function(){
        return {
            count : count
        }
    },
    getInitialState:function(){
      return{
          dataArr:""
      }
    },
    componentWillMount:function(){
        var that=this;
        $.ajax({
            type:"get",
            url:"json/package.json",
            dataType:"JSON",
            success:function(data){

                var len=data.length;
                var dataArr=[];
                for(var i=0;i<len;i++){
                    dataArr.push(data[i]);
                }
                that.setState({
                    dataArr:dataArr
                })
            }
        })
    },
    render:function(){
        var arr=this.state.dataArr;
        var dataArr=[];
        var len=arr.length;
        for(var i=0;i<len;i++){
            dataArr.push(<div className="swiper-slide" key={i}>
                <img src={arr[i]} alt=""/>
            </div>);
        }

        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {dataArr}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    },
    componentDidUpdate:function(){
        var swiper=new Swiper(".swiper-container",{
            pagination:".swiper-pagination",
            autoplay:1000,
            autoplayStopOnLast : false,
        })
    }
});
module.exports=Banner;
