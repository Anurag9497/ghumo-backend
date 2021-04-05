import 'dotenv/config';
import './database';
import express from 'express';
import crouselRoute from './routes/crouselRoute';
import cors from 'cors';


const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


crouselRoute(app);


app.all(
    '/',
    (req, res) => {
        res.send('Welcome to Backend');
    }
);

app.listen(PORT, () => console.log(`Server is running successfully at port ${PORT}`));