import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import helmet from 'helmet';
import winston from 'winston';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import cors from 'cors'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SECRET_SESSION || 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: true,
        sameSite: 'none'
    },
}))

app.use(passport.initialize());
app.use(passport.session());


winston.add(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    )
}))
app.use(helmet());
app.use(cors());

app.use('/api/user', userRoutes);


app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    winston.error(err.message, { timestamp: Date.now() });
    return res.status(500).json({error: true, message: err.message || 'Internal server error' });
});

app.listen(port, () => {
    winston.info(`Server is running on port ${port}`, { timestamp: Date.now() });
});
