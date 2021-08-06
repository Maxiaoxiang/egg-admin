'use strict';

const Controller = require('../core/base_controller');

class LoginController extends Controller {
	async index() {
		const {ctx} = this;

		const token = ctx.app.jwt.sign({
			...ctx.request.body,
		}, this.app.config.jwt.secret, {
			expiresIn: '60m'
		});
		// 调用 rotateCsrfSecret 刷新用户的 CSRF token
		ctx.rotateCsrfSecret();
		this.success({
			token
		});
	}
}

module.exports = LoginController;
