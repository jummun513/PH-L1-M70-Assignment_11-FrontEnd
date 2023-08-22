import React from 'react';

const Processing = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <button type="button" className="bg-white h-max w-full border-2 border-gray-200 rounded-lg text-gray-900 hover:bg-gray-200 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
                <div className="flex items-center justify-center m-[10px]">
                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-primary border-4"></div>
                    <div className="ml-2"> Processing... </div>
                </div>
            </button>
        </div>
    );
};

export default Processing;