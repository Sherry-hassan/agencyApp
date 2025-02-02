import React from 'react'
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from '../assets/logo.png'
import social1 from '../assets/social1.png'
import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import social4 from '../assets/social4.png'

const MyFooter = () => {
    return (
        <>
            <Footer container className='bg-[#263238]'>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div className='space-y-4 mb-8'>
                            <a
                                href=""
                                className="text-2xl font-semibold flex items-center space-x-3"
                            >
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="w-10 inline-block items-center"
                                />
                                <span className="text-white ">NEXCENT</span>
                            </a>
                            <div>
                                <p className='mb-1 text-white'>Copyright © 2020 Nexcent ltd.</p>
                                <p className='text-white'>All rights reserved</p>
                                <div className='flex items-center mt-3 gap-6'>
                                    <img src={social1} alt="" />
                                    <img src={social2} alt="" />
                                    <img src={social3} alt="" />
                                    <img src={social4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="company" className='text-white' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#" className='text-white'>About</Footer.Link>
                                    <Footer.Link href="#" className='text-white'>Blog </Footer.Link>
                                    <Footer.Link href="#" className='text-white'>Contact</Footer.Link>
                                    <Footer.Link href="#" className='text-white'>Pricing</Footer.Link>
                                    <Footer.Link href="#" className='text-white'>Testimonial</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Support" className='text-white' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#" className='text-white'>Help Center</Footer.Link>
                                    <Footer.Link href="#" className='text-white'>Term of Services</Footer.Link>
                                    <Footer.Link href="#" className='text-white'>Legal</Footer.Link>
                                    <Footer.Link href="#" className='text-white'>Privacy Policy</Footer.Link>
                                    <Footer.Link href="#" className='text-white'>Status</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Stay up to date" className='text-white' />
                                <Footer.LinkGroup col className='bg-neutral-500 rounded-md p-2 sm:w-full'>
                                    <input type="email" placeholder='Your email address' className='peer bg-transparent placeholder-white text-white outline-none border-0 ' />
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>

                </div>
            </Footer>
        </>
    )
}

export default MyFooter