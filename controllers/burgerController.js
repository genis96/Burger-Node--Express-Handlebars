const express = require("express");
const router = express.Router();

//INSIDE MODELS FOLDER. - Import the model (burger.js) to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
    // burgers from inside the public js
    burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// creates new burger
router.post('/api/burgers', (req, res) => {
  burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// updates
router.put('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  burger.update(
    {
        devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404 error
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
