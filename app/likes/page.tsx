"use client"
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Container from '@/components/container/page'
import uselikestore from '@/store/liked/page'
import Products from '@/components/products/page'
import Cookies from 'js-cookie'

function page() {

    const {likes, getlikes} = uselikestore()
    const [data, setData]:any = useState([])

    async function Getlikes(){
        let arr = likes?.map((e:any) => {
            return e?.product_id
        }) 
        setData(arr)
    }
    
    useEffect(() => {
        const id = Number(Cookies.get('id'))
        getlikes({id})
        Getlikes()      
    }, [])
  return (
    <div>
        <ToastContainer/>
        <div>
            <Container>
                <div className='flex flex-wrap mt-[50px] gap-[30px]'>
                    {data?.map((e:any, i:number) => {
                        return (
                            <Products datas={e} key={i}/>
                        )
                    })}
                </div>
            </Container>
        </div>
    </div>
  )
}

export default page