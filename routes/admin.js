const express = require('express');
const News = require('../models/news');
const router = express.Router();

router.all('*', (req, res, next) => {
  if (!req.session.admin) {
    // błąd - było:  if (!session.admin) {
    res.redirect('login');

    return;
  }

  next();
});

/* GET home page. */
router.get('/', function (req, res) {
  News.find({}, (err, data) => {
    console.log(data);
    res.render('admin/index', {
      title: 'Admin',
      data,
    });
  });
  // const newsData = new News({
  //   title: 'Tytuł testowy',
  //   description: 'Opis ',
  // });

  // newsData.save(err => {
  //   console.log(err);
  // });

  // console.log(req.session.admin);
});

router.get('/news/add', (req, res) => {
  res.render('admin/news-form', { title: `Dodaj news'a`, body: {}, errors: {} });
});

router.post('/news/add', (req, res) => {
  const body = req.body;

  const newsData = new News(body);

  const errors = newsData.validateSync();

  // console.log(errors);

  newsData.save(err => {
    // console.log(err);
    if (err) {
      res.render('admin/news-form', { title: `Dodaj news'a`, errors, body });
      return;
    }
    res.redirect('/admin');
  });
  // res.render('admin/news-form', { title: `Dodaj news'a`, errors, body });
});

router.get('/news/delete/:id', (req, res) => {
  News.findByIdAndDelete(req.params.id, err => {
    res.redirect('/admin');
  });
});

module.exports = router;
