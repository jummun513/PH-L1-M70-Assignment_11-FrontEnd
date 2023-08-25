import React from 'react';

const ErrorModal = ({ componentWillUnmount, from, okAction }) => {
    return (
        <div className="relative z-[100]">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex flex-col items-center">
                                <div className="mx-auto flex h-12 w-12 lg:w-20 lg:h-20 flex-shrink-0 items-center justify-center rounded-full bg-red-50 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg className='h-10 w-10 md:h-14 md:w-14' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor"> <path d="M11.99 22C6.46846 21.9945 1.99632 17.5149 2 11.9933C2.00368 6.47179 6.48179 1.99816 12.0033 2C17.5249 2.00184 22 6.47845 22 12C21.9967 17.5254 17.5154 22.0022 11.99 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.6845 16.444 4.10977 12.0425 4.08599C7.64111 4.06245 4.04732 7.59876 4 12V12.172ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#ff0000" id="mainIconPathAttribute" strokeWidth="0" stroke="#ff0000"></path> </svg>
                                </div>
                                <h3 className="md:my-5 lg:my-8 my-3 md:text-base lg:text-xl text-sm font-semibold leading-6 text-gray-900" id="modal-title">Sorry, Failed!</h3>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 flex justify-center sm:px-6">
                            {
                                ((from === 'addItem') && <button onClick={() => componentWillUnmount()} type="button" className="inline-flex w-full justify-center rounded-md bg-primary hover:bg-secondary px-3 py-2 lg:px-10 lg:py-3 text-sm lg:text-base font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Ok</button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;