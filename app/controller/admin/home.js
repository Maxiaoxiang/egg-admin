'use strict';

const Controller = require('egg').Controller;
const nodemailer = require("nodemailer");

class HomeController extends Controller {
	async index() {
		const {ctx} = this;
		ctx.body = 'hi, egg' + ctx.helper.getMd5Data('mss2sis');
		this.emailTo(function(result) {
			console.log(result)
		});
	}

	emailTo(callback) {
		const transporter = nodemailer.createTransport({
			// host: 'smtp.qq.com',
            port: 465,
			auth: {
				user: '@foxmail.com',
				pass: '' //授权码,通过QQ获取

			}
		});
		let mailOptions = {
			from: '@foxmail.com', // 发送者
			to: '', // 接受者,可以同时发送多个,以逗号隔开
			subject: '测试标题', // 标题
            text: '文本',
            html: '<p>当前未解决BUG：98个</p><p style="color:red">致命BUG：50个</p><p>严重BUG：30个</p><p>轻微BUG：5个</p>'
		};
		let result = {
			httpCode: 200,
			message: '发送成功!',
		};
		try {
			transporter.sendMail(mailOptions, function (err, info) {
				if (err) {
					result.httpCode = 500;
					result.message = err;
					callback(result);
					return;
				}
				callback(result);
			});
		} catch (err) {
			result.httpCode = 500;
			result.message = err;
			callback(result);
		}
	}
}

module.exports = HomeController;
