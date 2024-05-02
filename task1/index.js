const express = require("express");
const path = require("path")
const bodyParser = require('body-parser');

const app = express();
const port  = 8055;

const a = path.join(__dirname,"src")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(a));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.post("/submit", (req, res) => {
    // Extract form data from the request body
    const { name, email, address, phone, country } = req.body;

    // Process form data (e.g., log it)
    console.log('Form submitted with the following data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
    console.log('Country:', country);

    // Render the 'success' template and pass form data to it
    res.render('dynamic', { successMsg : 'Form submitted successfully', name:name });
});

app.listen(port,()=>{
    console.log(`server is runing on the port ${port}`);
});
