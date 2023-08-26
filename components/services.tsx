import React, { Fragment } from 'react'
import Card from "@/components/card"
import { HiOutlineChartBarSquare } from "react-icons/hi2"
import { GoGift } from "react-icons/go"
import { RxCube } from "react-icons/rx"

export default function Services() {
  return (
    <Fragment>
        <section className="max-w-7xl mx-auto mt-28">
           <div className="space-y-5">
                <h2 className='text-center text-5xl font-bold'>Our Dedication To Excepional Service</h2>
                <h3 className='text-center text-xl opacity-50'>Our Unwavering Commitment To Exceptionnal Services.</h3>
           </div>
        </section>
        <section className='max-w-7xl mx-auto grid grid-cols-3 gap-6 my-16'>
            <Card className='bg-yellow-100 pt-16 pb-12 px-8 rounded-xl'>
                <div className="space-y-6">
                    <div className="h-16 w-16 flex justify-center items-center rounded-full bg-gray-50">
                        <HiOutlineChartBarSquare className="text-2xl" />         
                    </div>
                    <h3 className="text-3xl font-semibold">Finding Joy <br /> and Fulfillment</h3>
                    <h4 className="text-lg opacity-50">
                        Embarking on the Transformative Journey of Happiness: Unveling the path to Sustainable Joy, Limitless Personal Grouwth, and Complete Fulfillment
                    </h4>
                </div>
            </Card>
            <Card className='bg-red-100 pt-16 pb-12 px-8 rounded-xl'>
                <div className="space-y-6">
                    <div className="h-16 w-16 flex justify-center items-center rounded-full bg-gray-50 text-red-500">
                        <RxCube className="text-2xl" />         
                    </div>
                    <h3 className="text-3xl font-semibold">Providing <br /> Nursing Care</h3>
                    <h4 className="text-lg opacity-50">
                        Elevating the standards of healthcare, our dedicated team is commited to providing personalized nursing care that prioritizes you unique needs.
                    </h4>
                </div>
            </Card>
            <Card className='bg-gray-100 pt-16 pb-12 px-8 rounded-xl'>
                <div className="space-y-6">
                    <div className="h-16 w-16 flex justify-center items-center rounded-full bg-gray-50 text-gray-500">
                        <GoGift className="text-2xl" />         
                    </div>
                    <h3 className="text-3xl font-semibold">Companionship <br /> Enriching Lives</h3>
                    <h4 className="text-lg opacity-50">
                        At our core, we believe in the power of companionship to enrich lives and promote well-being. We understand that huma, connection plays a vital role in fostering
                    </h4>
                </div>
            </Card>
        </section>
    </Fragment>
  )
}
