"use client"
import React from "react";
import Container from "@/components/container/page";
import { Button, Form } from "antd";
import { ProFormText } from "@ant-design/pro-components";
import './style.css'
import AuthStore from "@/store/auth/page";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const validatePhoneNumber = (_: any, value: any) => {
    if (!value || value.startsWith("+998")) {
      return Promise.resolve();
    }
    return Promise.reject("Phone Number must start with +998");
  };

  const {signup} = AuthStore()


  async function handleSubmit(value: any){
    const response = await signup(value)
    if(response?.status == 201){
      toast.success('signup successful')
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }else{
      toast.error('signup Failed')
    }
  }

  return (
    <div>
      <ToastContainer/>
      <Container>
        <p className="flex gap-[20px] mt-[20px]">
          <Link href={'/'}>
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Home
          </span>
          </Link>
          <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
            Enter
          </span>
        </p>
      </Container>

      <div className="mt-[38px]">
        <Container>
          <div className="w-[500px] p-[50px] bg-white rounded-xl mx-auto">
            <h1 className="font-black text-[36px] text-center mb-[36px]">
              Register
            </h1>
            <Form onFinish={(value) => handleSubmit(value)}>
             <div>
                <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">
                  FirstName
                </p>
                <ProFormText
                  hasFeedback
                  name="first_name"
                  placeholder="Please enter your First Name"
                  rules={[
                    {
                      required: true,
                      message: "First Name is required",
                    },
                  ]}
                  fieldProps={{
                    style: { width: "100%", height: "50px" },
                  }}
                />
              </div>
              <div>
                <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">
                  LastName
                </p>
                <ProFormText
                  hasFeedback
                  name="last_name"
                  placeholder="Please enter your Last Name"
                  rules={[
                    {
                      required: true,
                      message: "Last Name is required",
                    },
                  ]}
                  fieldProps={{
                    style: { width: "100%", height: "50px" },
                  }}
                />
              </div>
              <div>
                <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">
                  Email
                </p>
                <ProFormText
                  hasFeedback
                  name="email"
                  placeholder="Please enter your Email"
                  rules={[
                    {
                      required: true,
                      message: "Email is required",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                  fieldProps={{
                    style: { width: "100%", height: "50px" },
                  }}
                />
              </div>
              <div>
                <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">
                  Smartphone Number
                </p>
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
  style: { width: "100%", height: "50px" },
}}
/>
</div>
<div>
<p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">
Password
</p>
<ProFormText.Password
hasFeedback
name="password"
placeholder="Please enter your Password"
rules={[
  {
    required: true,
    message: "Password is required",
  },
]}
fieldProps={{
  style: { width: "100%", height: "50px" },
}}
/>
</div>
<div className="flex flex-col gap-[10px]">
<Link href={'/login'} className="w-full">
<p className="text-[14px] font-medium text-[#240E00CC] mb-[5px]">
You are sign in?
</p>
</Link>
<Button htmlType="submit" className="auth_btn h-[52px] bg-[#D55200] text-[white] font-medium text-[17px]">
SignUp
</Button>
</div>
</Form>
</div>
</Container>
</div>
</div>
);
}

export default page;
