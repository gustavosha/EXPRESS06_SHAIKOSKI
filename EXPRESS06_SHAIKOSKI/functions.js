//criar uma função para parametrizar todos os resṕomses

function response(status,message,data=null){
    return{
        status,
        message,
        data,
        timesTamp: new Date().getTime()
    }
}
module.exports={
    response
}