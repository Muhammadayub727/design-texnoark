import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import Huawei from '@/assets/huawei.png';
import Artel from '@/assets/artel.png';
import Samsung from '@/assets/samsung.png';
import Apple from '@/assets/apple.png';
import Vivo from '@/assets/vivo.png';

const AnimatedImage = animated(Image);

function ProductImages() {
  const props = useSpring({
    loop: true,
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' }, 
    config: { duration: 5000 }
  });

  return (
    <div className='mb-[10px] flex'>
      <animated.div style={props} className='w-[250px] h-[100px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Huawei' src={Huawei} className='w-[70px] h-[40px] ml-[90px] mt-[30px]' />
      </animated.div>
      <animated.div style={props} className='w-[250px] h-[100px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Artel' src={Artel} width={50} height={50}  className='w-[90px] h-[40px] ml-[70px] mt-[30px]'  />
      </animated.div>
      <animated.div style={props} className='w-[250px] h-[100px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Samsung' src={Samsung} className='w-[70px] h-[40px] ml-[90px] mt-[30px]'  />
      </animated.div>
      <animated.div style={props} className='w-[250px] h-[100px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Apple' src={Apple}  className='w-[70px] h-[40px] ml-[90px] mt-[30px]'  />
      </animated.div>
      <animated.div style={props} className='w-[250px] h-[100px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Vivo' src={Vivo}  className='w-[70px] h-[40px] ml-[90px] mt-[30px]' />
      </animated.div>
    </div>
  );
}

export default ProductImages;
