import React, { useEffect, useRef, useState } from 'react';
import { StyledMobileMenu } from './mobileMenu.styled';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '../menu/Menu';


export const MobileMenu = ({ user }) => {
    const path = useLocation()
    const mobileMenu = useRef(null);
    const [isOpenDropMenu, setIsOpenDropMenu] = useState(false);
    const toggleMenu = () => {
        setIsOpenDropMenu(prev => !prev);
        document.body.classList.toggle('stop-scroll')
    };

    useEffect(() => {
        setIsOpenDropMenu(false)
        document.body.classList.remove('stop-scroll')
    }, [path])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenu.current && !mobileMenu.current.contains(event.target)) {
                setIsOpenDropMenu(false);
                document.body.classList.remove('stop-scroll')
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <StyledMobileMenu ref={mobileMenu}>
            <div className="mobileMenu__inner">
                <div className={`mobileMenu__burger ${isOpenDropMenu ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`mobileMenu__dropMenu ${isOpenDropMenu ? 'open' : ''}`}>
                    <Menu />
                </div>
            </div>
        </StyledMobileMenu>
    );
};

