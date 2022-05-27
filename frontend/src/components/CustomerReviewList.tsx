import React from 'react';
import { CustomerReviewItem } from "./CustomerReviewItem"
import { CustomerReview } from '../interfaces/index'

interface CustomerReviewListProps {
  customer_reviews: CustomerReview[]
  setCustomer_Reviews: Function
}

export const CustomerReviewList: React.FC<CustomerReviewListProps> = ({ customer_reviews, setCustomer_Reviews }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>お客様の声</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          customer_reviews.map((customer_review: CustomerReview, index: number) => {
            return (
              <CustomerReviewItem
                key={index}
                customer_review={customer_review}
                setCustomer_Reviews={setCustomer_Reviews}
              />
            )
          })
        }
      </tbody>
    </table>
  )
}