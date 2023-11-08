const express = require('express');
const conn = require("./db");
const env = require('dotenv');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const adminRoutes = require('./Routes/Admin/auth')
const ProductRoutes = require('./Routes/productRout')
const catRoutes = require('./Routes/category')
const brand = require('./Routes/Brandrout')
const cart = require('./Routes/Cart')
conn.connectDB()


app.use(cors());
env.config();
app.use(express.json());
app.use('/public', express.static(path.join(__dirname,'uploads')));

app.use('/api', adminRoutes)
app.use('/api', ProductRoutes)
app.use('/api', catRoutes)
app.use('/api', brand)
app.use('/api',cart )
app.use('/api',require("./Routes/Address"));


app.listen(process.env.PORT , ()=>{
    console.log(`server running successfully on port http://localhost:${process.env.PORT}`);
})
