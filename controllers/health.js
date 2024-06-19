const healthRouter = require('express').Router()

healthRouter.get('/', (req, res) => {
  res.status(200).json({ status: 'Healthy' })
})

module.exports = healthRouter