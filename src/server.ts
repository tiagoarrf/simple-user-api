import express from 'express';
import mongoose from 'mongoose';
import routers from './routes';

const app = express();

mongoose.connect("mongodb://localhost/testapi");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());
app.use(routers);

app.listen(3000, () => {
    console.log("Server is listenig in port 3000");
})