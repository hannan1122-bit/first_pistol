import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className="text-3xl   flex text-red-700 items-center pl-4 w-screen gap-10 font-bold font-serif h-20 border-4 rounded-2xl bg-gray-200 border-red-700">
      <Image src="/pistollogo.jpg" alt="pistol logo" width={1000} height={1000} className="object-fill h-14 w-20 rounded-full"></Image>
      
      <Link className="hover:text-gray-400 pl-72" href="/" >HOME</Link>
      <Link className="hover:text-gray-400 pl-8" href="/PRODUCTS">PRODUCTS</Link>
      <Link className="hover:text-gray-400 pl-8" href="/CONTACT">CONTACT US</Link>
      {/*<Link>SERVICES</Link> */}

      
    </div>
  )
}

export default Navbar
