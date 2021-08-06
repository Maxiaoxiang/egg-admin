/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1628067468106_9059';

	// add your middleware config here
	config.middleware = [];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	config.mysql = {
		client: {
			// host
			host: '127.0.0.1',
			// 端口号
			port: '3306',
			// 用户名
			user: 'root',
			// 密码
			password: 'root',
			// 数据库名
			database: 'platform',
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	};

	config.jwt = {
		secret: 'f782f042ae32d188084d88a2c732cf24',
	};

	// 安全配置 （https://eggjs.org/zh-cn/core/security.html）
	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true,
			headerName: 'token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
			queryName: 'token', // 通过 query 传递 CSRF token 的默认字段为 _csrf
			bodyName: 'token', // 通过 body 传递 CSRF token 的默认字段为 _csrf
			useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
			cookieName: 'tokenId', // Cookie 中的字段名，默认为 csrfToken
			sessionName: 'tokenId', // Session 中的字段名，默认为 csrfToken
		},
		// 允许访问接口的白名单
		domainWhiteList: ['http://localhost:7001'],
	};
	// 跨域配置
	config.cors = {
		origin: '*',
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
	};

	return {
		...config,
		...userConfig,
	};
};
