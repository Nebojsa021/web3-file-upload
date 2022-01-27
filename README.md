# Explanation of usage

A simple web service with intention to be used to upload files to Web3 storage.

Host, port, token, apiurl should be configured in `config.js` file.

Listens to POST HTTP request on `http://{host}/{port}/upload-files`.

Request body is simple as `{ paths:[] }` and it accepts multiple file or folder paths.

Response is a link to files location.




        
