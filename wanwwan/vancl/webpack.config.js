/**
 * Created by Administrator on 2016/11/27.
 */
module.exports={
    entry:"./js/main.js",
    output:{
        path:"./",
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"jsx-loader"
            }
        ]
    }
}
