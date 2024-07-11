// // components/card/page.tsx
// "use client"
// import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
// import React, { useState } from 'react';
// import './style.css';
// import useCartsStore from '@/store/card/page'; // Check this path
// import { toast } from 'react-toastify';
// import Cookies from 'js-cookie';
// import uselikestore from '@/store/likes/page';
// import Image from 'next/image';
// import { Rate } from 'antd';
// import useCartItemsStore from '@/store/cartItemStore/page'; // Check this path

// function CardComponent({ datas }: any) {
//   const [count, setCount] = useState(1);
//   const { deleteCards, getCards } = useCartsStore(); // Check if deleteCards and getCards are correctly implemented
//   const { postlikes, getlikes } = uselikestore(); // Check if postlikes and getlikes are correctly implemented
//   const { updateCartItem }: any = useCartItemsStore(); // Check this path

//   async function handleDelete(id: number) {
//     const response = await deleteCards({ id });
//     if (response?.status == 200) {
//       toast.success('Card deleted');
//       await getCards({ id: Number(Cookies.get('id')) });
//     } else {
//       toast.error('Card deletion failed');
//     }
//   }

//   async function handleLike(id: number) {
//     const response = await postlikes({ product_id: id });
//     if (response.status == 201) {
//       await getlikes({ id: Number(Cookies.get('id')) });
//       toast.success('Like successful');
//     } else {
//       toast.error('Like failed. You need to login');
//     }
//   }

//   const handleQuantityChange = (newCount: number) => {
//     setCount(newCount);
//     updateCartItem(datas.id, newCount); // Update the global store
//   };

//   return (
//     <div className='product-card justify-between'>
//       <Image className='product-image' src={datas?.product_id?.images[0]} alt={datas?.product_id?.name} width={100} height={100} />
//       <div className='product-details'>
//         <p className='product-title'>{datas?.product_id?.name}</p>
//         <div className='quantity-controls'>
//           <button onClick={() => handleQuantityChange(count - 1)} disabled={count === 1} className='quantity-btn'>-</button>
//           <p className='quantity'>{count}</p>
//           <button onClick={() => handleQuantityChange(count + 1)} className='quantity-btn2'>+</button>
//         </div>
//       </div>
//       <div className='product-actions'>
//         <div className='action-icons'>
//           <span className='product-price float-left '>{`${datas?.product_id?.price} soums`}</span>
//           <span onClick={() => handleDelete(datas?.id)} className='action-icon mt-[100px]'><DeleteOutlined className='icon' /></span>
//           <span onClick={() => handleLike(datas?.product_id?.id)} className='action-icon mt-[100px]'><HeartOutlined className='icon' /></span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardComponent;
"use client"

import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import './style.css'; // Assuming you have a CSS file for styles
import useCartsStore from '@/store/card/page';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import useLikeStore from '@/store/liked/page';

function Page({datas}:any) {
    const [count, setCount] = useState(1);
    const {deleteCards, getCards} = useCartsStore()
    const {postLikes, getLikes} :any = useLikeStore()

    async function handleDelete(id:number){
        const response = await deleteCards({id})
        if(response?.status == 200){
            toast.success('Cards deleted successfully')
            await getCards({id: Number(Cookies.get('id'))})
        }else{
            toast.error('Cards deletion failed')
        }
    }

    async function handleLike(id:number){
        const response = await postLikes({product_id:id})
        if(response.status == 201){
            await getLikes({id: Number(Cookies.get('id'))})
            toast.success('Like successful')
        } else{
            toast.error('Like failed You have need login')
        }
    }



    return (
        <div className='product-card justify-between'>
            <img className='product-image' src={datas?.product_id?.images[0]} alt={datas.product_id} />
            <div className='product-details'>
                <p className='product-title'>{datas?.product_id?.name}</p>
                <div className='quantity-controls'>
                    <button onClick={() => setCount(count - 1)} disabled={count === 1} className='quantity-btn'>-</button>
                    <p className='quantity'>{count}</p>
                    <button onClick={() => setCount(count + 1)} className='quantity-btn2'>+</button>
                </div>
            </div>
            <div className='product-actions'>
                <h4 className='product-price'>{datas?.product_id?.price * count} so‘m</h4>
                <div className='action-icons'>
                    <span onClick={() => handleDelete(datas?.id)} className='action-icon'><DeleteOutlined className='icon' /></span>
                    <span onClick={() => handleLike(datas?.product_id?.id)} className='action-icon'><HeartOutlined className='icon' /></span>
                </div>
            </div>
        </div>
    );
}

export default Page;
