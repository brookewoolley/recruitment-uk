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
      res.send(data);
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
