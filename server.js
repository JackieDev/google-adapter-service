const express = require('express');

var app = express();

let eventsJsonPath = require('./example-calendar-events.json');

app.set('json spaces', 2);

app.get('/get-calendar-events', (req, res) => res.json(eventsJsonPath));


app.listen(3000, () => {
    console.log('Server is up on port 3000');
  });