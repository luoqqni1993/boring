var React=require("react");
var ReactDOM=require("react-dom");
var Banner=require("./banner");
var T10=require("./t10");
var T11=require("./t11");
var T12=require("./t12");
var ProList=require("./ProList");
var T13=require("./t13");
var T14=require("./t14");
var ProList2=require("./ProList2");
var T15=require("./t15");
var T16=require("./t16");
var ProList3=require("./ProList3");
var T17=require("./t17");
var T18=require("./t18");
var ProList4=require("./ProList4");
var AllAndtop=require("./allAndtop");
var Login=require("./Login");
var Footer=require("./footer");
var Home=React.createClass({
    render:function(){
        return (
            <div>
                <Banner/>
                <T10/>
                <T11/>
                <T12/>
                <ProList/>
                <T13/>
                <T14/>
                <ProList2/>
                <T15/>
                <T16/>
                <ProList3/>
                <T17/>
                <T18/>
                <ProList4/>
                <AllAndtop/>
                <Login/>
                <Footer/>
            </div>
        )
    }
})
module.exports=Home;