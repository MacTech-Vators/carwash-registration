const express =  require('express');  
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const port = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost', /* MySQL host*/
    user: 'root',      /* MySQL username*/
    password: 'password',      /* MySQL password*/
    database: 'carwash' /* database name*/
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});


app.get('/thabo', (req, resp) => {
    const name = req.query;
    console.log('response: ', name);
    resp.send(`hello T-Bose ${name.name}`);
})

app.post('/nacwo/api/v1/carwash', async (req, res) =>{
    console.log(req.body);
    savecarwash(req.body);

    res.status(201).send(`Successfully created`);
})


function savecarwash(businessData) {
    const sql = `
    INSERT INTO business_info (membershipNumber, carWashName, registeredBusinessName, regitrationNo, businessBankAccount, sarsPin, ownership, nameAndSurname, ownersID, contactNumber, emailAddress, joiningDate, line1, line2, city, province, latitude, longitude)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

// Values from the request body
    const values = [
        businessData.membershipNumber,
        businessData.carWashName,
        businessData.registeredBusinessName,
        businessData.regitrationNo,
        businessData.businessBankAccount,
        businessData.sarsPin,
        businessData.ownership,
        businessData.nameAndSurname,
        businessData.ownersID,
        businessData.contactNumber,
        businessData.emailAddress,
        businessData.joiningDate,
        businessData.physicalAddress.line1,
        businessData.physicalAddress.line2,
        businessData.physicalAddress.city,
        businessData.physicalAddress.province,
        businessData.physicalAddress.gpsCoordinate.latitude,
        businessData.physicalAddress.gpsCoordinate.longitude
    ];

    db.query(sql, values, (err, res) => {
        if (err) {
            console.error('Error inserting data:', err);
        } else {
            console.log('Data inserted successfully:', res);
        }
    });
}


app.listen(port, ()=> {
    console.log(`application started on port ${port}`)
})