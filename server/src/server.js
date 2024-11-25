import express from "express";

const app = express();
const port = 3000;


// localhost:3000/
app.get('/' , (req ,res) => {
    res.send('Hello You!');
});

app.listen(port, () =>{
    console.log(`Hey, go to  http://localhost:${port}`);
});