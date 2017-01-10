/**
 * Test 
 */
const test = require('ava');
const xfyclient = require('../');

test.cb('xfy-node#test', t => {
    let params = {
        username: null,
        password: null,
        appid: '5864ae2d',
        work_dir: '.',
        lang: 'zh_cn',
        accent: 'mandarin',
        sample_rate: 16000,
        audio_file: 'wav/iflytek01.wav'
    }

    xfyclient.iat(params, function (result) {
        t.is(result, '18012345678。', 'Record Message to Text.');
        t.pass();
        t.end();
    })
});

