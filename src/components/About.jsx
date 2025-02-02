import React from 'react'
import aboutImg from '../assets/hero-img2.png'
import member from '../assets/member.png'
import hands from '../assets/hands.png'
import event from '../assets/event.png'
import payment from '../assets/payment.png'

const About = () => {
    return (
        <>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
                    <div>
                        <img src={aboutImg} alt="aboutImg" />
                    </div>
                    <div className='md:w-3/5'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/6'>The unseen of spending three years at Pixelgrade</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </p>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* company status */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row  justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local<br /><span className='text-brandPrimary'>business reinvent itself</span> </h2>
                        <p>
                            We reached here with our hard work and dedication
                        </p>
                    </div>
                    {/* ststs */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={member} alt="member" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,345</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={hands} alt="member" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,345</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={event} alt="member" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,345</h4>
                                    <p>Event Booking</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={payment} alt="member" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,345</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About