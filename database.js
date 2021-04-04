import 'dotenv/config';
import assert from 'assert';
import mongoose from 'mongoose';


const DB_URL = process.env.GHUMO_MONGODB_URL;

mongoose.connect(
    DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (error, link){
        assert.strictEqual(error, null, 'Database Connection Failed...');
        console.log('Databse Connection Success...');
    }
);
