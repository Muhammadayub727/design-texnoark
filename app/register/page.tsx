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

  const {Register} = AuthStore()


  async function handleSubmit(value: any){
    const response = await Register(value)
    if(response?.status == 201){
      toast.success('Register successful')
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }else{
      toast.error('Register Failed')
    }
  }

  return (
    <div>
      <ToastContainer/>
      <Container>
        <p className="flex gap-[20px] mt-[20px]">
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Bosh sahifa
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Smartfonlar
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
            Kirish
          </span>
        </p>
      </Container>

      <div className="mt-[38px]">
        <Container>
          <div className="w-[500px] p-[50px] bg-white rounded-xl mx-auto">
            <h1 className="font-black text-[36px] text-center mb-[36px]">
              Login
            </h1>
            <Form onFinish={(value) => handleSubmit(value)}>
             <div>
                <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">
                  Ismingiz
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
                  Familyangiz
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
                  Telfon raqam
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
                  Parol
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
                  <Button htmlType="submit" className="auth_btn h-[52px] bg-[#D55200] text-[white] font-medium text-[17px]">
                  Ro'yhatdan o'tish
                </Button>
                <Link href={'/login'} className="w-full">
                <Button className="auth_btn2 h-[52px] w-full bg-[#F0F0F0] text-[black] font-medium text-[17px]">
                  Kirish
                </Button>
                </Link>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default page;
