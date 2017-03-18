const express = require('express');
const moment = require('moment');
const router = express.Router();

router.get('/:id', function(req, res) {

  const formats = [
    'X',
    'MMMM D, YYYY',
    'MMM D, YYYY',
    'MMMM D YYYY',
    'MMM D YYYY',
    'D MMMM YYYY',
    'D MMMM YYY',
    'D MMM YYYY',
    'D MMM Y',
    'D-MM-YYYY',
    'YYYY-MM-D'
  ];

  const id = moment(req.params.id, formats, true);

  let timeObj = {
    unix: null,
    natural: null
  };

  if (id.isValid()) {
    timeObj.unix = +id.utc().format('X');
    timeObj.natural = id.utc().format('MMMM D, YYYY');
  } else {
    timeObj.unix = null;
    timeObj.natural = null;
  }

  res.json(timeObj);
});

module.exports = router;
