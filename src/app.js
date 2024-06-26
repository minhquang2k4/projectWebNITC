const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const db = require('./config/database.js');
const methodOverride = require('method-override');

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());

app.use(methodOverride('_method'));

app.use(require('./routes/route.js'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});