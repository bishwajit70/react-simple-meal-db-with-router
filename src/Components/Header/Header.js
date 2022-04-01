import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex items-center justify-center p-6'>
            <CustomLink className='p-3 text-1xl' to='/' >Home</CustomLink>
            <CustomLink className='p-3 text-1xl' to='/restaurent'>Restaurent</CustomLink>
            <CustomLink className='p-3 text-1xl' to='/about'>About</CustomLink>

        </nav>
    );
};

export default Header;