module.exports = app => {
	const jwt = app.middleware.jwt(app.config.jwt);
	app.router.get('/admin/user', jwt, app.controller.admin.user.index);
};
