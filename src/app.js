import express from 'express';
import bodyParser from 'body-parser';
import { config } from '../config.js';
import { upload } from './web3-api.js';

const app = express();
app.use(bodyParser.json());

app.post('/upload-files', (req, res) => {
    if(!req.body) {
        res.end('Request body is empty!');
    }
    upload(req.body.paths).then(cid => {
        res.end(config.web3StorageUrl + cid);
    }, error => {
        res.end(error.message);
    });
});

app.listen(config.port, config.host, () => {
    console.log(`App listening at http://${config.host}:${config.port}`)
});
