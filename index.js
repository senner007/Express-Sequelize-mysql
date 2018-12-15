const express = require('express');
const fs = require('fs');
const expressHandlebars  = require('express-handlebars');
const util = require('util');
const path = require('path');
const cors = require ('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const readFile = util.promisify(fs.readFile);

const Op = require('sequelize').Op;

const Navne = require('./dbmodel/navne');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

function createQueryObject(q) {
    
    var queryObject = {};
    if (q.startsWith) queryObject.navn = { [Op.like]: q.startsWith + '%' }
    if (q.sex) queryObject.køn = { [Op.like]: q.sex }

    // exclude id in response if query params used
    var obj = {}
    if (q.startsWith || q.sex) {
        obj.where = queryObject
        obj.attributes = {exclude: ['id']}
    }

    return obj;
}


app.get('/api/navne', (req, res) => {

    const obj = createQueryObject(req.query)

    res.setHeader('Content-Type', 'application/json');

    console.time('d')
    Navne.findAll(obj).then( names => {
        console.timeEnd('d')
        res.send(names)
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))