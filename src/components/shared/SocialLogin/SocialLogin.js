import React, { useContext, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { app } from '../../../firebase.init';
import { MyContext } from '../../../App';
import Processing from '../Processing/Processing';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const auth = getAuth(app);

const SocialLogin = () => {
    const { setDisplayUser, setOpenSignInModal } = useContext(MyContext);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [errorElement, setErrorElement] = useState('');
    const location = useLocation();

    let from = location.state?.from?.pathname || '/home';

    useEffect(() => {
        if (user) {
            setDisplayUser(user);
            setErrorElement('');
            setOpenSignInModal(false);
            navigate(from, { replace: true });
        }
    }, [user]);

    useEffect(() => {
        if (error) {
            setErrorElement(error.message);
        }
    }, [error]);

    // The React.js warning "Cannot update a component while rendering a different component"


    return (
        <>
            {
                errorElement.includes('popup-closed-by-user') && <p className='md:text-sm text-[12px] font-semibold md:my-2 my-1 text-red-500'>Can't login! popup closed.</p>
            }
            <div className='grid justify-center md:grid-cols-3 grid-cols-1 items-center mt-5'>
                <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                    <FaFacebook className='h-5 w-5 mr-2'></FaFacebook>
                    Sign in with Facebook
                </button>
                {
                    loading ? <div className='me-2 pb-2'><Processing></Processing></div> :
                        <button onClick={() => { signInWithGoogle(); setErrorElement('') }} type="button" className="text-black bg-[#fff] hover:bg-gray-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <FcGoogle className='h-5 w-5 mr-2'></FcGoogle>
                            Sign in with Google
                        </button>
                }
                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                    </svg>
                    Sign in with Github
                </button>
            </div>
        </>
    );
};

export default SocialLogin;