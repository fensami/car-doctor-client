import React, { useContext } from 'react';
import logo from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProviders';
import { Result } from 'postcss';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login now</h1>
                    {/* Form section */}
                       <form onSubmit={handleLogin}>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className=" form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                       </form>
                       <p className='my-4 text-center'>New to cars doctor <Link className='text-orange-600 font-bold' to='/signUp'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;