module.exports = {
    build: {
    /**
     * 入口文件
     */
        entry: 'jsbundles/$$programName.web.js',
        /**
     * 编译时静态资源的地址，可以是CDN
     */
        publicPath: '/',
        /**
     * 编译到哪个目录下面
     */
        assetsRoot: 'build-web',
        /**
     * js代码地址
     * @type {String}
     */
        src: 'jsbundles',
        /**
     * 生成的vm模板的配置
     * title: 生成模板的title
     * nofooter: 不包含京东公共底部
     * noheader: 不包含京东公共头部
     * downloadAppPlugIn: 不使用当打开m页面是唤起想要原生页面的能力
     */
        template: {
            title: '京东商城',
            nofooter: true,
            // noheader: true,
            /* M下载浮层通用组件接入控制 */
            downloadAppPlugIn: false,
        },
        /**
     * 是否要包含京东WebView的分享能力
     */
        includeJDShare: false,
    },

    dev: {
        entry: 'jsbundles/$$programName.web.js',
        publicPath: '/',
        assetsRoot: 'build-web',
        src: 'jsbundles',
        port: 3000,
        proxy: 'http://jdgameweb.m.jd.com/',
        template: {
            title: '京东商城',
            nofooter: true,
            // noheader: true,
            downloadAppPlugIn: true,
        },
        includeJDShare: false,
    }
};
