# xfyun-node
[科大讯飞](http://www.xfyun.cn/)没有提供Node.js SDK，于是就有了这个轮子。
* 目前仅支持 linux64.

```
cd PROJECT_ROOT
npm install xfy-node --save
ln -s `pwd`/node_modules/xfy-node/src/sdk /opt/xfy-sdk # 因为没有解决依赖库的相对路径问题，用一个软链接
```

## Usage
```
    const xfyclient = require('xfy-node');
    let params = {
        username: null, // 账号名称
        password: null, // 账号密码 
        appid: '5864ae2d', // AppID
        work_dir: '.', // 工作目录，用来寻找语音文件
        // 语言
        // zh_cn:简体中文
        // zh_tw:繁体中文
        // en_us:英语
        // 默认为zh_cn
        lang: 'zh_cn', 
        // 口音
        // mandarin:普通话
        // cantonese:粤语
        // 默认为mandarin
        accent: 'mandarin',
        // 音频格式
        // 8000, 16000, 默认为16000
        sample_rate: 16000,
        // 音频文件位置，相对于work_dir
        audio_file: 'wav/iflytek01.wav'
    }

    xfyclient.iat(params, function (result) {
        console.log(result);
    })
```

## Contribution
```
npm install
node-gyp rebuild
ava # test
```

## 讯飞提供的原始SDK
```
git clone https://github.com/Samurais/xfyun-get-started
```