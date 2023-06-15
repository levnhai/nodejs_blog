const express = require('express')
const morgan = require('morgan')
const path = require('node:path'); 
const hbs = require('express-handlebars')


const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))

// template engine
app.set("view engine", 'hbs');
app.engine('hbs', hbs.engine({
  extname : '.hbs'
}));

//Static Folder
app.set('views',path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})