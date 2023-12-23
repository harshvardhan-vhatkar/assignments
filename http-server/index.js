//creating http server using express.js backend

const express = require('express')
const app = express()
//localhost:3000
const port = 3000

app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//assignments
//todo list saves on server
//create http server in java