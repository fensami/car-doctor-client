import React from 'react';

const Contact = () => {
    return (
        <div className='rounded-xl mt-10 text-white bg-black flex justify-between px-16 py-24 '>
            <article>
                <p className='text-base'>We are open monday-friday</p>
                <h2 className='font-bold'>7:00 am - 9:00 pm</h2>
            </article>
            <article>
                <p className='text-base'>Have a question?</p>
                <h2 className='font-bold'>+2324 2344 234</h2>
            </article>
            <article>
                <p className='text-base'>Need a repair? our address</p>
                <h2 className='font-bold'>Liza Street, New York</h2>
            </article>
        </div>
    );
};

export default Contact;