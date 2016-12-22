const express = require('express');
const app = express();

const port = 1111

app.get('/', (request, response) =>
  response.send('Yo wassup?')
);

app.get('*', (request, response) => {
  response.send('You are trying to visit ' + request.url);
});

app.listen(port, () =>
  console.log(`App listening on port ${port}`)
);
