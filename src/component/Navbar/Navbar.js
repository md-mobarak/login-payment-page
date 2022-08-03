import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const element = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
    return (
        <div>

            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="">
                        <a className='font-bold text-xl'><span className='text-yellow-400 mr-[-5px]'>E-</span> <span className='text-black'>Shop</span></a>
                    </div>
                </div>
                <div class="navbar-center">
                    <ul className='flex'>
                        <li className='font-bold '><a>Men</a></li>
                        <li className='mx-16 font-bold '><a>Women</a></li>
                        <li className='font-bold'><a>Kids</a></li>
                    </ul>
                </div>
                <div class="navbar-end">

                    <button class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span class="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <div>
                        <img className='w-6 h-6 ml-3 hover:bg-base-200 hover:rounded-full hover:p2' src={element} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;