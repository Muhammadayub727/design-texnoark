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
import { Avatar, Button, Carousel, Form, Tooltip } from "antd";
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
import { Rate } from 'antd';


function Product() {
  const [assets, setassets] = useState([]);
  const [comments, setcommets] = useState("Telfon xususiyatlari");
  const {products, getProductsId} = useProductStore();
  const {getCommets, commets, postCommets} = useCommentStore()
  const [detail, setDetail] = useState({})
  const [product, setProduct]:any = useState({})

  async function handleSubmit(value:any){
    value.product_id = Number( Cookies.get('product_id'))
    const response = await postCommets(value)
    if(response.status == 201){
      toast.success('Comment shared successfully')
    }
  }

  async function getProductsID() { 
    const product_id = Number(Cookies.get('product_id'));
    const response = await getProductsId({ id: product_id });
    setDetail(response?.data?.data?.product_detail);
    setProduct(response?.data?.data?.product);
  
    if (response?.data?.data?.product?.assets) {
      let arr = response.data?.data?.product?.assets?.map((e:any) => ({
        original: e,
        thumbnail: e
      }));
      setassets(arr);
    }
  }

  useEffect(() => {
    const product_id = Number( Cookies.get('product_id'))
    getCommets({id: product_id})
    getProductsID()
  },[])

  const renderCustomImage = (item:any) => {
    return (
      <div className="image-gallery-image">
        <Image 
          src={item.original} 
          alt="Product Image" 
          width={400} 
          height={560}
          style={{ maxWidth: '400px', maxHeight: '560px', width: "100%", height: 'auto', margin: '0 auto' }} 
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
                <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
                  Home
                </span>
                <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
                  Smartphones
                </span>
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
                  <p className="mb-[8px] py-[16px] px-[32px] text-[16px] font-medium text-[#240E00CC] bg-[#F0F0F0] rounded-md">
                  Per Month {Math.ceil(product?.price / 12)} 12 monthly installments from soums
                  </p>
                  <div className="flex justify-between mb-[40px]">
                    <Button className="single_btn">Add to cart <ShoppingCartOutlined/></Button>
                    <Button className="single_btn2">Shopping<ShoppingOutlined/></Button>
                  </div>

                  <div className="flex flex-col gap-[20px]">
                    <div className="flex items-center gap-[16px]">
                    <Image src={Car} alt="Car Logo" width={100} height={100} />
                      <p className="text-[18px] font-medium text-[#240E00CC]">
                      Delivery throughout Uzbekistan
                      </p>
                    </div>
                    <div className="flex items-center gap-[16px]">
                    <Image src={Shop} alt="Shop Logo" width={100} height={100} />
                      <p className="text-[18px] font-medium text-[#240E00CC]">
                      You can take the store away
                      </p>
                    </div>
                    <div className="flex items-center gap-[16px]">
                    <Image src={Time} alt="Time Logo" width={100} height={100} />
                      <p className="text-[18px] font-medium text-[#240E00CC]">
                        TDelivery is 1 to 3 days
                      </p>
                    </div>
                    <Rate allowHalf defaultValue={1} />
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div>
            <Container>
              <div className="flex gap-[30px] mt-[40px]">
                <button
                  onClick={() => setcommets("Telfon xususiyatlari")}
                  className={`${
                    comments == "Telfon xususiyatlari"
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
                  } py-[14px] px-[32px] rounded-[10px font-semibold rounded-[10px]`}
                >
                  Customer opinion
                </button>
              </div>
            </Container>
          </div>
    
          <div>
            <Container>
              <div className="flex justify-between items-start max-lg:flex-col">
                <div className="w-[820px] max-sm:w-[375px] max-sm:mx-auto">
                  {comments == "Telfon xususiyatlari" ? (
                    <div className="py-[60px] px-[80px] max-sm:px-[10px]">
                      <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                        <p className="w-[200px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          Brand
                        </p>
                        <p className="w-[300px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          Apple 13
                        </p>
                      </div>
                      <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                        <p className="w-[200px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                        Number of CIM cards
                        </p>
                        <p className="w-[300px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          2
                        </p>
                      </div>
                      <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                        <p className="w-[200px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          Size
                        </p>
                        <p className="w-[300px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          75,09х155,11х8,28
                        </p>
                      </div>
                      <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                        <p className="w-[200px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          Model
                        </p>
                        <p className="w-[300px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          Iphone 13 Pro
                        </p>
                      </div>
                      <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                        <p className="w-[200px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                        Battery capacity
                        </p>
                        <p className="w-[300px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          4000 amp
                        </p>
                      </div>
                      <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                        <p className="w-[200px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                        The number of cores
                        </p>
                        <p className="w-[300px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          8
                        </p>
                      </div>
                      <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                        <p className="w-[200px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                        Fast memory RAM
                        </p>
                        <p className="w-[300px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          6 GB
                        </p>
                      </div>
                      <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                        <p className="w-[200px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                        Internal memory ROM
                        </p>
                        <p className="w-[300px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          128 GB
                        </p>
                      </div>
                      <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                        <p className="w-[200px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                        Processor
                        </p>
                        <p className="w-[300px] text-[18px] font-medium text-[#240E00CC] max-sm:text-[13px]">
                          Iphone 13 pro T[7390]
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mt-[40px]">
                      <Form onFinish={(value) => handleSubmit(value)}>
                            <ProFormTextArea
                              placeholder={'Leave a comment'}
                              name={'comment'}
                            />
                            <Button htmlType="submit" className="single_btn" style={{width: '120px', display: 'flex'}}>Sending</Button>
                       </Form>
                      </div>
                      <div className="flex flex-col gap-[20px] mt-[40px] mb-[50px]">
                        {
                          commets.slice(0,5).map((e:any,i:number) => {
                            return (
                              <div key={i} className="w-[100%] bg-white py-[30px] px-[40px] rounded-xl flex gap-[50px] items-start">
                                <div className="w-[15%]">
                                <Tooltip title={`${e?.user_id?.last_name} ${e?.user_id?.first_name}`} placement="top">
                                <Avatar
                                    className="w-[60px] h-[60px]"
                                    style={{ backgroundColor: "#87d068" }}
                                    icon={<UserOutlined />}
                                  />
                                </Tooltip>
                                </div>
                                <div className="w-[70%}">
                                  <h4 className="font-bold text-[24px] mb-[10px] max-sm:text-[18px]">{e?.user_id?.last_name} {e?.user_id?.first_name}</h4>
                                  <p className="font-medium text-[#240E00CC] text-[16px] max-sm:text-[13px]">{e?.comment}</p>
                                </div>
                              </div>
                            )
                          })
                        }
                     
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-[520px] h-[542px] p-[50px]">
                <Image className="w-full" src={Banner3} alt="Banner" width={1920} height={1080} />
                </div>
              </div>
            </Container>
          </div>


      <div className="mt-[120px]">
        <Container>
          <h1 className='font-bold text-[32px] mb-[24px] max-sm:text-[20px]'>Products on sale</h1>
          <Swiper data={products}/>
        </Container>
      </div>
    </>
  );
}

export default Product;