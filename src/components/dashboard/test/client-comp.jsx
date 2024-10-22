"use client"
import React from 'react'
import ServerComp from './server-comp'

const ClientComp = () => {
    console.log("This is client component")
    return (
        <div>
            ClientComp
            {/* <ServerComp /> */}
            {/* ServerComp is used within ClientComp, so it's rendered on the client side despite being a server component. */}
        </div>
    )
}

export default ClientComp