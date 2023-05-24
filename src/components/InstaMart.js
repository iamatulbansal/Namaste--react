import React, { useState } from 'react';

const Profile = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <div className='border-2 border-indigo-600 m-2'>
                <div className='bg-gray-200 cursor-pointer'>Profile</div>
                {isVisible && <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, facere
                    laborum? Quas quo, aut dolor possimus veritatis harum assumenda porro
                    laudantium laborum, vero tempore rem pariatur libero reprehenderit
                    provident quaerat.{' '}
                </p>}

            </div>
        </>
    );
};
const Carrier = () => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <>
            <div className='border-2 border-indigo-600 m-2'>
                <div className='bg-gray-200 cursor-pointer'>Carrier</div>
                {isVisible && <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, facere
                    laborum? Quas quo, aut dolor possimus veritatis harum assumenda porro
                    laudantium laborum, vero tempore rem pariatur libero reprehenderit
                    provident quaerat.{' '}
                </p>}

            </div>
        </>
    );
};
const Team = () => {

    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <div className='border-2 border-indigo-600 m-2'>
                <div className='bg-gray-200 cursor-pointer'>Team</div>
                {isVisible && <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, facere
                    laborum? Quas quo, aut dolor possimus veritatis harum assumenda porro
                    laudantium laborum, vero tempore rem pariatur libero reprehenderit
                    provident quaerat.{' '}
                </p>}

            </div>
        </>
    );
};

const InstaMart = () => {
    return (
        <div className='p-2 m-2'>

            <Profile />
            <Carrier />
            <Team />
        </div>
    );
};

export default InstaMart;
