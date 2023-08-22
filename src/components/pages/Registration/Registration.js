import React, { useContext, useEffect, useState } from 'react';
import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { app } from '../../../firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { BiShow, BiHide } from 'react-icons/bi'
import { MyContext } from '../../../App';
import Processing from '../../shared/Processing/Processing';

const auth = getAuth(app);

const Registration = () => {
    const [checked, setChecked] = useState(false);
    const { displayUser, setDisplayUser } = useContext(MyContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [testValidity, setTestValidity] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const [process, setProcess] = useState(false);
    const navigate = useNavigate();


    const handleEmailField = event => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
            setEmail(event.target.value);
            setError('');
        }
        else {
            setError('invalid-email');
            return;
        }
    }
    useEffect(() => { }, [email]);


    const checkPasswordValidation = event => {
        let pass = event.target.value;
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");
        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{1,})");
        if (strongRegex.test(pass)) {
            setTestValidity('strong-password');
        }
        else if (mediumRegex.test(pass)) {
            setTestValidity('medium-password');
        }
        else {
            setTestValidity('weak-password');
        }
        setPassword(pass);
    }
    const handlePasswordField = () => {
        (testValidity.includes('strong-password')) ? setError('') : setError('invalid-password');
    }


    const handleConfirmPasswordField = event => {
        let conPass = event.target.value;
        setConfirmPassword(conPass);
    }

    useEffect(() => { (confirmPassword !== password) ? setError('invalid-confirm-password') : setError(''); }, [password, confirmPassword])


    const handleFirstNameField = event => {
    }

    const handleLastNameField = event => {
    }

    const formSubmit = (event) => {
        setProcess(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setDisplayUser(user);
                setError('');
                setProcess(false);
                navigate('/home');
            })
            .catch((error) => {
                setError(error.message);
                setProcess(false);
            });

        event.preventDefault();
    }


    return (
        <div id='register' className='xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm xsm:max-w-screen-sm px-2 md:px-0 mx-auto'>
            <div className='bg-[#87c123dc] px-5 py-10 rounded-lg shadow-2xl'>
                <h3 className='text-white text-3xl'>Register With Email</h3>
                <form className='pt-5 md:pt-7' onSubmit={formSubmit}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onKeyUp={handleEmailField} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-semibold absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-semibold">
                            Email address
                        </span></label>
                        {
                            ((error.includes('invalid-email')) && <p className='text-sm mt-3 text-red-600'>Your email is invalid!</p>) ||
                            ((error.includes('email-already-in-use')) && <p className='text-sm mt-3 text-red-600'>This email is already register!</p>)
                        }
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        {
                            (password !== '') && (showPassword ? <BiShow onClick={() => { setShowPassword(!showPassword) }} className='cursor-pointer absolute top-[15%] right-[2%] text-gray-50 h-6 w-6'></BiShow> : <BiHide onClick={() => { setShowPassword(!showPassword) }} className='cursor-pointer absolute top-[15%] right-[2%] text-gray-50 h-6 w-6'></BiHide>)
                        }
                        <input onKeyUp={checkPasswordValidation} onBlur={handlePasswordField} title='Password must have contain one lowercase(a-z), one uppercase(A-Z), one number(0-9), one special character (!,@,#,$,%,^,&,*) and length must be 8 to 16' placeholder="" type={showPassword ? 'text' : 'password'} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" required />
                        <label htmlFor="floating_password" className="peer-focus:font-semibold absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-semibold">
                            Password
                        </span></label>
                        <div className='absolute top-1 right-14'>
                            {
                                ((testValidity.includes('strong-password')) && <p className='md:text-sm text-[12px] font-semibold mt-0 text-green-600 px-3 py-1 bg-white'>Strong</p>) ||
                                ((testValidity.includes('medium-password')) && <p className='md:text-sm text-[12px] font-semibold mt-0 text-yellow-400 px-3 py-1 bg-white'>Medium</p>) ||
                                ((testValidity.includes('weak-password')) && <p className='md:text-sm text-[12px] font-semibold mt-0 text-red-600 px-3 py-1 bg-white'>Weak</p>)
                            }
                        </div>
                        {
                            error.includes('invalid-password') && <p className='md:text-sm text-[10px] mt-2 text-red-600'>Password must have contain one lowercase&#40;a-z&#41;, one uppercase&#40;A-Z&#41;, one number&#40;0-9&#41;, one special character &#40;!,@,#,$,%,^,&,*&#41; and length must be 8 to 16</p>
                        }
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        {
                            (confirmPassword !== '') && (showConfirmPassword ? <BiShow onClick={() => { setShowConfirmPassword(!showConfirmPassword) }} className='cursor-pointer absolute top-[15%] right-[2%] text-gray-50 h-6 w-6'></BiShow> : <BiHide onClick={() => { setShowConfirmPassword(!showConfirmPassword) }} className='cursor-pointer absolute top-[15%] right-[2%] text-gray-50 h-6 w-6'></BiHide>)
                        }
                        <input onKeyUp={handleConfirmPasswordField} type={showConfirmPassword ? 'text' : 'password'} name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-semibold absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-semibold">
                            Confirm Password
                        </span></label>
                        {
                            error.includes('invalid-confirm-password') && <p className='text-sm mt-2 text-red-600'>Doesn't match the password!</p>
                        }
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input onBlur={handleFirstNameField} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div onBlur={handleLastNameField} className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input onClick={() => { setChecked(!checked) }} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Do you Agree with our terms & condition?</label>
                    </div>
                    {
                        process ? <Processing></Processing> :
                            <button disabled={(!checked || (error !== ''))} type="submit" className={(!checked || (error !== '')) ? "text-gray-500 bg-gray-200 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 md:px-8 py-2.5 text-center" : "text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg text-sm w-full sm:w-auto md:px-8 px-5 py-2.5 text-center"}>{(checked && (error === '')) ? 'Register' : 'Disabled'}</button>
                    }
                    <div className="text-sm font-medium text-gray-900 mt-3">
                        Already have an account? <Link to='/login' className="text-gray-50 hover:underline ms-2">Login Here.</Link>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Registration;