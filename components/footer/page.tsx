"use client"
import React from 'react'
import Container from '../container/page'
import Logo from '../../assets/LOGO.png'
import Image from 'next/image'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Cookies from 'js-cookie'

function page() {
  return (
    <footer className='mt-[60px]'>
        <Container>
            <div className='flex bg-white pt-[60px] px-[80px] rounded-xl h-[400px] justify-between max-sm:flex-col'>
                <div>
                    <Image src={Logo} alt='Logo' width={240} height={68}/>
                    <h1 className='text-[18px] font-bold mt-[32px] mb-[17px]'>Our social networks</h1>
                    <div className='flex gap-[12px]'>
                        <InstagramOutlined className='text-[30px] w-[50px] h-[44px] bg-[#F0F0F0] py-[12px] px-[15px] cursor-pointer' />
                        <FacebookOutlined className='text-[30px] w-[50px] h-[44px] bg-[#F0F0F0] py-[12px] px-[15px] cursor-pointer ' />
                        <TwitterOutlined className='text-[30px] w-[50px] h-[44px] bg-[#F0F0F0] py-[12px] px-[15px] cursor-pointer' />
                        <WhatsAppOutlined className='text-[30px] w-[50px] h-[44px] bg-[#F0F0F0] py-[12px] px-[15px] cursor-pointer' />
                    </div>
                </div>
                 <div>
                    <h2 className='text-[18px] font-bold '>About the organization</h2>
                    <ul className='mt-[20px]'>
                        <li onClick={() => Cookies.set('aboutus', 'Texnoark haqida')} className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'><Link href={'/about'}>Texnoark about</Link></li>
                        <li onClick={() => Cookies.set('aboutus', 'Muddatli to’lov')} className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'><Link href={'/about'}>Term payment</Link></li>
                        <li onClick={() => Cookies.set('aboutus', 'Yordam')} className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'><Link href={'/about'}>help</Link></li>
                        <li onClick={() => Cookies.set('aboutus', 'Tovarlarga kafolat')} className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'><Link href={'/about'}>Warranty on goods</Link></li>
                        <li onClick={() => Cookies.set('aboutus', 'To‘lov usullari')} className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'><Link href={'/about'}>Payment methods</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-[18px] font-bold '>Category</h2>
                    <ul className='mt-[20px]'>
                        <li className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'>Watches</li>
                        <li className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'>Laptop and Pc</li>
                        <li className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'>Smartphone</li>
                        <li className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'>Washing machine</li>
                        <li className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'>Refrigerators</li>
                        <li className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'>Air conditer</li>
                        <li className='text-[14px] font-medium text-[#240E0099] mb-[16px] hover:text-[blue] cursor-pointer'>Oven and Gazpilita</li>
                    </ul>
                </div>
                <div className='w-[290px]'>
                    <h2 className='text-[18px] font-bold '>Contact us</h2>
                    <p className='text-[#240E0099] font-medium mt-[20px]'><span className='text-[black]'>Our address:</span> 100052,Republic of Uzbekistan, Tashkent city, Bodomzor road, 1-tor street, 72</p>
                    <p className='text-[#240E0099] font-medium mt-[16px] mb-[20px]'><span className='text-[black]'>Phone Number :</span> +998 71 300 30 30</p>
                    <p className='text-[#240E0099] font-medium'><span className='text-[black]'>Email :</span> texnoarko@gmail.com</p>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default page