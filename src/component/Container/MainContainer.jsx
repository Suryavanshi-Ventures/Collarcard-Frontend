import React from 'react'

const MainContainer = ({ children }) => {
    return (
        <div className="container mx-auto  max-w-screen-xl min-h-screen">
            {children}
        </div>
    )
}

export default MainContainer
