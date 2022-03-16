const express = require('express');
const app = express()

msg = "Hello world Docker Compose"
app.get('/', (req,res) => res.send(msg));


app.listen(3001, () => {
    console.log("app running on port 3001...");
})

