"use client"

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface LineItem {
  productTitle: string;
  quantity: number;
}

interface OrderDetails {
  line_items: LineItem[];
}

const OrderPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    if (orderId) {
      axios.get(`/api/orders/${orderId}`)
        .then(response => {
          setOrderDetails(response.data);
        })
        .catch(error => {
          console.error("Error fetching order details:", error);
        });
    }
  }, [orderId]);

  if (!orderDetails) return <div>Loading...</div>;

  return (
    <div className='sp wrapper mt-[50rem] min-h-screen text-center mx-auto'>
      <h1 className='text-xl lg:text-2xl font-semibold text-dark/75 max-w-2xl mx-auto'>
        Order Details
      </h1>
      <ul className='mt-5'>
        {orderDetails.line_items.map((item, index) => (
          <li key={index}>
            {item.productTitle} - {item.quantity} pcs
          </li>
        ))}
      </ul>
      <div className='mt-7'>
        <Link href='/dashboard/user' className='button'>
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}

export default OrderPage;
