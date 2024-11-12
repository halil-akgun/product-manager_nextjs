"use client" // this is for client side rendering, so this file will not work in server side rendering
import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import "./header.scss";
import menuItems from './menu.json'
import { redirect, usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const DashboardHeader = () => {

    const pathName = usePathname();

    const handleSignout = () => {
        const resp = confirm("Are you sure you want to signout?");
        if (!resp) return;
        signOut({ callbackUrl: "/" });
    }

    return (
        <Navbar className={`bg-danger mb-3`} expand={false} collapseOnSelect>
            <Container>
                <Navbar.Brand href="#">Product Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls={`dashboardOffcanvas`} />
                <Navbar.Offcanvas
                    id={`dashboardOffcanvas`}
                    aria-labelledby={`dashboardOffcanvasLabel`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`dashboardOffcanvasLabel`}>
                            Product Manager
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {menuItems.map((item) => (
                                <Nav.Link
                                    as={Link}
                                    href={item.url}
                                    key={item.id}
                                    active={pathName === item.url}
                                >
                                    {item.title}
                                </Nav.Link>
                            ))}
                            <Nav.Link onClick={handleSignout} >
                                Signout
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default DashboardHeader