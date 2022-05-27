import client from "./client";
import { CustomerReview } from "../../interfaces/index"

//お客様の声一覧を取得
export const getCustomerReviews = () => {
  return client.get("/customer_reviews")
}

//お客様の声を新規作成
export const createCustomerReview = (data: CustomerReview) => {
  return client.post("/customer_reviews", data)
}

//お客様の声を削除
export const deleteCustomerReview = (id: number) => {
  return client.delete(`/customer_reviews/${id}`)
}
