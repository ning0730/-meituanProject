module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://192.168.124.13:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'meituan730',   //七牛云bucket
    AccessKey: 'kmuGP45O_C8wX7mG9C-DRiA0rB9NcfE66fYjdYyb',   //七牛云accessKey
    SecretKey: 'xp2Sc010x5lHT_vYYxNx4ouYYyBCaV6hr7V2yU5m',    //七牛云secretKey
    tencentkey: 'LUVBZ-F3HLU-VZ5VG-4JVTW-X6D3V-IKBDZ',        //腾讯位置secreKey
    tencentkey2: 'LUVBZ-F3HLU-VZ5VG-4JVTW-X6D3V-IKBDZ',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
    
};


