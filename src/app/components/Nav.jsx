'use client'
import React, { useState, useEffect } from 'react'
import nav from '../data/nav'
import Link from 'next/link';
import './nav.css';

export default function Nav() {

    const [scroll, setScroll] = useState(0);
    const [navList, setNavList] = useState(nav);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

    const handleNavOnClick = id => {
        const newNavList = navList.map(nav => {
            nav.active = false;
            if (nav.id === id) nav.active = true;
            return nav;
        });

        setNavList(newNavList);
    }

    const handleOpenSearchForm = () => {
        document.body.classList.remove('box-collapse-closed');
        document.body.classList.add('box-collapse-open');
    };
    return (
        <nav className={`navbar navbar-default navbar-expand-lg fixed-top ${scroll > 100 ? 'navbar-raduce' : 'navbar-trans'}`}>
            <div
                className="container"
                style={{ position: 'relative', height: '70px' }} // Adjust height if needed
            >
                {/* Left: Brand (logo) */}
                <a
                    className="navbar-brand text-brand"
                    href="/"
                    style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="KLYK Logo"
                        style={{ height: '120px', objectFit: 'contain' }} // Change size freely here
                    />
                </a>

                {/* Center: Nav items */}
                <div
                    className="navbar-collapse collapse justify-content-center"
                    id="navbarDefault"
                    style={{
                        position: 'absolute',
                        left: '55%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                    }}
                >
                    <ul className="navbar-nav">
                        {navList.map((item) => (
                            <li className="nav-item" key={item.id}>
                                <Link
                                    className={`nav-link ${item.active ? 'active' : ''}`}
                                    href={item.link}
                                    onClick={() => handleNavOnClick(item.id)}
                                >
                                    {item.name === 'Home' ? (
                                        <i className="bi bi-house-door-fill nav-link"></i>
                                    ) : (
                                        item.name
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Toggler + Search */}

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={() => {
                        document.getElementById('navbarDefault').classList.toggle('show');
                    }}
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 20,
                        display: 'none', // default hidden, shown in CSS for mobile
                    }}
                >
                    <span style={{ display: 'block', width: 24, height: 3, background: '#222', margin: '4px 0', borderRadius: 2 }}></span>
                    <span style={{ display: 'block', width: 24, height: 3, background: '#222', margin: '4px 0', borderRadius: 2 }}></span>
                    <span style={{ display: 'block', width: 24, height: 3, background: '#222', margin: '4px 0', borderRadius: 2 }}></span>
                </button>

            </div>
        </nav>


    )
}
