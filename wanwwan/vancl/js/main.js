var React=require("react");
var ReactDOM=require("react-dom");
var Home=require("./Home");
var HomeHeader=require("./HomeHeader");
var FooterNav=require("./footerNav");

var Main=React.createClass({
    render:function(){
        return (
            <div id="wrap">
                <header id="header"></header>
                <section id="section"></section>
                <footer id="footer"></footer>
            </div>
        )
    }
});
ReactDOM.render(<Main></Main>,document.getElementById("app"));
ReactDOM.render(<HomeHeader/>,document.getElementById("header"));
ReactDOM.render(<Home/>,document.getElementById("section"));
ReactDOM.render(<FooterNav/>,document.getElementById("footer"));

