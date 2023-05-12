import React from 'react';
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'

const Team = () => {
    return (
        <div className='mt-10'>
            <article className='text-center'>
                <h4 className='text-orange-600 mb-5 '>Team</h4>
                <h2 className='text-5xl font-semibold mb-5  '>Meet Our Team</h2>
                <p className='w-1/2 mx-auto mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </article>
            <article className='grid lg:grid-cols-3 mb-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center mt-10">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center mt-10">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center mt-10">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Team;