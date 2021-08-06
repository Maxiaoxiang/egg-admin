'use strict';

/** @type Egg.EggPlugin */
module.exports = {
	// had enabled by egg
	// static: {
	//   enable: true,
	// },
	//mysql
	mysql: {
		enable: true,
		package: 'egg-mysql',
	},
	//jwt鉴权
	jwt: {
		enable: true,
		package: 'egg-jwt',
	},
	//校验规则
	validate: {
		enable: true,
		package: 'egg-validate',
	}
};
