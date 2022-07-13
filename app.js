const vowelCounter = require('./VowelCounter');
const express = require('express')
const app = express()
const port = 3000

app.get('/vowelCounter/:number', (req, res) => {
const result = vowelCounter(req.params.number)
  res.send("El resultado es: "+ result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})