const express = require('express');
const router = express.Router();

router.get('/categories', async (req, res, next) => {
  try {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();
    request.addEventListener("load", master_listener);
    request.open('GET', 'https://transactions.spokedev.xyz/transactions');
    request.send();
    function master_listener() {
      var data = JSON.parse(this.responseText)
      var categories = {}

      for (var i = 0; i < data.length; i++) {
        var key = data[i]['category'];
        if (categories[key]) {
        } else {
          categories[key] = {totalNumber: 1, totalValue: data[i]['amount'], averageValue: data[i]['amount']}
        }
      }
      res.send(categories);
    };
  } catch (err) {
    return next(err);
  }
});

router.get('/cashflow', async (req, res, next) => {
  try {
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

router.get('/merchants', async (req, res, next) => {
  try {
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
