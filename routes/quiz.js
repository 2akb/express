const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

/* GET home page. */
// router.get('/', function (req, res, next) { // to na razie usuwam, bo umknęło mi gdzieś użycie funkcji... ok, było ale strzałkowa
//poniższe usuwamy bo już to zainicjowaliśmy model w naszej bazie
// a później dodaliśmy ręcznie wszystkie pory roku
// new Quiz({ title: 'Pytanie', vote: 0 }).save()
router.get('/', (req, res) => {
  const show = !req.session.vote;

  Quiz.find({}, (err, data) => {
    let sum = 0;
    data.forEach(item => {
      sum += item.vote;
    });

    // console.log(data);// powinny wyświetlić się w konsoli zadane w bazie dane

    res.render('quiz', {
      title: 'Quiz',
      data,
      show,
      sum,
    });
  });

  // res.render('index2', {
  //   vart: 'jakiś tam mój napis',
  // });
});

router.post('/', (req, res) => {
  // const show = !req.session.vote;
  const id = req.body.quiz;

  Quiz.findOne({ _id: id }, (err, data, show) => {
    // console.log(data);
    data.vote = data.vote + 1;
    data.save(err => {
      req.session.vote = 1;
      res.redirect('/quiz');
    });
  });
});

module.exports = router;
