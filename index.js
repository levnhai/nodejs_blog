const express = require('express')
const app = express()
const port = 3000

app.get('/hai-le', (req, res) => {
  res.send('Hello World! hải lê đẹp trai')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})