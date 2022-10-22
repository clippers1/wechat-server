import express from 'express'
import logger from '@/utils/log4js'
import router from '@/routes'

const app = express()

logger(app) // 开启log

router(app)

app.use('/', (req, res) => {
  res.send({
    clippers: '1'
  })
})

app.listen(5487, () => console.log('server is running on 5487'))