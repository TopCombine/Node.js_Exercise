/**
 * Created by Administrator on 2017/7/3 0003.
 */
var fs = require('fs');
var events = require('events');

var EventEmitter = new events.EventEmitter();


function getMime() {
    fs.readFile('mime.json', function (err, data) {
        //发布广播
        EventEmitter.emit('data', data)
    });
}

getMime();

/**
 *  监听广播
 * */
EventEmitter.on('data', function (mime) {
    console.log(mime.toString());
})
