import React, { Fragment } from 'react'
import Badge from '@/components/badge'
import Button from '@/components/button'
import  { BsPlayCircle } from "react-icons/bs"

const Companies  = [
    {
        name: "Forbes",
        logo: "forbes logo"
    },
    {
        name: "BCA",
        logo: "BCA logo"
    },
    {
        name: "Gopay",
        logo: "Visa logo"
    },
    {
        name: "Paypal",
        logo: "Paypal logo"
    },
    {
        name: "Youtube",
        logo: "Youtube logo"
    },
]

export default function Hero() {
  return (
    <Fragment>
         <div className="bg-secondary text-white py-3 pt-32 pb-28">
            <section className='max-w-7xl mx-auto flex'>
                <div className='w-7/12 space-y-12'>
                    <Badge className='rounded-full border border-white px-8 py-3'>Happy senior</Badge>
                    <h1 className='text-7xl font-bold'>Finding happiness <br /> in Embracing <br /> Senior Care</h1>
                    <h2 className='text-xl opacity-50'>Transforming Lives with Joy and Fulfillment: <br /> The remarkable Journey of Embracing <br /> Senior Care</h2>
                    <div className="flex space-x-6">
                        <Button className='text-black bg-yellow-200'>Get Started</Button>
                        <Button className='space-x-2 flex items-center'>
                            <BsPlayCircle className="text-2xl" />
                            <span>Watch Demo</span>
                        </Button>
                    </div>
                </div>
                <div className='w-5/12'>

                </div>
            </section>
            <section className="max-w-7xl mx-auto flex mt-24">
              <ul className='flex justify-between w-full'>
                    { Companies.map((company, index) => {
                        return <li>{company.name}</li>
                    })}
              </ul>
            </section>
        </div>
    </Fragment>
  )
}
