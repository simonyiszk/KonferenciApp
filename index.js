const express = require('express')
const app = express()

var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/favorites',
    function (req, res, next) {

        const deviceID = req.body.deviceID;
        const email = req.body.email;
        const favorites = req.body.favorites;
        const time = new Date().toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, '');

        fs.appendFile("./favorites.txt", `"${time}":"${deviceID}-${email}":"${favorites}"\n`,
            function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        res.sendStatus(200);
    });

app.post('/reports',
    function (req, res, next) {

        const deviceID = req.body.deviceID;
        const platform = req.body.platform;
        const version = req.body.version;
        const message = req.body.message;
        const time = new Date().toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, '');

        fs.appendFile("./reports.txt", `"${time}":"${deviceID}-${platform}-${version}":"${message}"\n`,
            function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        res.sendStatus(200);
    });

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => console.log('Example app listening on port 8080!'))