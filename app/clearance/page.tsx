"use client";
import { ProFormGroup, ProFormSelect, ProFormText } from "@ant-design/pro-components";
import React, { useEffect, useState } from "react";
import Container from "../../components/container/page";
import { Form, Radio } from "antd";
import Image from "next/image";
import Pasport1 from '@/assets/passport (1).png' 
import Pasport2 from '@/assets/passport (2).png' 
import './style.css'
import Link from "next/link";
import Swiper from '@/components/swiper/page'
import useProductStore from "@/store/products/page";
import { ToastContainer } from "react-toastify";

function page() {
  const { products, getProducts } = useProductStore()
  const [selectRadio, setSelectRadio] = useState(false)
  async function handleSubmit(value: any) {
    console.log(value);
  }

  useEffect(() => {
    getProducts()
  }, [])

  const validatePhoneNumber = (_: any, value: any) => {
    if (!value || value.startsWith("+998")) {
      return Promise.resolve();
    }
    return Promise.reject("Phone Number must start with +998");
  };

  return (
    <div>
      <ToastContainer/>
      <Container>
        <p className="flex gap-[20px] mt-[20px]">
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Home
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Smartfonlar
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
            Xaridni rasmiylashtirish
          </span>
        </p>
      </Container>

      <div className="mt-[28px]">
        <Container>
          <div className="flex justify-between max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:gap-[30px]">
            <div className="w-[900px] bg-[white] p-[44px] rounded-md">
              <Form onFinish={(value) => handleSubmit(value)}>
                <ProFormGroup>
                  <div className="">
                    <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">Telfon raqam </p>
                  <ProFormText
                    hasFeedback
                    name="phone_number"
                    placeholder="Please enter your Phone number"
                    rules={[
                      {
                        required: true,
                        message: "Phone number is required",
                      },
                      {
                        validator: validatePhoneNumber,
                      },
                    ]}
                    fieldProps={{
                      style: { width: "380px", height: "50px" },
                    }}
                  />
                  </div>
                    <div>
                    <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">Ism/Familya</p>
                    <ProFormText
                  hasFeedback
                  name="full_name"
                  placeholder="Please enter your Full Name"
                  rules={[
                    {
                      required: true,
                      message: "Full Name is required",
                    } 
                  ]}
                  fieldProps={{
                    style: { width: "380px", height: "50px" },
                  }}
                />
                    </div>
                </ProFormGroup>
                <ProFormGroup>
                <Radio.Group defaultValue="1" className="flex flex-col gap-[7px] mt-[12px]">
                  <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="1">Do’kondan olib ketish .</Radio>
                  <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="2">Xaridingizni uyingizga yetkazib berish </Radio>
                </Radio.Group>
                </ProFormGroup>
                <ProFormGroup>
                    <ProFormSelect
                        name="region"
                        options={[
                          { label: 'Toshkent', value: 'toshkent' },
                          { label: 'Sirdaryo', value: 'sirdaryo' },
                        ]}
                        placeholder="Siz qaysi viloyatdansiz ?"
                        rules={[
                          {
                            required: true,
                            message: 'Manzilingizni kiriting!',
                          },
                        ]}
                        fieldProps={{
                          style: { width: "380px", height: "50px", marginTop: 20 },
                        }}
                      />
                       <ProFormSelect
                        name="city"
                        options={[
                          { label: 'Guliston', value: 'guliston' },
                          { label: 'Sergeli', value: 'sergeli' },
                        ]}
                        placeholder="Siz qaysi tumanidansiz ?"
                        rules={[
                          {
                            required: true,
                            message: 'Manzilingizni kiriting!',
                          },
                        ]}
                        fieldProps={{
                          style: { width: "380px", height: "50px", marginTop: 20 },
                        }}
                      />
                </ProFormGroup>
                <ProFormGroup>
                  <div>
                    <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">Aniq manzilni ; Mahalla/Ko’cha/Uy</p>
                  <ProFormText
                    hasFeedback
                    name="address"
                    placeholder="Tinchlik mahallasi Yoshlik-1 ko’chasi 12-uy"
                    rules={[
                      {
                        required: true,
                        message: "Phone number is required",
                      },
                    ]}
                    fieldProps={{
                      style: { width: "560px", height: "50px" },
                    }}
                  />
                  </div>
                    <div>
                    <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">Yetkazib berish vaqti</p>
                    <ProFormText
                        hasFeedback
                        name="time"
                        placeholder="01/24"
                        rules={[
                          {
                            required: true,
                            message: "Full Name is required",
                          } 
                        ]}
                        fieldProps={{
                          style: { width: "220px", height: "50px" },
                        }}
                      />
                    </div>
                </ProFormGroup>
                <ProFormGroup>
                <Radio.Group defaultValue="1" className="flex flex-col gap-[7px] mt-[12px]">
                  <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="1" onChange={() => setSelectRadio(false)}>Naqtd yetkazgandan so’ng to’lash</Radio>
                  <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="2" onChange={() => setSelectRadio(false)}>Karta orqali ( Humo/Uzcard/Visa/)</Radio>
                  <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="3" onChange={() => setSelectRadio(true)}>Muddatli to’lov (4/6/12/24 oyga)</Radio>
                </Radio.Group>
                </ProFormGroup>
             
                {
                  selectRadio && (
                    <ProFormGroup>
                      <Radio.Group defaultValue="1" className="flex gap-[7px] mt-[36px]">
                        <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="4">4/oy</Radio>
                        <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="6">6/oy</Radio>
                        <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="9">9/oy</Radio>
                        <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="12">12/oy</Radio>
                        <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="24">24/oy</Radio>
                      </Radio.Group>
                    </ProFormGroup>
                  )
                }

                {
                  selectRadio && (
                    <div className="w-[290px] py-[14px] px-[16px] border border-[#D55200] rounded-xl mt-[24px]">
                        <p className="text-[18px] font-medium">6 oy / oyiga 6 879 789 so‘mdan</p>
                    </div>
                  )
                }
              </Form>
              {
                selectRadio && (
                  <div className="flex items-center gap-[24px] mt-[24px]">
                    <Image src={Pasport2} alt="Passport2"/>
                    <Image src={Pasport1} alt="Passport1"/>
                  </div>
                )
              }
            </div>
            <div className='w-[440px] h-[100%] p-[40px] bg-white rounded-xl max-sm:w-[350px]'>
                        <h4 className='font-bold text-[24px] mb-[17px] '>Sizni haridlaringiz</h4>
                        <p className='#240E00CC text-[16px]'>Mahsulotlar: <span className='text-[18px] font-bold mb-[10px] '>6 ta</span></p>
                        <p className='#240E00CC text-[16px]'>Jami summa: <span className='text-[28px] font-bold '>56 778 678 so‘m</span></p>
                        <Link href={'/clearance'}>
                        <button disabled className='w-[100%]  bg-[#D55200] text-white rounded-md font-medium h-[54px]  mt-[24px]'>Xaridni rasmiylashtirish</button>
                        </Link>
                  </div>
          </div>
        </Container>
      </div>

      
      <div className='mt-[60px]'>
        <Container>
          <h1 className='font-bold text-[32px] mb-[24px] max-sm:text-[20px]'>Aksiyadagi mahsulotlar</h1>
          <Swiper data={products}/>
        </Container>
      </div>
    </div>
  );
}

export default page;
