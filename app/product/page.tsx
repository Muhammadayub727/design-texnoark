"use client"
import {
  ShoppingOutlined,
  ShoppingCartOutlined 
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Container from "../../components/container/page";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import { Avatar, Button, Carousel, Form, Tooltip, Rate } from "antd";
import Image from "next/image";
import Car from "@/assets/car.svg";
import Shop from "@/assets/shop.svg";
import Time from "@/assets/time.svg";
import { UserOutlined } from "@ant-design/icons";
import Banner3 from '@/assets/banner3.png'
import Swiper from '../../components/swiper/page'
import useProductStore from "@/store/products/page";
import { ProFormTextArea } from "@ant-design/pro-components";
import useCommentStore from "@/store/commets/page";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
// import { Image } from "next/image";

function Product() {
  const [assets, setassets] = useState([]);
  const [comments, setcommets] = useState("Smartphone features");
  const {products, getProductsId} = useProductStore();
  const {getCommets, commets, postCommets} = useCommentStore();
  const [detail, setDetail] = useState({});
  const [product, setProduct]:any = useState({});
  const [rating, setRating] = useState(0);

  async function handleSubmit(value:any) {
    value.product_id = Number(Cookies.get('product_id'));
    const response = await postCommets(value);
    if(response.status == 201) {
      toast.success('Comment shared successfully');
    }
  }

  async function getProductsID() { 
    const product_id = Number(Cookies.get('product_id'));
    const response = await getProductsId({ id: product_id });
    setDetail(response?.data?.data?.product_detail);
    setProduct(response?.data?.data?.product);
  
    if (response?.data?.data?.product?.images) {
      let arr = response.data?.data?.product?.images?.map((e:any) => ({
        original: e,
        thumbnail: e
      }));
      setassets(arr);
    }
  }

  useEffect(() => {
    const product_id = Number(Cookies.get('product_id'));
    getCommets({id: product_id});
    getProductsID();
    
    const savedRating = localStorage.getItem('product_rating');
    if (savedRating) {
      setRating(Number(savedRating));
    }
  }, []);

  const handleRatingChange = (value: number) => {
    setRating(value);
    localStorage.setItem('product_rating', value.toString());
  };

  const renderCustomImage = (item:any) => {
    return (
      <div className="image-gallery-image">
        <img
          src={item?.original} 
          alt="Product Image" 
          width={100}
          height={100}
          style={{ maxWidth: '400px', maxHeight: '560px', width: '100%', height: 'auto', margin: '0 auto' }} 
        />
      </div>
    );
  };

  return (
    <>
      <ToastContainer/>
      <div>
        <Container>
          <p className="flex gap-[10px] mt-[20px]">
            <Link href={"/"}>
              <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
                Home
              </span>
            </Link>
            <Link href={"/categories"}>
              <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
                Smartphones
              </span>
            </Link>
            <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
              Apple iPhone 13 128Gb Blue
            </span>
          </p>
        </Container>
      </div>
      <div className="mt-[24px]">
        <Container>
          <div className="flex justify-between max-md:flex-col max-md:gap-[10px]">
            <div className="w-[700px] bg-white rounded-md h-[560px] max-sm:w-[345px] max-sm:mx-auto max-sm:h-[300px]">
              <ImageGallery
                renderItem={renderCustomImage}
                items={assets}
                infinite={true}
                thumbnailPosition="left"
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                showNav={false}
              />
            </div>
            <div className="w-[600px] bg-white h-[560px] p-[40px] rounded-md max-sm:max-w-96 max-sm:h-[700px]">
              <h3 className="text-[24px] font-bold mb-[26px]">
                {product?.name}
              </h3>
              <div className="flex items-center gap-[12px]">
                <p className="text-[16px] text-[#240E00CC] font-medium mr-3">
                  Color:
                </p>
                <div className="w-[24px] h-[24px] bg-[#9747FF] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#3472ED] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#D55200] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#DADADA] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#FEDACB] rounded-full cursor-pointer"></div>
              </div>
              <p className="text-[16px] text-[#240E00CC] font-medium mr-3 mt-[42px] mb-[36px]">
                Price:{" "}
                <span className="text-[28px] font-bold text-[#240E00CC]">
                  {product?.price} soums
                </span>
              </p>
              <div className="mb-[10px]">
                <Rate value={rating} onChange={handleRatingChange} />
              </div>
              <p className="mb-[8px] py-[16px] px-[32px] text-[16px] font-medium text-[#240E00CC] bg-[#F0F0F0] rounded-md">
                Per Month {Math.ceil(product?.price / 12)} 12 monthly installments from soums
              </p>
              <div className="flex justify-between mb-[40px]">
                <Button className="single_btn">Add to cart <ShoppingCartOutlined/></Button>
                <Button className="single_btn2">Shopping<ShoppingOutlined/></Button>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[16px]">
                  <Image src={Car} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Delivery throughout Uzbekistan
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Image src={Shop} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    You can take the store away
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Image src={Time} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Delivery is 1 to 3 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex gap-[30px] mt-[40px]">
            <button
              onClick={() => setcommets("Smartphone features")}
              className={`${
                comments == "Smartphone features"
                  ? "bg-[#FF6F14] text-white duration-300"
                  : "bg-white text-[black] duration-300"
              } py-[14px] px-[32px] rounded-[10px font-semibold rounded-[10px]`}
            >
              Phone features
            </button>
            <button
              onClick={() => setcommets("Mijozlarni fikri")}
              className={`${
                comments == "Mijozlarni fikri"
                  ? "bg-[#FF6F14] text-white duration-300"
                  : "bg-white text-[black] duration-300"
              } py-[14px] px-[32px] rounded-[10px] font-semibold`}
            >
              Customer feedback
            </button>
          </div>
        </Container>
      </div>
      {comments == "Smartphone features" ? (
        <div>
          <Container>
            <div className="p-[20px] bg-white rounded-[20px]">
              <div
                className="pl-[32px] pt-[32px] text-[18px]"
                dangerouslySetInnerHTML={{ __html: detail }}
              />
            </div>
          </Container>
        </div>
      ) : (
        <div className="mt-[40px] mb-[60px]">
          <Container>
            <div>
              <div>
                <p className="text-[24px] text-[#240E00CC] font-bold mb-[24px]">
                  Customer feedback
                </p>
              </div>
              {commets?.map((comment: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="border-b-2 border-[#F5F5F5] pb-[20px] mb-[20px]"
                  >
                    <div className="flex items-center gap-[10px] mb-[12px]">
                      <Avatar size={48} icon={<UserOutlined />} />
                      <div>
                        <p className="text-[16px] text-[#240E00] font-semibold">
                          {comment.user_name}
                        </p>
                        <p className="text-[14px] text-[#240E0099]">
                          {comment.created_at}
                        </p>
                      </div>
                    </div>
                    <p className="text-[16px] text-[#240E00CC]">
                      {comment.comment}
                    </p>
                  </div>
                );
              })}
              <Form onFinish={handleSubmit}>
                <Form.Item name="comment">
                  <ProFormTextArea
                    width={100}
                    label="Comment"
                    placeholder="Your feedback"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your comment",
                      },
                    ]}
                  />
                </Form.Item>
                <Button
                  className="bg-[#FF6F14] text-[white] py-[14px] px-[32px] rounded-[10px] font-semibold"
                  htmlType="submit"
                >
                  Send comment
                </Button>
              </Form>
            </div>
          </Container>
        </div>
      )}
      <Swiper/>
      <Container>
        <Image src={Banner3} alt="Banner3"/>
      </Container>
    </>
  );
}

export default Product;
