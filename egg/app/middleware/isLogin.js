module.exports = (opt, app) => {
    return async (ctx, next) => {
        if (!ctx.session.userInfo) { // 没有登录
            const arr = ['/register', '/recommend', '/login', '/search','/']
            if (arr.includes(ctx.url) || ctx.url.includes('/classification') || ctx.url.includes('/goods/one') || ctx.url.includes('/verify')) {
                await next()
                return 
            }
            ctx.body = {
                msg: '请登录',
                code: -1
            }
        } else {
            await next()
        }
    }
}