const axios = require('axios');

process.on('message', (data) => {
    let request = data;

    axios(request).then((response) => {
        process.send(response.data);
    }).catch((error) => {
        process.send(error);
    });
});
