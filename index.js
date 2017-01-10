/**
 * xfyun client
 */

const xfyun = require('bindings')('xfyun');

/**
 * params {username, password, appid, lang, accent, sample_rate}
 * callback callback fn
 */
function _iat(params) {
    return new Promise(function (resolve, reject) {
        xfyun.iat(params.username,
            params.password, // password
            `appid = ${params.appid}`, // login params
            `sub = iat, domain = iat, language = ${params.lang}, accent = ${params.accent}, sample_rate = ${params.sample_rate}, result_type = plain, result_encoding = utf8, aue = speex-wb, ptt = 0, ent = sms-en16k`,
            params.audio_file, // audio file
            function (err, result) {
                if (err)
                    return reject(err);
                return resolve(result);
            });
    });
}

exports.iat = _iat;