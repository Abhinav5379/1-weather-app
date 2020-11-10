console.log("Client side javascript file is attached")
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })
// fetch('http://localhost:3000/weather?address=delhi').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//              console.log(error)
//         }else{
//              console.log(data.response.request.query)
//         }
//     })
// })

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#pTwo')
const messageTwo=document.querySelector('#pThree')
messageOne.textContent=''
messageTwo.textContent=''

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{   //heroku dont know port 3000 so changing it yo /weather?----
        if(data.error){
             console.log(error)
        }else{
             messageOne.textContent=data.response.request.query
             messageTwo.textContent=data.response.current.observation_time
        }
    })
})

})