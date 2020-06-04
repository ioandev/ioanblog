import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.resolve(process.cwd(), '.env')
})

const bodyParser = require('body-parser')
const app = require('express')()
const axios = require('axios')

module.exports = { path: '/api', handler: app }
app.use(bodyParser.json());
app.post('/newsletter/subscribe', async (req, res) => {
  const {name, email} = req.body

  if (name == null || email == null) {
    res.json({
      error: "name and/or email was empty"
    })
    return
  }

  try {
    const url = "http://127.0.0.1:4178" + "/api/newsletter/subscribe"
    console.log(`POSTing to ${url}`)

    const response = await axios.post(url, {
      name,
      email
    });
    res.json(response.data)
  } catch(ex) {
    console.error(ex)
    res.status(500).json({
      error: "An error has occured, and we are aware of it."
    })
  }
})
