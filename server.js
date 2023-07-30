const path = require("path");
const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

app.use(express.static(path.resolve(__dirname, "site")));

https.createServer(options, app).listen(443, () => {
  console.log('Servidor HTTPS está sendo executado na porta 443');
});