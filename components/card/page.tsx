// components/card/page.tsx
"use client"
import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './style.css';
import useCartsStore from '@/store/card/page'; // Check this path
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import uselikedtore from '@/store/liked/page';
import Image from 'next/image';
import { Rate } from 'antd';
import useCartItemsStore from '@/store/cartItemStore/page'; // Check this path

function CardComponent({ datas }: any) {
  const [count, setCount] = useState(1);
  const { deleteCards, getCards } = useCartsStore(); // Check if deleteCards and getCards are correctly implemented
  const { postliked, getliked } = uselikedtore(); // Check if postliked and getliked are correctly implemented
  const { updateCartItem }: any = useCartItemsStore(); // Check this path

  async function handleDelete(id: number) {
    const response = await deleteCards({ id });
    if (response?.status == 200) {
      toast.success('Cards deleted successfully');
      await getCards({ id: Number(Cookies.get('id')) });
    } else {
      toast.error('Cards deletion failed');
    }
  }

  async function handleLike(id: number) {
    const response = await postliked({ product_id: id });
    if (response.status == 201) {
      await getliked({ id: Number(Cookies.get('id')) });
      toast.success('Like successful');
    } else {
      toast.error('Like failed. You need to login');
    }
  }

  const handleQuantityChange = (newCount: number) => {
    setCount(newCount);
    updateCartItem(datas.id, newCount); // Update the global store
  };

  return (
    <div className='product-card justify-between'>
      <Image className='product-image' src={datas?.product_id?.images[0]} alt={datas?.product_id?.name} width={100} height={100} />
      <div className='product-details'>
        <p className='product-title'>{datas?.product_id?.name}</p>
        <div className='quantity-controls'>
          <button onClick={() => handleQuantityChange(count - 1)} disabled={count === 1} className='quantity-btn'>-</button>
          <p className='quantity'>{count}</p>
          <button onClick={() => handleQuantityChange(count + 1)} className='quantity-btn2'>+</button>
        </div>
      </div>
      <div className='product-actions'>
        <div className='action-icons'>
          <span onClick={() => handleDelete(datas?.id)} className='action-icon mt-[100px]'><DeleteOutlined className='icon' /></span>
          <span onClick={() => handleLike(datas?.product_id?.id)} className='action-icon mt-[100px]'><HeartOutlined className='icon' /></span>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
