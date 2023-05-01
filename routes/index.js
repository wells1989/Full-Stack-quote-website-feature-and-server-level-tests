// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
    
    const {source, author, quote} = req.body;
  // above, extracts the "name" attribute from the req.body, e.g. req.body.quote 

    res.render('index', {source, author, quote});
});
// above, renders the handlebars index, along with the 3 variables declared above, so when the test checks for their existance, the test will pass

module.exports = router;
