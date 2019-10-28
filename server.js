const express  = require('express');
const app = express();
const Events = require('./routes/events');
const Event_reg = require('./routes/event_reg');
const bodyParser = require('body-parser');
const connectDB = require('./config/db_connect.js');
const cors = require('cors');
app.get('/', (req,res, next) =>{
    
     
        res.send('HelloSiri');

    })
 connectDB();   
 app.use(cors());
 app.use(bodyParser.json());
 app.use('/api/events',Events);   
 app.use('/api/user',Users);
 app.use('/api/user/event_reg',Event_reg);

app.listen(5000, (err) =>{ 
    console.log(err) 
})

