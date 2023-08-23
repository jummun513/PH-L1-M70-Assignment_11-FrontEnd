import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import { MyContext } from '../../../App';
import SingIn from '../SignIn/SignIn';



const Blogs = () => {
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
            <div className='relative z-20 top-[40%] md:top-[40%] bg-white py-20 px-2 xsm:px-0'>
                <div className='xxl:max-w-screen-xxl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xsm:max-w-screen-xsm mx-auto'>
                    <div>
                        <h6 className='mb-10 text-3xl font-semibold'>1&#41; Differences between JavaScript and Node.js</h6>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm md:text-base text-left border border-gray-200">
                                <thead className="text-xs md:text-lg text-gray-700 uppercase bg-gray-100">
                                    <tr>
                                        <th scope="col" className="w-1/2 px-6 py-3 border-r border-r-gray-200">
                                            Java Script
                                        </th>
                                        <th scope="col" className="w-1/2 px-6 py-3">
                                            Node.js
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <td className="w-1/2 px-6 py-4 border-r border-r-gray-200">
                                            JavaScript is a just-in-time compiled programming language.
                                        </td>
                                        <td className="w-1/2 px-6 py-4">
                                            Node.js is not a programming language. It is a runtime environment for JavaScript.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="w-1/2 px-6 py-4 border-r border-r-gray-200">
                                            JavaScript was designed by Brendan Eich.
                                        </td>
                                        <td className="w-1/2 px-6 py-4">
                                            Node.js is designed by Ryan Dahl.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="w-1/2 px-6 py-4 border-r border-r-gray-200">
                                            Beginning the Node.js, JavaScript can not run outside the browser and JavaScript is used for only developing the client-side of the website.
                                        </td>
                                        <td className="w-1/2 px-6 py-4">
                                            Node.js give the scope to run JavaScript outside the browser and to develop backend-side of the website.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <h6 className='mb-10 text-3xl font-semibold'>2&#41; When should you use Node.js and when should you use MongoDB?</h6>
                        <div className="mb-3">
                            <p className='font-bold font-sans mb-1'>Node.js :</p>
                            It is used for building scalable, event-driven, and non-blocking I/O applications, such as web servers, APIs, and microservices. Node.js allows developers to use JavaScript on the server-side and provides a vast ecosystem of modules and packages that can be easily integrated into their applications.
                        </div>
                        <div className="">
                            <p className='font-bold font-sans mb-1'>MongoDB :</p>
                            MongoDB is a NoSQL document-oriented database that stores data in flexible, JSON-like documents.
                        </div>
                    </div>
                    <div className='mt-20'>
                        <h6 className='mb-10 text-3xl font-semibold'>3&#41; Differences between SQL and No-SQL database</h6>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm md:text-base text-left border border-gray-200">
                                <thead className="text-xs md:text-lg text-gray-700 uppercase bg-gray-100">
                                    <tr>
                                        <th scope="col" className="w-1/2 px-6 py-3 border-r border-r-gray-200">
                                            SQL
                                        </th>
                                        <th scope="col" className="w-1/2 px-6 py-3">
                                            No-SQL
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <td className="w-1/2 px-6 py-4 border-r border-r-gray-200">
                                            SQL refers to Structured Query Language. SQL database is the database management system which follow RDBMS &#40; Relational database management system &#41;
                                        </td>
                                        <td className="w-1/2 px-6 py-4">
                                            No-SQL database is the database management system which do not follow RDBMS.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="w-1/2 px-6 py-4 border-r border-r-gray-200">
                                            These database follow JavaScript object format to store data.
                                        </td>
                                        <td className="w-1/2 px-6 py-4">
                                            These database follow JSON &#40; JavaScript Object Notation &#41; format to store data.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="w-1/2 px-6 py-4 border-r border-r-gray-200">
                                            These databases are best suited for complex queries.
                                        </td>
                                        <td className="w-1/2 px-6 py-4">
                                            These databases are not so good for complex queries
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <h6 className='mb-10 text-3xl font-semibold'>4&#41; What is the purpose of JWT and how does it work?</h6>
                        <div className="mb-3">
                            <p className='font-bold font-sans mb-1'>JSON Web Token &#40; JWT &#41; pronounced as 'jot' : </p>
                            JWT is the token validation process by which user can login without submit email or password rather used an token which is save in user cookie or local storage at the time of first login or registration by email, password.
                        </div>
                        <div className="">
                            <p className='font-bold font-sans mb-1'>How JWT works?</p>
                            <ul className='list-disc'>
                                <li>
                                    User Login: The user provides their credentials &#40;such as a username and password&#41; to the web application or system for verification, which is transmitted to the authentication server.
                                </li>
                                <li>
                                    Token Generation: Upon successful authentication, the server generates a JSON token containing critical information about the user and the authentication session. The server sends the token to the client for verification.
                                </li>
                                <li>
                                    Token Storage: The client stores the token, usually in a cookie or purpose-marked local storage, and includes it in subsequent requests to the server.
                                </li>
                                <li>
                                    Server Response: If the JWT is valid and the user can access the requested resource.
                                </li>
                                <li>
                                    Token Expiration: When the JWT expires, the client must obtain a new JWT by logging in again.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative -top-[20%]'><Footer></Footer></div>
        </div>
    );
};

export default Blogs;