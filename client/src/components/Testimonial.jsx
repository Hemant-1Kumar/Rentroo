import React from 'react'
import {assets} from "../assets/data";
import Title from "./Title"

const Testimonial = () => {
  return (
    <section className='max-padd-container py-16 xl:py-32'>
      <Title
        title1={"What People Says"}
        title2={"Don't just take our words"}
        titleStyles={"mb-10"}
        para={"Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review."}
      />
      {/* CONTAINER */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm'>
          <div className='flexBetween'>
            <div className='flex gap-1'>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
            </div>
            <p>22 June 2026</p>
          </div>
          <p>"Great service and excellent vehicle condition. The pickup and return process was quick and easy, and the staff was very friendly. The car was clean, comfortable, and exactly as described. Highly recommended!"</p>
          <div className='flex items-center gap-2'>
            <img src={assets.user1}alt='userImg' className='h-8 w-8 rounded-full'/>
            <p className='text-gray-800 font-medium'>Vanshika Varshney</p>
          </div>       
        </div>
                <div className='bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm'>
          <div className='flexBetween'>
            <div className='flex gap-1'>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
            </div>
            <p>22 July 2026</p>
          </div>
          <p>"I had an excellent experience with this car rental service. The booking process was smooth, the vehicle was clean and well-maintained, and the staff was professional and helpful throughout. The car performed perfectly during my trip, and the pricing was fair with no hidden charges. I would highly recommend this rental service to anyone looking for a reliable and hassle-free travel experience."</p>
          <div className='flex items-center gap-2'>
            <img src={assets.user2}alt='userImg' className='h-8 w-8 rounded-full'/>
            <p className='text-gray-800 font-medium'>Hemant Kumar</p>
          </div>       
        </div>
                <div className='bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm'>
          <div className='flexBetween'>
            <div className='flex gap-1'>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
              <img src={assets.star}alt=''width={16}/>
            </div>
            <p>22 Aug 2026</p>
          </div>
          <p>"Amazing rental experience! The car was spotless, fuel-efficient, and very comfortable to drive. Customer support was responsive and helpful whenever I had questions. Everything was transparent and stress-free from booking to return. I will definitely rent from them again."</p>
          <div className='flex items-center gap-2'>
            <img src={assets.user3}alt='userImg' className='h-8 w-8 rounded-full'/>
            <p className='text-gray-800 font-medium'>Tony Stark</p>
          </div>       
        </div>
      </div> 
    </section>
  )
}

export default Testimonial
