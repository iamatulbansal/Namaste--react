import React, { useState } from 'react';

const Profile = ({ isVisible,setIsVisible }) => {
    return (
        <>
            <div className="border-2 border-indigo-600 m-2">
                <div className="bg-gray-200 cursor-pointer">Profile</div>
                {!isVisible && (
                  <>  <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
                        facere laborum? Quas quo, aut dolor possimus veritatis harum
                        assumenda porro laudantium laborum, vero tempore rem pariatur libero
                        reprehenderit provident quaerat.
                    </p>     {isVisible ? <button className='bg-gray-300 px-2 m-2 rounded-lg' onClick={() => setIsVisible(null)}>Hide</button> : <button className='bg-green-300 px-2 m-2 rounded-lg' onClick={() => setIsVisible("team")}>Show</button>}
                    </>
                )}
            </div>
        </>
    );
};
const Carrier = ({ isVisible,setIsVisible }) => {
    return (
        <>
            <div className="border-2 border-indigo-600 m-2">
                <div className="bg-gray-200 cursor-pointer">Carrier</div>
                {!isVisible && (
                    <> <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
                        facere laborum? Quas quo, aut dolor possimus veritatis harum
                        assumenda porro laudantium laborum, vero tempore rem pariatur libero
                        reprehenderit provident quaerat.
                    </p>
                        {isVisible ? <button className='bg-gray-300 px-2 m-2 rounded-lg' onClick={() => setIsVisible(null)}>Hide</button> : <button className='bg-green-300 px-2 m-2 rounded-lg' onClick={() => setIsVisible("team")}>Show</button>}</>
                )}
            </div>
        </>
    );
};
const Team = ({ isVisible, setIsVisible }) => {
    return (
        <>
            <div className="border-2 border-indigo-600 m-2">
                <div className="bg-gray-200 cursor-pointer" >Team</div>
                {!isVisible && (
                    <>  <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
                        facere laborum? Quas quo, aut dolor possimus veritatis harum
                        assumenda porro laudantium laborum, vero tempore rem pariatur libero
                        reprehenderit provident quaerat.{' '}
                    </p>
                        {isVisible ? <button className='bg-gray-300 px-2 m-2 rounded-lg' onClick={() => setIsVisible(null)}>Hide</button> : <button className='bg-green-300 px-2 m-2 rounded-lg' onClick={() => setIsVisible("team")}>Show</button>}

                    </>
                )}
            </div>
        </>
    );
};

const InstaMart = () => {
    const [isVisible, setIsVisible] = useState("")

    return (
        <div className="p-2 m-2">
            <Profile isVisible={isVisible === "profile"} setIsVisible={setIsVisible} />
            <Carrier isVisible={isVisible === "carrier"} setIsVisible={setIsVisible} />
            <Team isVisible={isVisible === "team"} setIsVisible={setIsVisible} />
        </div>
    );
};

export default InstaMart;
