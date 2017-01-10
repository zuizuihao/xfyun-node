/**
 * Test 
 */
const test = require('ava');
const xfyclient = require('../');

test.cb('xfy-node#test', t => {

    let wav_file = '32197e88c543c9ea7c1b6c45b550b462_16.wav';

    let params = {
        username: null,
        password: null,
        appid: '5864ae2d',
        lang: 'zh_cn',
        accent: 'mandarin',
        sample_rate: 16000,
        // audio_file: `/home/hain/data.vioces/${wav_file}`
        audio_file: 'src/sdk/bin/wav/iflytek01.wav'
    }

    xfyclient.iat(params)
        .then(function (result) {
            console.log('识别结果：', result);
            // t.is(result, '18012345678。', 'Record Message to Text.');
            t.pass();
            t.end();
        }, function (err) {
            t.fail(err);
            t.end();
        });
});

