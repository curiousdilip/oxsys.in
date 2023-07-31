"use client"
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import classnames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import logoDark from '../../public/assets/img/tb-logo.svg';
// import logoLight from '../../public/assets/img/tb-logo-black.svg';
// import './Header.css';
import "../globals.css"
import React, { useEffect, useState } from 'react';

const Header = ({ theme }) => {
    const router = useRouter();
    const [activePath, setActivePath] = useState('/');
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleRouteChange = (url) => {
            setActivePath(url);
        };

        if (router?.events) {
            router.events.on('routeChangeComplete', handleRouteChange);
            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [router]);

    const navbarClass = classnames('navbar', {
        'navbar-dark': theme === 'dark',
        // 'navbar-light': theme === 'light',

    }, 'fixed-top');

    const scroll = classnames('mainHeader', {
        'scrolled': scrolled,
    })
    // const logoImage = theme === 'dark' ? logoDark : logoLight;

    return (
        <div className={scroll}>
            {/* <style jsx global>{`
      @import "https://fonts.googleapis.com/css?family=Roboto Mono";

      body {
          font-family: 'Roboto Mono';
      }
      `}</style> */}
            <Navbar className={navbarClass} expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <h3>OXSYS.IN</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features" className={activePath === '#features' ? 'active' : ''}>Features</Nav.Link>
                            <Nav.Link href="#testimonials" className={activePath === '#testimonials' ? 'active' : ''}>Testimonials</Nav.Link>
                            <Nav.Link href="#products" className={activePath === '#products' ? 'active' : ''}>Products</Nav.Link>

                        </Nav>
                        <Button variant="primary">
                            <Nav.Link href="/contact" className={activePath === '/contact' ? 'active' : ''}>Get Started</Nav.Link>
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;