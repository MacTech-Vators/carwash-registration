"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var bodyParser = require('body-parser');

var mysql = require('mysql2');

var port = 5000;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
var db = mysql.createConnection({
  host: 'localhost',

  /* MySQL host*/
  user: 'root',

  /* MySQL username*/
  password: 'password',

  /* MySQL password*/
  database: 'carwash'
  /* database name*/

}); // Connect to the database

db.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});
app.get('/thabo', function (req, resp) {
  var name = req.query;
  console.log('response: ', name);
  resp.send("hello T-Bose ".concat(name.name));
});
app.post('/nacwo/api/v1/carwash', function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);
          savecarwash(req.body);
          res.status(201).send("Successfully created");

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});

function savecarwash(businessData) {
  var sql = "\n    INSERT INTO business_info (membershipNumber, carWashName, registeredBusinessName, regitrationNo, businessBankAccount, sarsPin, ownership, nameAndSurname, ownersID, contactNumber, emailAddress, joiningDate, line1, line2, city, province, latitude, longitude)\n    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"; // Values from the request body

  var values = [businessData.membershipNumber, businessData.carWashName, businessData.registeredBusinessName, businessData.regitrationNo, businessData.businessBankAccount, businessData.sarsPin, businessData.ownership, businessData.nameAndSurname, businessData.ownersID, businessData.contactNumber, businessData.emailAddress, businessData.joiningDate, businessData.physicalAddress.line1, businessData.physicalAddress.line2, businessData.physicalAddress.city, businessData.physicalAddress.province, businessData.physicalAddress.gpsCoordinate.latitude, businessData.physicalAddress.gpsCoordinate.longitude];
  db.query(sql, values, function (err, res) {
    if (err) {
      console.error('Error inserting data:', err);
    } else {
      console.log('Data inserted successfully:', res);
    }
  });
}

app.listen(port, function () {
  console.log("application started on port ".concat(port));
});
//# sourceMappingURL=server.dev.js.map
