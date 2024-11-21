const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.json({message:"HELLO FROM DOCKER..."});
});

const PORT = 9000
app.listen(PORT, ()=>{ console.log(`Server is running on PORT ${PORT}`)});
