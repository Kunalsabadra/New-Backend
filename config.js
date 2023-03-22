const mongoose  = require("mongoose")
const express = require('express');

// Connection URL and database name
const url = 'mongodb+srv://mitul:mitul5pro@cluster0.ae5dmob.mongodb.net/peacifydb';

// Connect to the MongoDB server
mongoose.connect(url, { useNewUrlParser: true });
