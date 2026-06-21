import React from 'react'
import Title from './Title'
import { assets } from '../assets/data'

const About = () => {
  return (
    <section className='max-padd-container py-16 xl:py-22 pt-36'>
      
      {/* CONTAINER */}
      <div className='flex flex-col xl:flex-row gap-14 items-center'>

        {/* INFO - LEFT SIDE */}
        <div className='flex-[5]'>
          <Title
            title1={"Your Trusted Real Estate Partner"}
            title2={"Helping You Every Step of the Way"}
            paraStyles={"hidden"}
          />

          <p className='mb-10 mt-5'>
            Find reliable car with transparent pricing, verified inspections,
            flexible pickup and delivery options, and 24/7 customer support
            for a smooth rental or buying experience.
          </p>

          <div className='grid gap-6 md:grid-cols-2'>
            <div className='p-4 rounded-xl bg-primary'>
              <h5 className='font-semibold'>Wide Vehicle Selection</h5>
              <p className='text-sm mt-2'>
                Book in seconds with instant confirmations and flexible pickup
                options, so you get on the road fast without waiting or hassles.
              </p>
            </div>

            <div className='p-4 rounded-xl bg-primaryOne'>
              <h5 className='font-semibold'>Quick Service</h5>
              <p className='text-sm mt-2'>
                Choose from economy to luxury models, regularly maintained and
                verified, giving you reliable performance and the perfect car
                for every trip.
              </p>
            </div>

            <div className='p-4 rounded-xl bg-primaryTwo'>
              <h5 className='font-semibold'>Transparent Pricing</h5>
              <p className='text-sm mt-2'>
                Upfront rates with no hidden fees, clear breakdowns for
                insurance and extras, so pricing stays predictable and easy
                to understand before booking.
              </p>
            </div>

            <div className='p-4 rounded-xl bg-primary'>
              <h5 className='font-semibold'>24/7 Support</h5>
              <p className='text-sm mt-2'>
                Around the clock customer support via chat and phone,
                resolving issues quickly and helping with changes,
                extensions, or roadside assistance anytime you need.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE - RIGHT SIDE */}
        <div className='flex-[4] flex gap-7 justify-center'>
          <div className='relative flex justify-end mb-8'>
            <img
              src={assets.about1}
              alt="About 1"
              className='rounded-2xl w-full max-w-[220px] md:max-w-[280px] object-cover'
            />
          </div>

          <div className='relative flex justify-end mt-8'>
            <img
              src={assets.about2}
              alt="About 2"
              className='rounded-2xl w-full max-w-[220px] md:max-w-[280px] object-cover'
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About