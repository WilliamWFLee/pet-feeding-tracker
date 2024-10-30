import { Router } from 'express'

const indexRouter = Router()

indexRouter.get('*', (req, res, next) => {
  res.json({ response: 'ok' })
})

export default indexRouter
