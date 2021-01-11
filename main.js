// requisite libraries
const express = require('express')
const axios = require('axios')
var f = require('util').format;

const listenport = 8080 // by default the Route configuration for NJS on OpenShift listens on port 8080
const webapp = express()

webapp.get('/', (req, res) => {
    res.send("Hello, World!"); // nothing too complex really
})

webapp.use(express.json())
webapp.use(
    express.urlencoded({
        extended: true
      })
)

webapp.listen(listenport, () => {
    console.log(`Example app now listening on localhost port ${listenport}`)
})



