import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProviders';

const CheckOut = () => {
    const services = useLoaderData()
    const {user} = useContext(AuthContext)
    const { title, _id, service_id ,img, price} = services;
    const handleBookSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const booking = {
            customarName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(user.insertedId){
                alert('booking successfully')
            }
        })
        
    }
    return (
        <div>
            <h1>book service {title}</h1>

            <form onSubmit={handleBookSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.name} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">date</span>
                        </label>
                        <input type="date" name='date' placeholder="date" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deu amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>

            <div className="card-body">

            </div>
        </div>

    );
};

export default CheckOut;