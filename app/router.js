'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  /**
   * admin
   */
  require('./router/admin/home')(app);
  require('./router/admin/login')(app);
  require('./router/admin/user')(app);
};
