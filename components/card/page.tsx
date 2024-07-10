import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './style.css'; // Assuming you have a CSS file for styles
import useCartsStore from '@/store/card/page';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import uselikedtore from '@/store/liked/page';
import Image from 'next/image';
import { Rate } from 'antd';

function Page({datas}:any) {
    const [count, setCount] = useState(1);
    const {deleteCards, getCards} = useCartsStore()
    const {postliked, getliked} = uselikedtore()

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
        const response = await postliked({product_id:id})
        if(response.status == 201){
            await getliked({id: Number(Cookies.get('id'))})
            toast.success('Like successful')
        } else{
            toast.error('Like failed You have need login')
        }
    }



    return (
        <div className='product-card justify-between'>
            <Image className='product-image' src={datas?.product_id?.images[0]} alt={datas.product_id} />
            <div className='product-details'>
                <p className='product-title'>{datas?.product_id?.name}</p>
                <div className='quantity-controls'>
                    <button onClick={() => setCount(count - 1)} disabled={count === 1} className='quantity-btn'>-</button>
                    <p className='quantity'>{count}</p>
                    <button onClick={() => setCount(count + 1)} className='quantity-btn'>+</button>
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
