import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='p-6'>
            <Link className='p-6 text-2xl' to='/' >Home</Link>
            <Link className='p-6 text-2xl' to='/restaurent' >Restaurent</Link>
            <Link className='p-6 text-2xl' to='/about' >About</Link>
        </div>
    );
};

export default Header;