"use client"
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import classnames from 'classnames';
import { useRouter } from 'next/navigation';
import "../globals.css"
import React, { useEffect, useState } from 'react';
import logoDark from "../../public/assets/img/oxsys-logo-black.svg"
import logoLight from "../../public/assets/img/oxsys-logo-white.svg"
import Image from "next/image";


const Header = ({ theme }) => {
    const router = useRouter();
    const [activePath, setActivePath] = useState('/');
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
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

    const scroll = classnames('mainHeader', {
        'scrolled': scrolled,
    })
    const logoImage = scrolled ? logoDark : logoLight;

    return (
        <div className={scroll}>
            <Navbar className="navbar fixed-top" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <Image
                            src={logoImage}
                            alt="Oxsys Logo"
                            width={120}
                            height={50}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg></Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features" className={activePath === '#features' ? 'active' : ''}>Features</Nav.Link>
                            <Nav.Link href="#testimonials" className={activePath === '#testimonials' ? 'active' : ''}>Testimonials</Nav.Link>
                            <Nav.Link href="#products" className={activePath === '#products' ? 'active' : ''}>Products</Nav.Link>
                            <Nav.Link href="#compare" className={activePath === '#compare' ? 'active' : ''}>Comparision</Nav.Link>
                            <Nav.Link href="#certifications" className={activePath === '#products' ? 'active' : ''}>Certification</Nav.Link>
                            <Nav.Link href="#faq" className={activePath === '#faq' ? 'active' : ''}>Faq</Nav.Link>
                            <Nav.Link href="#gallery" className={activePath === '#gallery' ? 'active' : ''}>Gallery</Nav.Link>
                        </Nav>
                        {/* <Button variant="primary">
                            <Nav.Link href="tel:+919555256507">Get Started</Nav.Link>
                        </Button> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;