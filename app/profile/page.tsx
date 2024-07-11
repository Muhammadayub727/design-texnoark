// "use client";
// import React from "react";
// import Container from "@/components/container/page";
// import Image from "next/image";
// import Profile from "@/assets/profile.svg";
// import Profilee from '@/assets/profilee.svg'
// import edit from "@/assets/edit.png"
// import { ToastContainer } from "react-toastify";

// function page() {
//   return (
//     <div>
//       <ToastContainer/>
//       <div>
//         <Container>
//           <p className="flex gap-[10px] mt-[20px]">
//             <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
//               Home
//             </span>
//             <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
//               Accout
//             </span>
//           </p>
//         </Container>
//       </div>

//       <div>
//         <Container>
//           <div className="flex gap-[20px] mt-[24px] max-sm:flex-col max-sm:justify-center">
//             <div className="bg-white  w-[380px] py-[44px] px-[30px] rounded-md max-sm:mx-auto ">
//               <div className="flex justify-between items-center">
//                 <Image src={Profile} alt="profile" />
//                 <div className="mr-[60px]">
//                   <h4 className="font-bold text-[18px] ">Ahmad Ben Bella</h4>
//                   <p>Id8937657921</p>
//                 </div>
//                 <Image src={edit} alt="profile" />
//               </div>
//               <div className="mt-[53px]">
//                 <div className="cursor-pointer flex justify-between items-center py-[14px] px-[20px] bg-[#FF6F14] text-white font-medium rounded-md">
//                   <p>Personal information</p>
//                   <Image src={Profilee} alt="profile" />
//                 </div>
//                 <div className="cursor-pointer mt-[8px]  flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
//                   <p>Purchase history</p>
//                   <Image src={Profilee} alt="profile" />
//                 </div>
//                 <div className="cursor-pointer mt-[8px]  flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
//                   <p>Products you like</p>
//                   <Image src={Profilee} alt="profile" />
//                 </div>
//                 <div className="cursor-pointer mt-[8px]  flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
//                   <p>Payment history</p>
//                   <Image src={Profilee} alt="profile" />
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white  w-[400px] py-[44px] px-[30px] rounded-md max-sm:mx-auto">
//                 <h4 className="font-black text-[24px] mb-[24px]">Personal information</h4>
//                 <p className="text-[16px] mb-[20px]">FirstName: <span className="font-bold text-18px">Ahmadboy</span></p>
//                 <p className="text-[16px] mb-[20px]">LastName: <span className="font-bold text-18px">Ben Bella</span></p>
//                 <p className="text-[16px] mb-[20px]">PhoneNumber: <span className="font-bold text-18px">+998 99 300 30 30</span></p>
//                 <p className="text-[16px] mb-[20px]">Adress: <span className="font-bold text-18px">Surxandaryo.v/Denov.t/</span></p>
//                 <p className="text-[16px] mb-[20px]">Our to Address: <span className="font-bold text-18px">Yoshlik-1.k/12-honodon</span></p>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default page;

"use client";
import React, { useState } from "react";
import Container from "@/components/container/page";
import Image from "next/image";
import Profile from "@/assets/profile.svg";
import Profilee from '@/assets/profilee.svg'
import edit from "@/assets/edit.png"
import { ToastContainer } from "react-toastify";
import { Modal, Button, Input } from 'antd';

function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Ahmadboy',
    lastName: 'Ben Bella',
    phoneNumber: '+998 99 300 30 30',
    address: 'Surxandaryo.v/Denov.t/',
    detailedAddress: 'Yoshlik-1.k/12-honodon',
  });

  const [tempProfileData, setTempProfileData] = useState(profileData);

  const showModal = () => {
    setTempProfileData(profileData); // Initialize temp data with current profile data
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setProfileData(tempProfileData);
    setIsModalVisible(false);
    // Implement update functionality here
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setTempProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <ToastContainer/>
      <div>
        <Container>
          <p className="flex gap-[10px] mt-[20px]">
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Home
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
              Account
            </span>
          </p>
        </Container>
      </div>

      <div>
        <Container>
          <div className="flex gap-[20px] mt-[24px] max-sm:flex-col max-sm:justify-center">
            <div className="bg-white w-[380px] py-[44px] px-[30px] rounded-md max-sm:mx-auto">
              <div className="flex justify-between items-center">
                <Image src={Profile} alt="profile" />
                <div className="mr-[60px]">
                  <h4 className="font-bold text-[18px]">Ahmad Ben Bella</h4>
                  <p>Id8937657921</p>
                </div>
                <Image src={edit} alt="edit" onClick={showModal} className="cursor-pointer" />
              </div>
              <div className="mt-[53px]">
                <div className="cursor-pointer flex justify-between items-center py-[14px] px-[20px] bg-[#FF6F14] text-white font-medium rounded-md">
                  <p>Personal information</p>
                  <Image src={Profilee} alt="profile" />
                </div>
                <div className="cursor-pointer mt-[8px] flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
                  <p>Purchase history</p>
                  <Image src={Profilee} alt="profile" />
                </div>
                <div className="cursor-pointer mt-[8px] flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
                  <p>Products you like</p>
                  <Image src={Profilee} alt="profile" />
                </div>
                <div className="cursor-pointer mt-[8px] flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
                  <p>Payment history</p>
                  <Image src={Profilee} alt="profile" />
                </div>
              </div>
            </div>
            <div className="bg-white w-[400px] py-[44px] px-[30px] rounded-md max-sm:mx-auto">
              <h4 className="font-black text-[24px] mb-[24px]">Personal information</h4>
              <p className="text-[16px] mb-[20px]">FirstName: <span className="font-bold text-18px">{profileData.firstName}</span></p>
              <p className="text-[16px] mb-[20px]">LastName: <span className="font-bold text-18px">{profileData.lastName}</span></p>
              <p className="text-[16px] mb-[20px]">PhoneNumber: <span className="font-bold text-18px">{profileData.phoneNumber}</span></p>
              <p className="text-[16px] mb-[20px]">Address: <span className="font-bold text-18px">{profileData.address}</span></p>
              <p className="text-[16px] mb-[20px]">Our to Address: <span className="font-bold text-18px">{profileData.detailedAddress}</span></p>
            </div>
          </div>
        </Container>
      </div>

      <Modal title="Edit Profile" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="mb-4">
          <label className="block mb-1">First Name</label>
          <Input name="firstName" value={tempProfileData.firstName} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Last Name</label>
          <Input name="lastName" value={tempProfileData.lastName} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone Number</label>
          <Input name="phoneNumber" value={tempProfileData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address</label>
          <Input name="address" value={tempProfileData.address} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Detailed Address</label>
          <Input name="detailedAddress" value={tempProfileData.detailedAddress} onChange={handleChange} />
        </div>
      </Modal>
    </div>
  );
}

export default Page;
