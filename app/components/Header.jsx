import Image from 'next/image'; 
import { assets } from '@/assets/assets'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Image src={assets.profile_img}/>
    </div>
  )
}

export default Header
