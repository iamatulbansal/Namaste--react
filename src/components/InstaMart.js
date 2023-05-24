import React, { useState } from 'react';
const Section = ({ isVisible, setIsVisible, setSectionIsVisible, title, description }) => {
    return (
        <div className='border-2 border-indigo-600 p-2 m-2 '>
            <div className='text-lg'>{title}</div>
            {isVisible ? <button className='bg-gray-200 rounded-lg px-2' onClick={() => {

                setSectionIsVisible(null)

            }}>Hide</button> :
                <button className='bg-green-200 rounded-lg px-2' onClick={() => setIsVisible()}>Show</button>}
            <p>{isVisible && description}</p>
        </div>
    );
};

const InstaMart = () => {
    const [sectionIsVisible, setSectionIsVisible] = useState("about")

    return (
        <div className="p-2 m-2">
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart Page</h1>
            <Section
                title="About instaMart"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur aut sapiente eos voluptate doloremque, laborum voluptates aliquid quasi pariatur vitae! Quam voluptatum eveniet tempore eum blanditiis culpa iste eos."

                isVisible={sectionIsVisible === "about"}
                setIsVisible={() => setSectionIsVisible("about")}
                setSectionIsVisible={setSectionIsVisible}

            />
            <Section
                title="Team instaMart"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur aut sapiente eos voluptate doloremque, laborum voluptates aliquid quasi pariatur vitae! Quam voluptatum eveniet tempore eum blanditiis culpa iste eos."
                isVisible={sectionIsVisible === "team"}
                setIsVisible={() => setSectionIsVisible("team")}
                setSectionIsVisible={setSectionIsVisible}
            />
            <Section
                title="Careers instaMart"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur aut sapiente eos voluptate doloremque, laborum voluptates aliquid quasi pariatur vitae! Quam voluptatum eveniet tempore eum blanditiis culpa iste eos."

                isVisible={sectionIsVisible === "careers"}
                setIsVisible={() => setSectionIsVisible("careers")}
                setSectionIsVisible={setSectionIsVisible}
            />
        </div>
    );
};

export default InstaMart;
