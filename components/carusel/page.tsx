import React from 'react';
import { Carousel } from 'antd';
import Container from '../container/page';
import './style.css';
import Image from 'next/image';
import Img from '@/assets/Mask group.png'

const App: React.FC = () => (
  <>
    <Container>
      <Carousel arrows infinite={true} autoplay={true} className='rounded-lg overflow-hidden custom-carousel'>
        <div>
          <div className='carousel'>
              <Image src={Img} alt='Img' className='w-[100%] h-[100%] object-contain'/>
          </div>
        </div>
        <div>
          <div className='carousel'>
          <Image src={Img} alt='Img' className='w-[100%] h-[100%] object-contain'/>
          </div>
        </div>
        <div>
          <div className='carousel'>
          <Image src={Img} alt='Img' className='w-[100%] h-[100%] object-contain'/>
          </div>
        </div>
      </Carousel>
    </Container>
  </>
);

export default App;
