const express = require('express');
const router = express.Router();

const giphyService = require('../external_services/giphy/giphy.service');
const pixabayService = require('../external_services/pixabay/pixabay.service');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/giphy', function (req, res, next) {
  giphyService.getGiphyTrending()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.status(500).send(err)
    })
});

router.get('/pixabay', function (req, res, next) {
  pixabayService.getPixabay()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
});

module.exports = router;