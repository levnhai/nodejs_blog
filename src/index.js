const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const hbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

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
        helpers: {
            sumIndex: function (a, b) {
                return a + b;
            },
        },
    }),
);

//Static Folder
app.set('views', path.join(__dirname, 'resources', 'views'));

// static web
app.use(express.static(path.join(__dirname, 'public')));

// method override
app.use(methodOverride('_method'));

// router init
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

db.connect();
route(app);
