import React, { useState } from "react";
import { createCustomerReview } from "../lib/api/customer_reviews";
import { CustomerReview } from "../interfaces/index";

interface CustomerReviewFormProps {
  customer_reviews: CustomerReview[];
  setCustomer_Reviews: Function
}

export const CustomerReviewForm: React.FC<CustomerReviewFormProps> = ({ customer_reviews, setCustomer_Reviews }) => {
  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")

  const handleCreateCustomerReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: CustomerReview = {
      title: title,
      body: body
    }

    try {
      const res = await createCustomerReview(data)
      console.log(res)

      if (res.status == 200) {
        setCustomer_Reviews([...customer_reviews, res.data.customer_review])
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }

    setTitle("")
    setBody("")
  }

  return (
    <form onSubmit={handleCreateCustomerReview}>
      <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
      }} />
      <input type="text" value={body} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setBody(e.target.value)
      }} />
      <input type="submit" value="Add" disabled={!title} />
    </form>
  )
}