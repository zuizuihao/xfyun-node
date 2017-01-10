/**
 * xfyun client
 */

const xfyun = require('bindings')('xfyun');

/**
 * params {username, password, appid, workdir, lang, accent, sample_rate}
 * callback callback fn
 */
function _iat(params, callback) {
  // xfyun.iat("u", // username
  //   "p", // password
  //   "appid = 5864ae2d, work_dir = .", // login params
  //   "sub = iat, domain = iat, language = zh_cn, accent = mandarin, sample_rate = 16000, result_type = plain, result_encoding = utf8",
  //   "wav/iflytek01.wav", // audio file
  //   function (result) {
  //     console.log("I get ...", result)
  //   })
    xfyun.iat(params.username,
    params.password, // password
    `appid = ${params.appid}, work_dir = ${params.workdir}`, // login params
    `sub = iat, domain = iat, language = ${params.lang}, accent = ${params.accent}, sample_rate = ${params.sample_rate}, result_type = plain, result_encoding = utf8`,
    params.audio_file, // audio file
    callback);
}

exports.iat = _iat