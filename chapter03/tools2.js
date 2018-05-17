
var tools_2 = {

    add:function(x,y){
        return x+y;
    },
    sayHello:function(){
        return "Hello Node.js";
    }

}

//使用这种暴露的方式会使外部使用简便
module.exports = tools_2;