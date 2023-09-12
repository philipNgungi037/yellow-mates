import React from 'react'
import EmailForm from './EmailForm'

const LearnMore = () => {
  return (
    <div className='learn-more my-16 bg-slate-300 p-16  '>
        <div className='learn-content  text-center'>
            <h1>Ready to Learn More? Let's Get Started!</h1>
            <p>Thinking of buying or selling a property and not sure where to start? We'd
                 love to provide a free, no obligation consultation. Input your email here or 
                 call us at 111889976 Real-deal homes
            </p>
            <EmailForm/>
        </div>
        

    </div>
  )
}

export default LearnMore