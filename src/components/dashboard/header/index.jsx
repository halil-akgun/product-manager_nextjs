"use client" // this is for client side rendering, so this file will not work in server side rendering
import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import "./header.scss";
import { usePathname } from 'next/navigation';

const DashboardHeader = () => {

    const pathName = usePathname();
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
                            <Nav.Link href="/dashboard" as={Link} active={pathName === "/dashboard/profile"}>
                                Dashboard
                            </Nav.Link>
                            <Nav.Link href="/dashboard/products" as={Link} active={pathName === "/dashboard/profile"}>
                                Products
                            </Nav.Link>
                            <Nav.Link href="/dashboard/profile" as={Link} active={pathName === "/dashboard/profile"}>
                                Profile
                            </Nav.Link>
                            <Nav.Link href="/" as={Link}>
                                Home
                            </Nav.Link>
                            <Nav.Link>Signout</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default DashboardHeader