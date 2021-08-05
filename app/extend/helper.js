// app/extend/helper.js
const { v1: uuidv1 } = require('uuid');
module.exports = {
	/**
	 * 创建uuid
	 * @returns {string | StringChain | _.LodashReplace1x2 | void | *}
	 */
	uuid() {
		return uuidv1().replace(/-/g, '');
	},
};
