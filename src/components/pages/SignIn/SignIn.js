import React, { useContext, useEffect, useState } from 'react';
import './SignIn.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../../../firebase.init';
import { MyContext } from '../../../App';
import { BiHide, BiShow } from 'react-icons/bi';
import Processing from '../../shared/Processing/Processing';
import Navbar from '../../shared/Navbar/Navbar';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import ConfirmModal from '../../shared/ConfirmModal/ConfirmModal';
import axios from 'axios';

const auth = getAuth(app);

const SingIn = ({ openSignInModal, setOpenSignInModal, hideCross }) => {
    const { displayUser, setDisplayUser } = useContext(MyContext);
    const [displayError, setDisplayError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [confirmModal, setConfirmModal] = useState(false);
    const [toastShow, setToastShow] = useState(false);
    const [remember, setRemember] = useState(false);

    let from = location.state?.from?.pathname || '/home';

    const handleEmailField = e => {
        setEmail(e.target.value);
    }

    const handlePasswordField = event => {
        setPassword(event.target.value);
    }

    const handleSignInForm = async (event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        if (remember) {
            const { data } = await axios.post('https://server-auto-hive.vercel.app/login', { email });
            localStorage.setItem('accessToken', data);
        }
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
            !hideCross && setOpenSignInModal(false);
            navigate(from, { replace: true });
        }
    }, [user]);

    const targetLockelement = document.querySelector('#openConfirm');
    const componentDidMount = () => {
        setConfirmModal(true);
        disableBodyScroll(targetLockelement);
    };
    const componentWillUnmount = () => {
        setConfirmModal(false);
        clearAllBodyScrollLocks();
    };

    const handleForget = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setToastShow(true);
            })
    }

    return (
        <div id='openConfirm' className={`${(hideCross === true) && 'svg-container'}`}>
            <div><Navbar hideCross={hideCross}></Navbar></div>
            <div id='login-modal' className={`${openSignInModal ? 'active' : 'hidden'} ${hideCross === true ? 'bg-transparent top-32 md:top-48' : 'bg-[#eff5ffd3] z-[1001] h-[100vh]'}`}>
                <div className='modal-container w-auto xsm:w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem]'>
                    <div className="relative bg-white rounded-lg shadow-2xl">
                        {
                            toastShow &&
                            <div id="toast-success" className="relative z-[1500] top-14 mx-auto flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow border border-lime-200" role="alert">
                                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="sr-only">Check icon</span>
                                </div>
                                <div className="ml-3 text-sm font-normal">Reset email sent, successfully.</div>
                                <button onClick={() => setToastShow(!toastShow)} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                        }
                        <button type="button" onClick={() => { setOpenSignInModal(false) }} className={hideCross ? 'hidden' : "absolute top-3 right-2.5 text-secondary bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"}>
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
                                            <input onClick={() => setRemember(!remember)} id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 focus:ring-4 focus:ring-primary" />
                                        </div>
                                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                                    </div>
                                    <Link onClick={() => componentDidMount()} className="text-sm text-secondary hover:underline">Forgot Password?</Link>
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
            {
                confirmModal && <ConfirmModal from='forgetPass' okAction={handleForget} componentWillUnmount={componentWillUnmount}></ConfirmModal>
            }
        </div>
    );
};

export default SingIn;