const express = require('express');
const initRoutes = require(`${__dirname}/routes/index.route`);
require('dotenv').config();
const dbConnect = require(`${__dirname}/config/dbconnect`);
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT ||8080;
app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
dbConnect();
initRoutes(app);

app.use('/', (req, res) => {
    res.send('Server onnnn!');
});

app.listen(port, () => {
    console.log('Server running on the port: ' + port);
})