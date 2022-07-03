const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
const port = process.env.PORT || 8080;

app
    // .use(bodyParser.json())
    // .use((req, res, next) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     next();
    // })
    .use('/', require('./routes'));

app.listen(port, () => console.log(`Server listening on port: ${port}`));
