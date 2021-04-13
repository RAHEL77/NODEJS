//CODE ALONE
const { response } = require('express')
const https =require('https')

const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/40,-75'

const request=https.request(url,(reponse)=>{
    let data=''

    response.on('data',(chunk)=>{
      data=data+chunk.toString()
    })
    response.on('end',()=>{
      const body=JSON.parse(data)
      console.log(body);
    })
    request.on('error',(error)=>{
        console.log('an error',error)
    })
    request.end()
})
