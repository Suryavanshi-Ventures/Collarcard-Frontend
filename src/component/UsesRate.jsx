import React, { useState } from 'react'
import ReactCompareImage from 'react-compare-image';
import beforeImage from '../assets/before.png';
import afterImage from '../assets/after.png';
import { motion } from 'framer-motion';
import SectionTracker from "./sectionTracker/SectionTracker"

const UsesRate = () => {

    const [isSection01InView, setIsSection01InView] = useState(false);

    const handleInViewChange = (sectionId, inView) => {
        if (sectionId === "usesRate") {
            setIsSection01InView(inView);
        }
    };


    return (
        <div className="App mt-10 h-[604px] overflow-hidden">
            <SectionTracker
                sectionId="usesRate"
                onInViewChange={handleInViewChange}
            />
            <div className="relative h-full  w-full">
                <div className="absolute w-[104%] h-[80%] bg-gray-100 transform -rotate-2  bottom-[50px] -left-2 flex justify-center items-center">
                    <div className='about-container w-full h-[80%] rotate-1'>
                        <div className=' h-[90%] flex justify-between'>
                            <div className='w-[50%]'>
                                <CompairImage />
                            </div>
                            <div className='w-[50%] mt-3'>
                                <div className='mb-10'>
                                    <h2 className='text-[#00000014] text-[58px] mb-[-45px] font-[500]'>Compare</h2>
                                    <h2 className='text-[#0066FF] text-[35px] font-[500]'>Usage Rates</h2>
                                </div>
                                <div>
                                    <ProgressBar label="CollarCards" percentage={100} sectionView={isSection01InView}/>
                                    <ProgressBar label="Other Promotional Products" percentage={22} sectionView={isSection01InView}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsesRate


const CompairImage = () => {
    return <div className='rounded-lg' style={{ width: '480px', height: "284px", margin: '0 auto' }}>
        <ReactCompareImage
            leftImage={beforeImage}
            rightImage={afterImage}
            sliderLineColor='black'
        />
    </div>
}
const ProgressBar = ({ label, percentage, sectionView }) => {
    return (
        <div className="mb-6">
            <div className="text-[17px] font-600 mb-1">{label}</div>
            <div className="h-6 relative w-full bg-gray-200 rounded">
                <motion.div
                    className="h-[25px] bg-[#0066FF] rounded flex items-center justify-end"
                    initial={{ width: "0%" }}
                    animate={sectionView && { width: `${percentage}%` }}
                    transition={sectionView && { duration: 1 }}
                >
                    <span className="text-white font-[500] text-[16px] pr-2">
                        {`${percentage}%`}
                    </span>
                </motion.div>
            </div>
        </div>
    );
};
