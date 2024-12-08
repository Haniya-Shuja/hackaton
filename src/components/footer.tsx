import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='w-[1270px] h-[440px] flex justify-evenly pt-[10%] bg-white'>
        <div>
        <h2 className='h-[24px] w-[118px] text-[24px] mb-4 font-inter font-bold text-[#000000] 3%'>Funiro</h2>
        <br/>
        {/* <h2 className='w-[101px] h-[28px] font-poppins mb-3 font-[500] text-[20px] text-[#FAFAFA]'>Subscribe</h2> */}
        <p className='font-poppins text-[16px] font-normal mb-3 w-[206px] text-[#000000]  h-[24px]'>400 University drive suits 200 carol Gables</p>
        {/* <button className='flex text-[#FAFAFA] w-[217px] gap-[10px] pl-[16px] pt-[12px] pb-[12px] border-[1.5px] rounded-[4px] h-[48px]'><input type="email" placeholder='Enter your email' className='w-[150px] bg-[#000000] text-[#FAFAFA]'/><LuSendHorizontal className='w-[20px] h-[18px] mt-1 text-[#FAFAFA]'/></button> */}
        <br/>
        <p className='font-poppins text-[16px] font-normal mb-3 w-[206px] text-[#000000] h-[24px]'>FL 33134 USA</p>
        <br/>
        <br/>
        <br/>
        <p>2023 Funiro.All right reserved</p>
        </div>
        <div>
            <h2 className='w-[81px] h-[28px] mb-4 font-poppins text-[20px] font-bold text-[#000000]'>Link</h2>
            <p className='w-[175px] h-[48px] font-poppins mb-3 text-[16px] font-bold text-[#000000]'>Home</p>
            <p className='w-[175px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>About</p>
            <p className='w-[175px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>Shop</p>
            <p className='w-[175px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>Contact</p>
        </div>
        <div>
        <h2 className='w-[90px] h-[28px] mb-4 font-poppins text-[15px] font-bold text-[#000000]'>Help</h2>
        <p className='w-[94px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>Payment Option</p>
        
        <p className='w-[35px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'>Privacy Policies</p>
       
        
        </div>
        <div>
        <h2 className='w-[110px] h-[28px] mb-4 font-poppins text-[20px] font-bold text-[#000000]'>News Letter</h2>
        <p className='w-[109px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'><a>Enter your e-mail address</a></p>
        <p className='w-[105px] h-[48px] font-poppins text-[16px] font-bold text-[#000000]'><a>Subscribe</a></p>

        </div>
        
        </div>
  )
}
export default Footer
        
        {/* <h2 className='w-[148px] h-[28px] mb-4 font-poppins text-[20px] font-[500] text-[#FAFAFA]'>Download App</h2>
        <p className='w-[194px] opacity-[70%] h-[48px] font-poppins text-[12px] font-normal text-[#FAFAFA]'>Save $3 with App New User Only</p> */}
        {/* <div className='flex gap-3'>
        <Image src="/images/Qr.png" alt="Qr code" width={100} height={100} className='w-[80px] h-[80px]'/>
        <div>
        <Image src="/images/goo.png" alt="Qr code" width={100} height={100} className='w-[108px] h-[38px] mt-1 rounded-[4px]'/>
        <Image src="/images/app.png" alt="Qr code" width={100} height={100} className='w-[108px] h-[38px] mt-1 rounded-[4px]'/>  
        </div>
        </div> */}
        {/* <div className='flex gap-[24px] w-[168px] h-[24px] text-[#FAFAFA] mt
        -3'>
        <FiFacebook className='w-[24px] h-[24px]' />
        <CiTwitter  className='w-[24px] h-[24px]'/>
        <FaInstagram className='w-[24px] h-[24px]' />
        <FiLinkedin  className='w-[24px] h-[24px]'/>
        </div>
        </div> */}
    {/* </div>
  )
}

export default Footer */}