const express = require('express') //nap express, di vao node module tai va luu vao bien
const app = express() //function, tra lai 1 instance dai dien cho app
const port = 3000

//route
app.get("/tin-tuc", (req, res) => {
    res.send('Hello world')
})

//127.0.0.1 local host
app.listen(port, () => {
    console.log(`Example app listen on port ${port}`)
})