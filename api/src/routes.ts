import { Router } from 'express'
import { internalRouter } from './internal'

const routes = Router()

routes.use('/internal', internalRouter)

export {
   routes
}
