const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const hbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');

db.connect();

const app = express();
const port = 3001;

//HTTP logger
app.use(morgan('combined'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// template engine
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);

//Static Folder
app.set('views', path.join(__dirname, 'resources', 'views'));

// static web
app.use(express.static(path.join(__dirname, 'public')));

// router init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
