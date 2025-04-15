import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import darklogo from "../assets/img/logodark.png"
import whitelogo from "../assets/img/logowhite.png"

import ThemeSwitch from './ThemeSwitch';

const Header = () => {

    const [logo, setLogo] = useState(whitelogo);

    const updateLogo = () => {
        const theme = document.body.getAttribute('data-theme');
        if (theme === 'dark') {
            setLogo(darklogo);
        } else {
            setLogo(whitelogo);
        }
    }

    useEffect(()=>{
        updateLogo(); 
        const observer = new MutationObserver(updateLogo);
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });
    }, [])

    return (
        <div className='fixed top-0 w-full z-10 flex justify-between items-center px-[5%] header-bg'>
            <div className="logo">
                <img src={logo} alt="" className="logo-img" />
            </div>
            <Navbar></Navbar>
            <ThemeSwitch></ThemeSwitch>
        </div>
    );
};

export default Header;