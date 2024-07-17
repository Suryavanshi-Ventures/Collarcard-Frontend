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
        <div className=" xs:mt-5 md:mt-0 lg:mt-16 h-[780px] w-full md:w-[90%] lg:w-full m-auto md:pr-2 lg:pr-0 md:h-[504px] overflow-hidden">
            <SectionTracker
                sectionId="usesRate"
                onInViewChange={handleInViewChange}
            />
            {/* <div className="relative h-full  w-full">
                <div className="absolute w-[104%] h-[80%] bg-gray-100 transform -rotate-2  bottom-[50px] -left-2 flex justify-center items-center">
                    <div className='about-container w-full h-[80%] rotate-[1.5deg]'> */}
            <div className=' h-[70%] md:h-[90%] flex  flex-col md:flex-row justify-between'>
                <div className='w-full h-[280px] md:w-[50%] lg:w-[43%]'>
                    <CompairImage />
                </div>
                <div className='w-full  md:w-[45%] mt-0 md:mt-[-10px] lg:mt-3  '>
                    <div className='mb-3 lg:mb-10'>
                        <h2 className='text-[#00000014] text-[36px] lg:text-[50px] mb-[-20px] lg:mb-[-35px] ml-[-5px]  font-semibold'>Compare</h2>
                        <h2 className='text-[#0066FF] text-[26px] lg:text-[35px]  font-semibold'>Usage Rates</h2>
                    </div>
                    <div>
                        <ProgressBar label="CollarCards" percentage={100} sectionView={isSection01InView} />
                        <ProgressBar label="Other Promotional Products" percentage={22} sectionView={isSection01InView} />
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* // </div> */}
            {/* </div> */}
        </div>
    )
}

export default UsesRate


const CompairImage = () => {
    return <div className='rounded-lg w-full h-full m-auto' >
        {/* h-[280px] lg:w-[480px] lg:h-[284px] */}
        <ReactCompareImage
            leftImage={beforeImage}
            rightImage={afterImage}
            sliderLineColor='black'
        />
    </div>
}
const ProgressBar = ({ label, percentage, sectionView }) => {
    return (
        <div className="mb-2 font-sans">
            <div className="text-[17px] font-[600] mb-1">{label}</div>
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
