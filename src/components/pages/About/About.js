import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import { MyContext } from '../../../App';
import SingIn from '../SignIn/SignIn';
import './About.css';

const About = () => {
    const { openSignInModal, setOpenSignInModal } = useContext(MyContext);

    return (
        <div className={openSignInModal ? 'modal-parent-height svg-container' : 'svg-container'}>
            <div className='absolute w-full z-50'>
                {
                    openSignInModal
                    &&
                    <SingIn setOpenSignInModal={setOpenSignInModal} openSignInModal={openSignInModal}></SingIn>
                }
            </div>
            <div><Navbar></Navbar></div>
            <div className='relative z-20 top-[40%] md:top-[40%]'>
                <section class="bg-white pt-8 md:pt-32 pb-5 sm:pb-14 mb-32 lg:mb-60">
                    <div class="xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen--lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm px-2 xsm:px-0 py-12 mx-auto">
                        <div>
                            <p class="font-medium text-secondary">Contact us</p>

                            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">We’d love to hear from you</h1>

                            <p class="mt-3 text-gray-500">Our friendly team is always here to chat.</p>
                        </div>

                        <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div class="p-4 rounded-lg bg-[#87c12330] md:p-6">
                                <span class="inline-block p-3 text-primary rounded-lg bg-lime-100/90">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>

                                <h2 class="mt-4 text-base font-medium text-gray-800">Chat to sales</h2>
                                <p class="mt-2 text-sm text-gray-500">Speak to our friendly team.</p>
                                <p class="mt-2 text-sm text-secondary">hello@merakiui.com</p>
                            </div>

                            <div class="p-4 rounded-lg bg-[#87c12330] md:p-6">
                                <span class="inline-block p-3 text-primary rounded-lg bg-lime-100/90">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>

                                <h2 class="mt-4 text-base font-medium text-gray-800">Chat to support</h2>
                                <p class="mt-2 text-sm text-gray-500">We’re here to help.</p>
                                <p class="mt-2 text-sm text-secondary">Start new chat</p>
                            </div>

                            <div class="p-4 rounded-lg bg-[#87c12330] md:p-6">
                                <span class="inline-block p-3 text-primary rounded-lg bg-lime-100/90">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>

                                <h2 class="mt-4 text-base font-medium text-gray-800">Visit us</h2>
                                <p class="mt-2 text-sm text-gray-500">Visit our office HQ..</p>
                                <p class="mt-2 text-sm text-secondary">100 Smith Street Collingwood VIC 3066 AU</p>
                            </div>

                            <div class="p-4 rounded-lg bg-[#87c12330] md:p-6">
                                <span class="inline-block p-3 text-primary rounded-lg bg-lime-100/90">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>

                                <h2 class="mt-4 text-base font-medium text-gray-800">Call us</h2>
                                <p class="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
                                <p class="mt-2 text-sm text-secondary">+1 (555) 000-0000</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='store-location' class="grid justify-around items-center">
                    <div id='overlay'></div>
                    <div class="z-30 xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen--lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm px-2 xsm:px-0 mx-auto">
                        <div className='grid grid-cols-1 gap-10 py-12 justify-center items-center lg:grid-cols-3'>
                            <div>
                                <p class="font-medium text-blue-500 md:text-3xl">Our locations</p>

                                <h1 class="mt-2 text-2xl font-semibold text-gray-50 md:text-3xl">Visit our stores</h1>

                                <p class="mt-3 text-gray-100">Find us at these locations.</p>
                            </div>
                            <div class="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2">
                                <div>
                                    <h2 class="font-medium text-gray-50">Melbourne</h2>
                                    <p class="mt-2 text-gray-400">100 Flinders Street <br /> Melbourne VIC 3000 AU</p>
                                </div>

                                <div>
                                    <h2 class="font-medium text-gray-50">London</h2>
                                    <p class="mt-2 text-gray-400">100 Oxford Street <br /> London W1D 1LL UK</p>
                                </div>

                                <div>
                                    <h2 class="font-medium text-gray-50">Sydney</h2>
                                    <p class="mt-2 text-gray-400">100 Flinders Street <br /> Melbourne VIC 3000 AU</p>
                                </div>

                                <div>
                                    <h2 class="font-medium text-gray-50">San Francisco</h2>
                                    <p class="mt-2 text-gray-400">100 Flinders Street <br /> Melbourne VIC 3000 AU</p>
                                </div>

                                <div>
                                    <h2 class="font-medium text-gray-50">Byron Bay</h2>
                                    <p class="mt-2 text-gray-400">100 Flinders Street <br /> Melbourne VIC 3000 AU</p>
                                </div>

                                <div>
                                    <h2 class="font-medium text-gray-50">Sweden</h2>
                                    <p class="mt-2 text-gray-400">100 Flinders Street <br /> Melbourne VIC 3000 AU</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-white relative md:py-14 mt-[20%]">
                    <div class="xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen--lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm px-2 xsm:px-0 mx-auto py-12">
                        <div>
                            <h1 class="mt-2 text-xl font-semibold text-gray-800 md:text-5xl">Get in touch</h1>
                        </div>

                        <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2">
                            <div className='bg-white px-2 sm:px-5 rounded-lg'>
                                <div className='mt-8 md:mt-14'>
                                    <span class="uppercase text-sm text-gray-600 font-semibold md:font-bold">Full Name</span>
                                    <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="" />
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <span class="uppercase text-sm text-gray-600 font-semibold md:font-bold">Email</span>
                                    <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" />
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <span class="uppercase text-sm text-gray-600 font-semibold md:font-bold">Message</span>
                                    <textarea style={{ resize: 'none' }}
                                        class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <button
                                        class="uppercase text-sm font-semibold md:font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full hover:bg-secondary focus:outline-none focus:shadow-outline">
                                        Send Message
                                    </button>
                                </div>
                            </div>

                            <div class="overflow-hidden rounded-lg h-96 lg:h-auto">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.75658880244!2d91.65422540320962!3d22.35731206162862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1692774728683!5m2!1sen!2sbd" width="100%" height="100%" frameborder="0" title="map" allowfullscreen loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='relative -top-[20%]'><Footer></Footer></div>
        </div>
    );
};

export default About;