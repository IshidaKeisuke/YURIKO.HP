import React from 'react';
import { deleteCustomerReview } from 'lib/api/customer_reviews';
import { CustomerReview } from '../interfaces/index'

interface CustomerReviewItemProps {
  customer_review: CustomerReview
  setCustomer_Reviews: Function
}

export const CustomerReviewItem: React.FC<CustomerReviewItemProps> = ({ customer_review, setCustomer_Reviews }) => {
  const handleDeleteCustomerReview = async (id: number) => {
    try {
      const res = await deleteCustomerReview(id);
      console.log(res);

      if (res?.status === 200) {
        setCustomer_Reviews((prev: CustomerReview[]) => prev.filter((customer_review: CustomerReview) => customer_review.id !== id));
      } else {
        console.log(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <tr>
      <td>{customer_review.title}</td>
      <td>
        <button onClick={() => handleDeleteCustomerReview(customer_review.id || 0)}>削除</button>
      </td>
    </tr>
  )
}