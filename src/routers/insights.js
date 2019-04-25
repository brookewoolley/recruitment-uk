const express = require('express');
const router = express.Router();
const transactionFilter = require('../transactionFilter.js')

router.get('/categories', async (req, res, next) => {
  try {
    transactionFilter(res);
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
