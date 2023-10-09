import React from 'react'
import EmailForm from './EmailForm'

const LearnMore = () => {
  return (
    <div className='learn-more mt-8 sm:mt-16 bg-slate-300 p-4 md:p-16  '>
        <div className='learn-content  text-center'>
            <h1>Ready to Learn More? Let's Get Started!</h1>
            <p>Thinking of buying or selling a property and not sure where to start? We'd
                 love to provide a free, no obligation consultation. Input your email here or 
                 call us at 111889976 Yellow-mates.
            </p>
            <EmailForm/>
        </div>
        

    </div>
  )
}

export default LearnMore