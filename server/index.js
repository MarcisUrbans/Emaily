const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');

require('./models/User');
require('./services/passport');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey] 
    })
);

app.use(passport.initialize());
app.use(passport.session());
// app.get('/', (req, res) => {
//     res.send({ hi: 'baaai potato 123' });
// });



require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);