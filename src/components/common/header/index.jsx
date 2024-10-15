"use client" // this is for client side rendering, so this file will not work in server side rendering
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import menuItems from './menu.json'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/" as={Link}>
                    <Image src="/images/logo.png" alt="Cosmo Shop" width={272} height={43} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {menuItems.map((item) => (
                            <Nav.Link as={Link} href={item.url} key={item.id}>
                                {item.title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                <Link href="/dashboard">Dashboard</Link>
            </Container>
        </Navbar>
    )
}

export default Header