import { Code, IResponse } from "@/interface/response.interface";
import axios from "axios";
import {
  BUY_DIGITAL_HEADERS,
  BUY_DIGITAL_HOST,
  GOOD_TO_BUY_HEADERS,
  GOOD_TO_BUY_HOST,
  HEADERS,
  HOST,
} from "./contants";
import getRecommendGoodsServer from "./getRecommendGoods";

const getHeadline = async () => {
  const res = await axios.get(HOST, {
    headers: HEADERS,
  });

  let result: IResponse = {};
  if (res.status === 200) {
    result.code = Code.success;
    result.data = res.data.data;
    result.message = "success";
  } else {
    result = {
      code: Code.error,
      data: null,
      message: "fetch error",
    };
  }

  return result;
};

const getGoodToBuy = async () => {
  const res = await axios.get(
    `${GOOD_TO_BUY_HOST}?timesort=${Math.floor(
      new Date().getTime() / 1000
    )}&p=1&past_num=21`,
    {
      headers: GOOD_TO_BUY_HEADERS,
    }
  );

  let result: IResponse = {};
  if (res.status === 200) {
    result.code = Code.success;
    result.data = res.data.data;
    result.message = "success";
  } else {
    result = {
      code: Code.error,
      data: null,
      message: "fetch error",
    };
  }

  return result;
};

const getBuyDigital = async () => {
  const res = await axios.get(BUY_DIGITAL_HOST, {
    headers: BUY_DIGITAL_HEADERS,
  });

  let result: IResponse = {};
  if (res.status === 200) {
    result.code = Code.success;
    result.data = res.data.data.find((i: any) => i.source_key === "zhidemai");
    result.message = "success";
  } else {
    result = {
      code: Code.error,
      data: null,
      message: "fetch error",
    };
  }

  return result;
};

const getRecommendGoods = async (params: string) => {
  const res = await getRecommendGoodsServer(params);
  let result: IResponse = {};
  if (res.length > 0) {
    result.code = Code.success;
    result.data = res;
    result.message = "success";
  } else {
    result = {
      code: Code.error,
      data: null,
      message: "fetch error",
    };
  }
  return result;
};

export { getHeadline, getGoodToBuy, getBuyDigital, getRecommendGoods };
