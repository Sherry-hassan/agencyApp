import React from 'react'
import Right from '../assets/Right.png'

const Newsletter = () => {
    return (
        <>
            <div className='px-4 lg:px-14 bg-neutralSilver max-w-screen-2xl mx-auto py-16' id='testimonial'>
                <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                    <div className='text-center'>
                        <h2 className="lg:text-5xl text-3xl text-neutral-800  font-semibold mb-6 lg:leading-snug">
                            Pellentesque suscipit fringilla libero eu.
                        </h2>
                        <div className='flex items-center justify-center gap-8'>
                            <button className='bg-brandPrimary text-white px-5 py-2 rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4'>Get A Demo <img src={Right} alt="" className="inline-block ml-2 bg-white" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter