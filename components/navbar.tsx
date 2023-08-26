import React, { Fragment } from 'react'
import Link from 'next/link'
import Button from '@/components/button'

const Links = [
    {
        label: "Home",
        hash: 'home'
    },
    {
        label: "Event",
        hash: 'event'
    },
    {
        label: "About",
        hash: 'about'
    },
    {
        label: "Blog",
        hash: 'blog'
    },
    {
        label: "Pricing",
        hash: 'pricing'
    },
]


export default function Navbar() {
  return (
    <Fragment>
        <div className="bg-secondary text-white py-3">
            <section className='max-w-7xl mx-auto flex justify-between'>
                <div className='flex items-center space-x-12'>
                    <div>LOGO</div>
                    <ul className='flex space-x-12'>
                        { Links.map(( link, index ) => {
                            return (
                                <li className='hover:underline'>
                                    <Link href={link.hash}>{link.label}</Link>
                                </li>
                            )
                        } )}
                    </ul>
                </div>
                <div className='flex items-center space-x-6'>
                    <Link href={"login"}>Log in</Link>
                    <Link href={"register"} className="rounded-full border border-white px-8 py-3">Sign up</Link>
                </div>
            </section>
        </div>
    </Fragment>
  )
}
