import DashboardHeader from '@/components/dashboard/header'
import React from 'react'
import { Container } from 'react-bootstrap'

export const metadata = {
    title: "Dashboard",
    description: "You can buy anything here",
};

const DashboardLayout = ({ children }) => {
    return (
        <>
            <DashboardHeader />
            <Container className='flex-grow-1'>
                {children}
            </Container>
        </>
    )
}

export default DashboardLayout