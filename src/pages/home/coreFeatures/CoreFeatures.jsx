import React from 'react';
import core1 from '../../../assets/icons/check.svg'
import core2 from '../../../assets/icons/deliveryt.svg'
import core3 from '../../../assets/icons/Group 38729.svg'
import core4 from '../../../assets/icons/group.svg'
import core5 from '../../../assets/icons/Wrench.svg'
import core6 from '../../../assets/icons/quote.svg'

const CoreFeatures = () => {
    return (
        <div>
            <article className='mb-5 text-center'>
                <h4 className='text-orange-600 '>Core Features</h4>
                <h2 className='mt-5 text-5xl font-semibold  '>Why Choose Us</h2>
                <p className='w-1/2 mt-5 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </article>
            <div className='grid lg:grid-cols-6'>
                <article className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={core1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                    </div>
                </article>
                <article className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={core2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                    </div>
                </article>
                <article className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={core3} alt="Shoes" className="bg-orange-600 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                    </div>
                </article>
                <article className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={core4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                    </div>
                </article>
                <article className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={core5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                    </div>
                </article>
                <article className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={core6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                    </div>
                </article>

            </div>
        </div>
    );
};

export default CoreFeatures;