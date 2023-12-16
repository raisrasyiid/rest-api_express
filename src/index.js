
const express = require('express');


const usersRouter = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');

const app = express();

//middleware
app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users',usersRouter);


app.listen(4000, ()=>{
    console.log(`Server berhasil di running di port 4000`); 
});























// app.post("/post", (req, res) => {
//     res.send("post data!");
// });

