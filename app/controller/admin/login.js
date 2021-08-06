'use strict';

const Controller = require('../core/base_controller');

// 定义创建接口的请求参数规则
const loginRule = {
	username: {type: 'string', required: true},
	password: {type: 'string', required: true},
};

class LoginController extends Controller {
	//登录
	async index() {
		const {ctx} = this;
		let {username, password} = ctx.request.body;
		//校验
		ctx.validate(loginRule, {username, password});
		if (ctx.paramErrors) {
			return ctx.fail(1, '请输入用户名或密码');
		}

		const userInfo = await this.service.admin.login.findUserByUserNameAndPassword({
			username: username,
			password: ctx.helper.getMd5Data(password)
		});

		//用户名或密码错误
		if (Object.keys(userInfo).length === 0) {
			this.fail(1, '用户名或密码错误');
			return false;
		}

		//该账号已禁用
		if (userInfo.status === 0) {
			this.fail(1, '该账号已禁用');
			return false;
		}

		const token = ctx.app.jwt.sign({
			...ctx.request.body,
		}, this.app.config.jwt.secret, {
			expiresIn: '60m'
		});
		//刷新用户的 CSRF token
		ctx.rotateCsrfSecret();
		ctx.cookies.set('token', token);
		ctx.session.userinfo = JSON.parse(JSON.stringify(userInfo));
		ctx.session.token = token;
		this.success({
			token: token
		});
	}

	/**
	 * 退出登录
	 * @returns {Promise<void>}
	 */
	async logout() {
		const {ctx} = this;
		ctx.cookies.set('token', null);
		ctx.session = null;
		this.success(null, 0, '退出成功');
	}
}

module.exports = LoginController;
