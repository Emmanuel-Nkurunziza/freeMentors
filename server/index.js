import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';


const app =  express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/v1', router);
// app.use(router);

app.get('/', (req, res) => {
    return res.status(200).send({
        status: 200,
        message: 'Welcome to freeMentors'
    })
});
const port = process.env.PORT || 3000;
app.listen(port, console.log(`app is listening on port ${port}`));

export default app; 

