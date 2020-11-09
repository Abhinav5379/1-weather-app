const request=require('request')
const forecast=(city,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=67748f9361d0c9b8ac9ca780abc74da0&query='+city
    request({
        url:url,
        json:true
    },(error,response)=>{
             if(error){
                  callback('Unable to connect to location services',undefined)
             } else if(response.body.success===false){
                   callback('Unable to find Location',undefined)
             }else{
                 callback(undefined,response.body)
             }
    })

}
// weather(city,(error,response)=>{
// if(error){
//     console.log(error)
// }else{
//     console.log(response)
// }
// })
module.exports=forecast