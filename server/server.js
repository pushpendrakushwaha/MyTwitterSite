
const express = require('express');
const Twitter = require('twit');
const app = express();
const logger = require ('morgan');

const client = new Twitter({
  consumer_key: 'FpvdDTYKF7fay9lDwNXR9Dcx3',
  consumer_secret: 'QV2Z6xDB4yBXRl2wlyRWxNBnxvaVkno7CIliyoI81bXdkzlJvq',
  access_token: '1147836355159838725-R6FaLOvu15Ugkn5qoFplg5N7uqMjhF',
  access_token_secret: '3yKxHUHpM8bVOCpjRFPNUf0rq4ju6ec4fm8wztnRp5mjl'
});

app.use(logger('dev'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/search/tweets/:id', (req, res) => {
    let params = { q:'cricket', count: 10 };
    params.q = req.params.id;
   
    client
      .get(`/search/tweets`, params)
      .then(timeline => {
         console.log(timeline)
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});

app.listen(3000, () => console.log('Server running'))
