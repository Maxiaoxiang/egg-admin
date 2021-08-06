'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller} = app;
  const jwt = app.middleware.jwt(app.config.jwt);

  router.get('/', jwt, controller.admin.home.index);
  router.post('/admin/login', controller.admin.login.index);
};
