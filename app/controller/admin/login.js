'use strict';

const Controller = require('../core/base_controller');

// 定义创建接口的请求参数规则
const loginRule = {
	username: 'string',
	password: 'string'
};

class LoginController extends Controller {
	async index() {
		const {ctx} = this;

		//校验
		ctx.validate(loginRule, ctx.request.body);

		const userInfo = await this.service.admin.login.findUserByUserNameAndPassword({
			username: ctx.request.body.username,
			password: ctx.helper.getMd5Data(ctx.request.body.password)
		});

		//用户名或密码错误
		if(Object.keys(userInfo).length === 0) {
			this.fail(1, '用户名或密码错误');
			return false;
		}

		//该账号已禁用
		if(userInfo.status === 0) {
			this.fail(1, '该账号已禁用');
			return false;
		}

		const token = ctx.app.jwt.sign({
			...ctx.request.body,
		}, this.app.config.jwt.secret, {
			expiresIn: '60m'
		});
		// 调用 rotateCsrfSecret 刷新用户的 CSRF token
		ctx.rotateCsrfSecret();
		ctx.cookies.set('token', token);
		this.success(userInfo[0]);
	}
}

module.exports = LoginController;
