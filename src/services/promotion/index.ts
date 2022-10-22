import { Code, IResponse } from '@/interface/response.interface'
import axios from 'axios'
import { HEADERS, HOST } from './contants'

const getHeadline = async () => {
  const res = await axios.get(HOST, {
    headers: HEADERS
  })

  let result: IResponse = {}
  if (res.status === 200) {
    result.code = Code.success
    result.data = res.data.data
    result.message = 'success'
  } else {
    result = {
      code: Code.error,
      data: null,
      message: 'fetch error'
    }
  }

  return result
}

export { getHeadline }