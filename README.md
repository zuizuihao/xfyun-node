# xfyun-node
[科大讯飞](http://www.xfyun.cn/)没有提供Node.js SDK，于是就有了这个轮子。
* 目前仅支持 linux64.

```
# download xfyun sdks from official portal, a zip file like here.
sudo unzip Linux_voice_1135_5864ae2d.zip -d /opt/xfy-sdk
cd PROJECT_ROOT
npm install xfy-node --save
```

## Usage
```
    const xfyclient = require('xfy-node');
    let params = {
        username: null, // 账号名称
        password: null, // 账号密码 
        appid: '5864ae2d', // AppID
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
        // 音频文件位置，绝对路径
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