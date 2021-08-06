// app/core/base_controller.js
const { Controller } = require('egg');
class BaseController extends Controller {
	get user() {
		return this.ctx.session.user;
	}

	/**
	 * 请求成功
	 * @param data 请求内容
	 * @param code 请求编码
	 * @param message 返回提示消息
	 */
	success(data, code = 0, message = '') {
		this.ctx.body = {
			code: code,
			data,
			message: message,
			success: true,
		};
	}

	/**
	 * 失败提示
	 * @param code
	 * @param message
	 */
	fail(code = 1, message = '') {
		this.ctx.body = {
			code: code,
			message: message,
			success: true,
		};
	}

	notFound(msg) {
		msg = msg || 'not found';
		this.ctx.throw(404, msg);
	}
}
module.exports = BaseController;
