const express = require('express');
const businessRoute = express.Router();

let Business = require('./business.model');

// Store data
businessRoute.route('/add').post(function(req, res) {
  let business = new Business(req.body);
  business
    .save()
    .then(business => {
      res.status(200).json({
        business: 'business added successfully!!'
      });
    })
    .catch(err => {
      res.status(400).send('Unable to save to database');
    });
});

// Get data
businessRoute.route('/').get(function(req, res) {
  Business.find(function(err, business) {
    if (err) {
      console.log(err);
    } else {
      res.json(business);
    }
  });
});

// Edit data
businessRoute.route('/edit/:id').get(function(req, res) {
  let id = req.params.id;
  Business.findById(id, function(err, business) {
    res.json(business);
  });
});

businessRoute.route('/update/:id').post(function(req, res) {
  Business.findById(req.params.id, function(err, business) {
    if (!business) res.status(404).send('data is not found');
    else {
      business.person_name = req.body.person_name;
      business.business_name = req.body.business_name;
      business.nic_no = req.body.nic_no;

      business
        .save()
        .then(business => {
          res.json('Update compete!');
        })
        .catch(err => {
          res.status(400).send('Unable to update to database');
        });
    }
  });
});

// delete data
businessRoute.route('/delete/:id').get(function(req, res) {
  Business.findByIdAndRemove({ _id: req.params.id }, function(err, business) {
    if (err) res.json(err);
    else {
      res.json('Successfully removed!');
    }
  });
});

module.exports = businessRoute;
