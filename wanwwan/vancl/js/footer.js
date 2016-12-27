var React=require("react");
var ReactDOM=require("react-dom");
var Footer=React.createClass({
    render:function(){
        return (
            <div className="footer">
                <ul className="clear">
                    <li><a href="">
                        <img src="img/help1.png" alt=""/>
                    </a></li>
                    <li><a href="">
                        <img src="img/download1.png" alt=""/>
                    </a></li>
                    <li><a href="">
                        <img src="img/weixin1.png" alt=""/>
                    </a></li>
                    <li><a href="">
                        <img src="img/pcsite1.png" alt=""/>
                    </a></li>
                    <div className="copyright">
                        <h3>京ICP证100557号</h3>
                    </div>
                </ul>
            </div>
        )
    }
})
module.exports=Footer;
