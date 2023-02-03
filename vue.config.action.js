// 这个构建配置是给 GitHub Action 用的
// 以防止因为本地测试环境和 Pages 部署环境不同但是我老忘了改 ……

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    publicPath: '/Stapxs-QQ-Lite-2.0/',
    transpileDependencies: true,
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.txt$/i,
                    use: 'raw-loader',
                },
            ],
        }
    },
    pwa: {
        name: 'Stapxs QQ Lite',
        themeColor: '#606E7A',
        iconPaths: {
            faviconSVG: 'img/icons/icon.svg',
            favicon512: 'img/icons/icon.png',
            appleTouchIcon: 'img/icons/icon-for-fuck-apple.png',
            maskIcon: 'img/icons/icon-maskable.png'
        },
        manifestOptions: {
            description: "一个兼容 oicq-http 的非官方网页版 QQ 客户端，使用 Vue 重制的全新版本。",
            icons: [
                {
                    "src": "img/icons/icon.svg",
                    "sizes": "1080x1080",
                    "purpose": "any"
                },
                {
                    "src": "img/icons/icon.png",
                    "type": "image/png",
                    "sizes": "512x512"
                }
                ,
                {
                    "src": "img/icons/icon-maskable.png",
                    "sizes": "1024x1024",
                    "type": "image/png",
                    "purpose": "maskable"
                }
            ],
            related_applications: [
                {
                  "platform": "play",
                  "url": "https://play.google.com/store/apps/details?id=com.tencent.mobileqq",
                  "id": "com.tencent.mobileqq"
                },
                {
                    "platform": "itunes",
                    "url": "https://apps.apple.com/app/qq/id444934666"
                }
            ]
        }     
    }
})