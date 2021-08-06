/**
 * 封装jwt鉴权
 * @param options 请求入参
 */
module.exports = options => {
	return async function jwt(ctx, next) {
		const token = ctx.request.header.token;
		if(token) {
			try {
				let decode = ctx.app.jwt.verify(token, options.secret);
				ctx.logger.info('Request decode：' + JSON.stringify(decode));
				await next();
			} catch (e) {
				ctx.status = 401;
				ctx.body = {
					code: 40001,
					success: true,
					message: '登录状态发生变化，请重新登录!'
				};
				return false;
			}
		} else {
			ctx.status = 401;
			ctx.body = {
				code: 40001,
				success: true,
				message: '登录状态已失效，请重新登录!'
			};
			return false;
		}
	}
};
