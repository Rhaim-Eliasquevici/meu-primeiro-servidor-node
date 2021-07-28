const express = require('express'),
  app = express()

  app.get('/', (req, res) => {
    res.send('<h1>VOCÊ ESTÁ NA HOMEPAGE</h1>')
  })

app.listen(3000, () => console.log('O servidor está rodando...'))
