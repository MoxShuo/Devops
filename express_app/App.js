const express = require('express');
const app = express()

msg = "Hello world"
app.get('/', (req,res) => res.send(msg));


app.listen(3000, () => {
    console.log("app running on port 3000...");
})
