import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const { signup, currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate('/');
  }, [currentUser, navigate]);

  const handleSignup = async () => {
    try {
      await signup(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 px-4'>
            <div className='flex justify-center p-5'>
                <h2 className='text-4xl text-blue-600 font-bold'>Welcome To Task Management App</h2>
            </div>
            <div className='w-full max-w-md'>
                <div className='mb-8 text-center'>
                <h1 className='text-3xl font-bold tracking-tight text-slate-800'>
                    Create your account
                </h1>
                <p className='text-slate-500 mt-2 text-sm'>
                    Sign up to start organizing tasks
                </p>
                </div>
                <div className='bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200 rounded-xl p-8 relative overflow-hidden'>
                <div className='absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_50%_30%,white,transparent)]'></div>
                {error && (
                    <div className='mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600'>
                    {error}
                    </div>
                )}
                <div className='space-y-5 relative'>
                    <div>
                    <label
                        className='block text-sm font-medium text-slate-700 mb-1'
                        htmlFor='email'
                    >
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        autoComplete='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition'
                        placeholder='You@example.com'
                    />
                    </div>
                    <div>
                    <label
                        className='block text-sm font-medium text-slate-700 mb-1'
                        htmlFor='password'
                    >
                        Password
                    </label>
                    <input
                        id='password'
                        type='password'
                        autoComplete='new-password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition'
                        placeholder='Enter Your Password . . .'
                    />
                    </div>
                    <button
                    onClick={handleSignup}
                    className='w-full inline-flex cursor-pointer justify-center items-center gap-2 rounded-lg bg-indigo-600 text-white text-sm font-medium px-4 py-2.5 shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition'
                    >
                    Create account
                    </button>
                </div>
                <div className='mt-6 text-center text-sm text-slate-600'>
                    Already have an account?{' '}
                    <Link
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                    to='/login'
                    >
                    Log in
                    </Link>
                </div>
                </div>
                {/* <p className='mt-8 text-center text-xs text-slate-400'>
                Fast & secure signup powered by Firebase
                </p> */}
            </div>
        </div>
    );
};

export default Signup;