var addon = require('bindings')('xfyun');

addon(function(msg){
  console.log(msg); // 'hello world'
});