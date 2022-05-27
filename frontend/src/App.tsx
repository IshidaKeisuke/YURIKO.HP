import React, { useState, useEffect } from "react"
import { CustomerReviewList } from "components/CustomerReviewList"
import { CustomerReviewForm } from "components/CustomerReviewForm"

import { getCustomerReviews } from './lib/api/customer_reviews'
import { CustomerReview } from './interfaces/index'

const App: React.FC = () => {
  const [customer_reviews, setCustomer_Reviews] = useState<CustomerReview[]>([])

  const handleGetCustomerReviews = async () => {
    try {
      const res = await getCustomerReviews()
      console.log(res)

      if (res?.status === 200) {
        setCustomer_Reviews(res.data.customer_reviews)
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetCustomerReviews()
  }, [])

  return (
    <>
      <CustomerReviewForm customer_reviews={customer_reviews} setCustomer_Reviews={setCustomer_Reviews} />
      <CustomerReviewList customer_reviews={customer_reviews} setCustomer_Reviews={setCustomer_Reviews} />
    </>
  )
}

export default App
