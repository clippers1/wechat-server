import { getBuyDigital, getGoodToBuy, getHeadline, getRecommendGoods } from '@/services/promotion'
import express from 'express'
const router = express.Router()

// coupon
router.get('/coupon', async (req, res) => {
  const result = await getHeadline()
  const { data, code, message } = result
  res.send({
    data,
    code,
    message
  })
})

router.get('/gotobuy', async (req, res) => {
  const result = await getGoodToBuy()
  const { data, code, message } = result
  res.send({
    data,
    code,
    message
  })
})

router.get('/buydigital', async (req, res) => {
  const result = await getBuyDigital()
  const { data, code, message } = result
  res.send({
    data,
    code,
    message
  })
})

router.get('/get-recommend-goods/:goods', async (req, res) => {
  const result = await getRecommendGoods(req.params.goods)

  const { data, code, message } = result
  res.send({
    data,
    code,
    message
  })
})

export default router