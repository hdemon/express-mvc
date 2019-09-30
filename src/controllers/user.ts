import express from 'express'
// eslint-disable-next-line import/no-extraneous-dependencies
import Ajv from 'ajv'

const userSchema = require('../../schema/user')

const router = express.Router()
const ajv = new Ajv()
const isValid = ajv.compile(userSchema)

const validator = (req: any, res: any, next: any) => {
  console.log(req.body)
  console.log(isValid(req.body))
  if (isValid(req.body)) {
    next()
  } else {
    res.status(400).send()
  }
}

router.post('/', validator, (req, res) => {
  res.send('respond with a resource')
})

module.exports = router
