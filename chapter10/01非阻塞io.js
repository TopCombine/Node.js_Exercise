/**
 * Created by Administrator on 2017/7/3 0003.
 */

var fs=require('fs');

//io
// console.log('1');
// fs.readFile('mime.json',function(err,data){
//    // console.log(data);
//    console.log('2');
// });
// console.log('3');

function getMime(){
    //1
    fs.readFile('mime.json',function(err,data){
        // console.log(data.toString());
        // return data;//3
    });
    //2
    return '123';
}
console.log(getMime());
