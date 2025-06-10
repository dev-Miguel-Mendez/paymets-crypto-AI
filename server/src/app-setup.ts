import './boostrap-env.js' //! This needs to be in its own file and imported before anything that will use environment variables.

import express from 'express';
import cors from 'cors'
import { errorMiddleware } from './middleware/error-middlewate.js';
import { router } from './routes/router.js';

const app = express();
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());

app.use((req, _res, next)=>{
    console.log(req.path, req.body);
    
    next()
})



app.use(router);
app.use(errorMiddleware)



//* I exported the app for testing vitest:
export default app
