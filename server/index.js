import express from 'express';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
//import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
const app = express()
app.use(cors({ origin: ['http://localhost:5173'], methods: ['POST', 'GET'], credentials: true }))
app.use(cookieParser())
app.use(express.json())
const salt = 10
/****
import Schemes of Tables
*****/
import allTables from './databaseScheme.js'
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Fun-Lab')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

/*
 =======
        define Tables or Shemes for all API's 
 =======
 */
const allSchemes = allTables()
// for Users
const users = allSchemes[0]
/*
 =======
        End Of Tables Schem
 =======
 */
app.post('/api/v1/login', async(req, res) => {
    const [username, password] = req.body
    return res.status(200).json({ 'status': 'success' });
});

app.listen(5000, () => {
    console.log("Connecting .....")
})