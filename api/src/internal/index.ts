import { Router } from 'express'
import { healthChecker } from './health'

const internalRouter = Router()

internalRouter.get('/health', healthChecker)

export {
    internalRouter
}
