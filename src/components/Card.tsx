import React from 'react'
import Image from 'next/image';

interface propstype{
    img:string;
    title:string;
    price:string;
    rate:string
}
const Card:React.FC<propstype>= ({img,title,price,rate}) => {
  return (
    
    <div>

        <div >
       
            <div className='w-100'><Image src={img} alt="card" width={800} height={800} className='w-[300px] h-[400px] bg-[#F5F5F5] P-4' /></div>
            <h2 className='font-bold text-xl'>{title}</h2>
            <p>{rate}</p>
            <p className='text-xl font-bold'>{price}</p>
           
        </div>
      
    </div>
  )
}

export default Card