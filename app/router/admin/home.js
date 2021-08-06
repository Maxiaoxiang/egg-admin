module.exports = app => {
	const jwt = app.middleware.jwt(app.config.jwt);
	app.router.get('/', jwt, app.controller.admin.home.index);
};
