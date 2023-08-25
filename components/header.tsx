import React, { Fragment } from 'react'
import Image from 'next/image'
import { HiOutlineMail } from "react-icons/hi"
import { BsTelephone, BsTwitter, BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs"

export default function Header() {
  return (
    <Fragment>
        <section className="flex justify-between py-4 max-w-7xl mx-auto">
           <div className='space-x-6 flex'>
                <div className='flex space-x-1 items-center'>
                    <HiOutlineMail className="text-2xl" />
                    <a href="mailto:hello.sans@gmail.com">hello.sans@gmail.com</a>
                </div>
                <div className='flex space-x-1 items-center'>
                    <BsTelephone className="text-lg"/>
                    <a href="tel:+65111888888">+65 11.188.8888</a>
                </div>
           </div>
           <div className='flex space-x-6 items-center'>
                <div className='flex space-x-4'>
                    <a className='text-xl' target='_blank' href="https://twitter.com">
                        <BsTwitter />
                    </a>
                    <a className='text-xl' target='_blank' href="https://linkedin.com">
                        <BsLinkedin />
                    </a>
                    <a className='text-xl' target='_blank' href="https://facebook.com">
                        <BsFacebook />
                    </a>
                    <a className='text-xl' target='_blank' href="https://github.com">
                        <BsGithub />
                    </a>
                </div>
                <div className="h-5 w-0.5 bg-black"></div>
                <div className='flex space-x-3 items-center'>
                    <div className="p-2 rounded-full bg-gray-200">
                        <Image 
                         className=''
                         src="/usa-flag.png"
                         alt="usa flag icon"
                         priority={true}
                         width={"16"}
                         height={"16"}
                        />
                    </div>
                    <span>English(US)</span>
                </div>
           </div>
        </section>
    </Fragment>
  )
}
