module.exports = options =>{
    return async function adminauth(ctx,next){
        if(ctx.session.openId){
            await next()
        }else{
            console.log('登录失败的状态')
            ctx.body={data:'noLogin'}
        }
    }
}