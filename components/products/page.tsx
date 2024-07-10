import {
  ShoppingCartOutlined,
  BarChartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button } from "antd";
import React from "react";
import "./style.css";
import Link from "next/link";
import uselikedtore from "@/store/liked/page";
import { toast } from 'react-toastify';
import Cookies from "js-cookie";
import useCartsStore from "@/store/card/page";
import Image from "next/image";


function page({ datas }: any) {
  const number = Math.ceil(datas.price / 12);
  const { postliked, getliked } = uselikedtore();
  const { postCards, getCards } = useCartsStore();


  async function handleCartSubmit(id: number) {
    const response = await postCards({ product_id: id });
    console.log("Cart response:", response);
    if (response?.status == 201) {
      await getCards({ id: Number(Cookies.get('id')) });
      toast.success('Product added to cart successfully');
    } else {
      toast.error('Product added to cart failed. You need to signin.');
    }
  }

  async function handleLikePost(id: number) {
    const response = await postliked({ product_id: id });
    if (response.status == 201) {
      await getliked({ id: Number(Cookies.get('id')) });
      console.log(Cookies.get("id"));
      toast.success('Like successful');
    } else {
      toast.error('Like failed. You need to signin.');
    }
  }

  console.log(Cookies.get("id"));

  return (
    <div className="w-[305px] h-[490px] pt-[50px] pb-[36px] px-[30px] bg-white rounded-xl max-sm:w-[168px] max-sm:h-[320px] max-sm:p-[5px]">
      <Link onClick={() => Cookies.set('product_id', datas.id)} href={'/product'}>
        <Image
          src={datas.images[0]}
          width={100}
          height={100}
          alt="IMG"
          className="w-[150px] h-[160px] mx-auto max-sm:w-[80px] max-sm:h-[80px] max-sm:object-cover bg-transparent"
        />
        <p className="mt-[36px] text-[16px] mb-[16px] max-sm:mt-[5px] max-sm:text-[14px] max-sm:mb-[2px]">
          {datas.name}
        </p>
        <h4 className="font-bold text-[18px] max-sm:text-[16px]">{datas.price} so‘m</h4>
        <p className="text-[#1EB91E] mt-[11px] mb-[19px] bg-[#1EB91E14] inline-block py-2 px-4 rounded-lg max-sm:text-[14px]">
          {number} so’mdan/12 oy
        </p>
      </Link>
      <div className="flex max-sm:flex-col items-center justify-between gap-[10px]">
        <Button onClick={() => handleCartSubmit(datas.id)} className="btn_product max-sm:w-[100%]">
          Cart <ShoppingCartOutlined />
        </Button>
        <div className="flex items-center gap-[10px]">
          <Badge>
            <Avatar
              shape="square"
              size="large"
              className="bg-[#F0F0F0] cursor-pointer"
              onClick={() => handleLikePost(datas.id)}
            >
              <HeartOutlined className="text-[20px] text-[black]" />
            </Avatar>
          </Badge>
          <Badge>
            <Avatar
              shape="square"
              size="large"
              className="bg-[#F0F0F0] cursor-pointer"
            >
              <BarChartOutlined className="text-[20px] text-[black]" />
            </Avatar>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default page;
