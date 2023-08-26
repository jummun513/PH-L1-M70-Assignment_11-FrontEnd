import React, { useState } from 'react';

const ConfirmModal = ({ componentWillUnmount, from, okAction, targetTitleFromDelete }) => {
    const [check, setCheck] = useState(false);
    const [email, setEmail] = useState('');
    const handleInput = event => {
        (event.target.value === targetTitleFromDelete) && setCheck(true);
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                {
                                    ((from === 'update') &&
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-lime-50 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                            </svg>
                                        </div>
                                    )
                                    ||
                                    ((from === 'delete') &&
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-50 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                            </svg>
                                        </div>
                                    )
                                }
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">{((from === 'delete') && 'Permanently delete?') || ((from === 'update') && 'Are You Sure') || ((from === 'forgetPass') && 'Email')}</h3>
                                    <div className="mt-2">
                                        {
                                            ((from === 'update') && <p className="text-xs md:text-sm text-gray-500">This will change in our storage database. Previous data will merge and can not get recover.</p>)
                                            ||
                                            ((from === 'delete') && <div>
                                                <p className="text-xs md:text-sm text-gray-500">This will change in our storage database. And you will lose your data. For confirm rewrite the sentence <span className='text-red-600 sm:text-sm md:text-base font-semibold'>'{targetTitleFromDelete}'</span> again.</p>
                                                <input onChange={handleInput} type="text" className='bg-slate-50 px-3 py-2 text-sm w-full border-2 border-red-200 mt-2 rounded focus:outline-red-600' placeholder={targetTitleFromDelete} />
                                            </div>)
                                            ||
                                            ((from === 'forgetPass') &&
                                                <input onBlur={(e) => setEmail(e.target.value)} type="text" className='bg-slate-50 px-3 py-2 text-sm w-full sm:w-96 border-2 border-lime-200 outline-none mt-2 rounded focus:outline-primary focus:border-none' placeholder={targetTitleFromDelete} />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            {
                                ((from === 'update') &&
                                    <button onClick={() => { okAction(); componentWillUnmount(); }} type="button" className="inline-flex w-full justify-center rounded-md bg-primary hover:bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Confirm</button>
                                )
                                ||
                                ((from === 'delete') &&
                                    <button disabled={!check} onClick={() => { okAction(); componentWillUnmount(); }} type="button" className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${check ? 'bg-red-600 hover:bg-red-700' : 'bg-red-400'}`}>{check ? 'Confirm' : 'Disabled'}</button>
                                )
                                ||
                                ((from === 'forgetPass') &&
                                    <button onClick={() => { okAction(email); componentWillUnmount(); }} type="button" className='inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto bg-primary hover:bg-secondary'>Send</button>
                                )

                            }
                            <button onClick={componentWillUnmount} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;