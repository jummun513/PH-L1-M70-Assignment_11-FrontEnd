import React from 'react';

const SuccessModal = ({ componentWillUnmount, from, okAction }) => {
    return (
        <div className="relative z-[100]">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex flex-col items-center">
                                <div className="mx-auto flex h-12 w-12 lg:w-20 lg:h-20 flex-shrink-0 items-center justify-center rounded-full bg-lime-50 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg fill='#88c123' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
                                </div>
                                <h3 className="md:my-5 lg:my-8 my-3 md:text-base lg:text-xl text-sm font-semibold leading-6 text-gray-900" id="modal-title">Successfully, Added.</h3>
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

export default SuccessModal;