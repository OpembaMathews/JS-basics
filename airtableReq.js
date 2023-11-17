/* const { error } = require('console');
const https = require('https');
https.get('https://www.scinov.africa/team',(response)=>{
    let data = '';
    response.on('data',(chunk)=>{
        data += chunk;
    });
    response.on('end',()=>{
        console.log(data);
    });
    response.on('error',()=>{
        console.log(error);
    })

}); */

const axios = require('axios');
axios.get('https://www.scinov.africa/')
.then(result =>{
    console.log(result.config);
})
.catch(error =>{
    console.log(error);
})