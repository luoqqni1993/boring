var React=require("react");
var ReactDOM=require("react-dom");
var HomeHeader=React.createClass({
    render:function(){
        return (
            <div className="index-search">
                <form action="" className="search-form">
                    <input type="submit" className="magnify iconfont icon-fangdajing"/>
                    <input type="search" className="search-input" placeholder="穆旦"/>
                </form>
                <a href="" className="index-message"></a>
            </div>
        )
    }
});
module.exports=HomeHeader;
