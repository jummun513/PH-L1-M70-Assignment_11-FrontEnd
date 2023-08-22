import React, { useContext, useEffect, useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { app } from '../../../firebase.init';
import { MyContext } from '../../../App';
import { BiHide, BiShow } from 'react-icons/bi';
import Processing from '../../shared/Processing/Processing';

const auth = getAuth(app);

const SingIn = ({ openModal, setOpenModal, hideCross }) => {
    const { displayUser, setDisplayUser } = useContext(MyContext);
    const [displayError, setDisplayError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailField = e => {
        setEmail(e.target.value);
    }

    const handlePasswordField = event => {
        setPassword(event.target.value);
    }

    const handleSignInForm = event => {
        signInWithEmailAndPassword(email, password);
        event.preventDefault();
    }

    useEffect(() => {
        if (error) {
            setDisplayError(error.message);
        }
    }, [error]);

    useEffect(() => {
        if (user) {
            setDisplayError('');
            setDisplayUser(user);
            !hideCross && setOpenModal(false);
            navigate('/home');
        }
    }, [user]);

    return (
        <div id='login-modal' className={openModal ? 'active' : 'hidden'}>
            <div className='modal-container w-auto xsm:w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem]'>
                <div className="relative bg-white rounded-lg shadow-2xl">
                    <button type="button" onClick={() => { setOpenModal(false) }} className={hideCross ? 'hidden' : "absolute top-3 right-2.5 text-secondary bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900">Sign in to our platform</h3>
                        <form className="space-y-6" onSubmit={handleSignInForm}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input onBlur={handleEmailField} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-2 focus:ring-primary block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div className='relative'>
                                {
                                    (password !== '') && (showPassword ? <BiShow onClick={() => { setShowPassword(!showPassword) }} className='cursor-pointer absolute top-[50%] right-[2%] text-primary h-6 w-6'></BiShow> : <BiHide onClick={() => { setShowPassword(!showPassword) }} className='cursor-pointer absolute top-[50%] right-[2%] text-primary h-6 w-6'></BiHide>)
                                }
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                                <input type={showPassword ? 'text' : 'password'} onKeyUp={handlePasswordField} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-2 focus:ring-primary block w-full p-2.5" required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 focus:ring-4 focus:ring-primary" />
                                    </div>
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                                </div>
                                <a href="/" className="text-sm text-secondary hover:underline">Forgot Password?</a>
                            </div>
                            {
                                (displayError.includes('wrong-password') && <p className='md:text-sm text-[12px] font-semibold md:my-2 my-1 text-red-500'>Your password is wrong!</p>) ||
                                (displayError.includes('too-many-requests') && <p className='md:text-sm text-[12px] font-semibold md:my-2 my-1 text-red-500'>Too many requests! Try later.</p>) ||
                                (displayError.includes('user-not-found') && <p className='md:text-sm text-[12px] font-semibold md:my-2 my-1 text-red-500'>This email is not registered!</p>)
                            }
                            {
                                loading ? <Processing></Processing> :
                                    <button type="submit" className="w-full text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-semibold rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                            }
                            <div className="text-sm font-medium text-gray-500">
                                Not registered? <Link to='/register' className="text-secondary hover:underline">Create account</Link>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;