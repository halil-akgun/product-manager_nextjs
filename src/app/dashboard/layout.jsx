import DashboardHeader from '@/components/dashboard/header'
import React from 'react'
import { Container } from 'react-bootstrap'

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