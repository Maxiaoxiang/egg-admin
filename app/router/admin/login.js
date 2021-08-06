module.exports = app => {
	const jwt = app.middleware.jwt(app.config.jwt);

	/**
	 * GET
	 */
	//退出登录
	app.router.get('/admin/logout', app.controller.admin.login.logout);
	/**
	 * POST
	 */
	//登录
	app.router.post('/admin/login', app.controller.admin.login.index);
};
