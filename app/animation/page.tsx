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
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },  // Adjusted to -100% for continuous loop
        config: { duration: 3000, reset: true }, // Adjust duration for the speed of animation
      });
      

  return (
    <div className=' mb-[40px] flex'>
      <animated.div style={props} className='w-[250px] h-[140px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Huawei' src={Huawei} className='w-[100px] h-[60px] ml-[70px] mt-[30px]' />
      </animated.div>
      <animated.div style={props} className='w-[250px] h-[140px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Artel' src={Artel} width={50} height={50} className='w-[100px] h-[60px] ml-[70px] mt-[30px]' />
      </animated.div>
      <animated.div style={props} className='w-[250px] h-[140px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Samsung' src={Samsung} className='w-[100px] h-[60px] ml-[70px] mt-[30px]' />
      </animated.div>
      <animated.div style={props} className='w-[250px] h-[140px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Apple' src={Apple} className='w-[100px] h-[60px] ml-[70px] mt-[30px]' />
      </animated.div>
      <animated.div style={props} className='w-[250px] h-[140px] bg-[#fff] rounded-[5px] ml-[20px] mt-[10px]'>
        <AnimatedImage alt='Vivo' src={Vivo} className='w-[100px] h-[60px] ml-[70px] mt-[30px]' />
      </animated.div>
    </div>
  );
}

export default ProductImages;
