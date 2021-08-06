module.exports = app => {
	const jwt = app.middleware.jwt(app.config.jwt);

	/**
	 * 登录
	 */
	app.router.post('/admin/login', app.controller.admin.login.index);
};
