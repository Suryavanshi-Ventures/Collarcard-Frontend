import React from 'react'

const BGContainer = ({ children }) => {
    return (
        <div className="container mx-auto  max-w-screen-xl min-h-screen">
            <div className="relative h-full  w-full">
                <div className="absolute w-[104%] h-[80%] bg-gray-100 transform -rotate-2  bottom-[50px] -left-2 flex justify-center items-center">
                    <div className='about-container w-full h-[80%] rotate-[1.5deg]'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BGContainer
