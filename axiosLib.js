const { default: axios } = require("axios");

async function main(){
    const response = await axios({
        method:'GET',
        url:'https://pixabay.com/'
    });
    console.log(response.data);
}

main();