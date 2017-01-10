var xfyun = require('bindings')('xfyun');

xfyun.iat("u", // username
  "p", // password
  "appid = 5864ae2d, work_dir = .", // login params
  "sub = iat, domain = iat, language = zh_cn, accent = mandarin, sample_rate = 16000, result_type = plain, result_encoding = utf8",
  "wav/iflytek01.wav", // audio file
  function (result) {
    console.log(result)
  })


// xfyun(function(userName, password, loginParams, ){
//   console.log(msg); // 'hello world'
// });