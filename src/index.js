require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 4000;

const usersRouter = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');

const app = express();

//middleware
app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users',usersRouter);


app.listen(PORT, ()=>{
    console.log(`Server berhasil di running di port ${PORT}`); 
});























// app.post("/post", (req, res) => {
//     res.send("post data!");
// });

