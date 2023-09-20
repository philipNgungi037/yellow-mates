import React from 'react'

const Message = () => {
  return (
    <div className='message-outer-container w-full absolute top-4  p-4 md:px-24'>
        <div className='message-card w-full  p-2 sm:p-16 '>
            <h1>Our Commitment To You</h1>
            <p>
                Because we work by referral, we don't need to spend valuable time prospecting for new business, and we don't believe 
                in pressuring people to buy what they don't need.
                We're 100% committed to recognizing your priorities and guiding you through each stage of the process — and beyond.
            </p>
            <a href='learn'>
                <div className='learn bg-white text-center p-4'>
                    Learn More
                </div>
            </a>
            
        </div> 

    </div>
  )
}

export default Message