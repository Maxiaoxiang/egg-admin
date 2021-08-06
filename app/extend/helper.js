// app/extend/helper.js
const {v1: uuidv1} = require('uuid');
const crypto = require('crypto');

module.exports = {
	/**
	 * 创建uuid
	 * @returns {string | StringChain | _.LodashReplace1x2 | void | *}
	 */
	uuid() {
		return uuidv1().replace(/-/g, '');
	},
	/**
	 * 返回md5加密后的密文
	 * @param data
	 * @returns {string}
	 */
	getMd5Data(data) {
		return crypto.createHash('md5').update(data).digest('hex');
	}
};
