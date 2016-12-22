const express = require('express');
const app = express();

app.get('/', (request, response) =>
  response.send('Yo wassup?')
);

app.get('*', (request, response) => {
  response.send('You are trying to visit ' + request.url);
});

app.listen(3000);
console.log('App listening on port 3000');
