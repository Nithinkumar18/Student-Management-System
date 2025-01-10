
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./controller/studentcontroller');

const app = express();
app.use(express.json());
app.use('/api',studentRoutes);

let date = new Date();
const Hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const connection_time = Hours +":"+ minutes +":"+ seconds;

mongoose.connect('mongodb://localhost:27017/student',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(3000);
    console.log(`Securely Connected To Database With PORT running ON 3000 at: ${connection_time}`)
}).catch((err) => {
    console.log(`Connected Failed ${err}`);
})

