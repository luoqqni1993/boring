var React=require("react");
var ReactDOM=require("react-dom");
var Login=React.createClass({
    render:function(){
        return (
            <div className="login">
                <div className="login-btn">
                    <a>登入</a>
                    <a>注册</a>
                </div>
            </div>
        )
    }
})
module.exports=Login;
