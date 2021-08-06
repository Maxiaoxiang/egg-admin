// app/service/admin/login.js
const Service = require('egg').Service;

class LoginService extends Service {
	/**
	 * 根据用户名和密码获取对应用户信息
	 * @param params
	 * @returns {Promise<*>}
	 */
	async findUserByUserNameAndPassword(params) {
		return this.app.mysql.select('t_user', {
			where: {username: params.username, password: params.password},
			columns: ['name', 'username', 'status']
		});
	}
}

module.exports = LoginService;
