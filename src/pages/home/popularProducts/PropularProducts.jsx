import React from 'react';
import product1 from '../../../assets/images/products/1.png'
import product2 from '../../../assets/images/products/2.png'
import product3 from '../../../assets/images/products/3.png'
import product4 from '../../../assets/images/products/4.png'
import product5 from '../../../assets/images/products/5.png'
import product6 from '../../../assets/images/products/6.png'

const PropularProducts = () => {
    return (
        <div>
            <article className='text-center'>
                <h4 className='text-orange-600 '>Popular Products</h4>
                <h2 className='text-5xl font-semibold  '>Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </article>

            <article className='mt-10 mb-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 ">
                        <div className='bg-[#F3F3F3] w-80 h-52 rounded-xl'>
                            <img src={product1} alt="Shoes" className="rounded-xl w-36 my-8  mx-auto my-auto " />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Car Engine Plug</h2>
                        <p>$20.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <div className='bg-[#F3F3F3] w-80 h-52 rounded-xl'>
                            <img src={product2} alt="Shoes" className="rounded-xl w-36 my-8 mx-auto " />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Air Filter</h2>
                        <p>$20.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <div className='bg-[#F3F3F3] w-80 h-52  rounded-xl'>
                            <img src={product3} alt="Shoes" className="rounded-xl w-36 my-8 items-center align-baseline mx-auto " />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p>$15.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <div className='bg-[#F3F3F3] w-80 h-52  rounded-xl'>
                            <img src={product4} alt="Shoes" className="rounded-xl w-36 my-8 items-center align-baseline mx-auto " />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p>$15.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <div className='bg-[#F3F3F3] w-80 h-52  rounded-xl'>
                            <img src={product5} alt="Shoes" className="rounded-xl w-36 my-8 items-center align-baseline mx-auto " />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p>$15.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <div className='bg-[#F3F3F3] w-80 h-52  rounded-xl'>
                            <img src={product6} alt="Shoes" className="rounded-xl w-36 my-8 items-center align-baseline mx-auto " />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p>$15.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default PropularProducts;