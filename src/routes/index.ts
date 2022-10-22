import promotion from './promotion'
import { Express } from 'express'

const BASE_PREFIX = '/api'

export default (app: Express) => {
  app.use(`${BASE_PREFIX}/promotion`, promotion)
}