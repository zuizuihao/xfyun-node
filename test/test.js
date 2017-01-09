/**
 * Test 
 */
const test = require('ava');

test.cb('xfy-node#test', t => {
    let xfyclient = require('bindings')('xfyclient');
    let login_params = "appid = 5864ae2d, work_dir = ."; //登录参数,appid与msc库绑定,请勿随意改动
    let client = new xfyclient.XfyClient(login_params);
    console.log( 'Get Value:' + client.login());
    t.pass();
    t.end();
});

