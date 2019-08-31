import express from 'express';
const app = express();
app.get('/', (req, res) => {
    return res.status(200).send({
        status: 200,
        message: 'Welcome to freeMentors'
    })
});
const port = process.env.PORT || 3000;
app.listen(port, console.log(`app is listening on port ${port}`));
export default app;