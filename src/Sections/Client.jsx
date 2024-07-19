import React, { useEffect, useState } from "react";
import "./Client.css";
import { motion, AnimatePresence } from "framer-motion";
import SectionTracker from "../component/sectionTracker/SectionTracker";
import Heading from "../component/Heading/Heading";

import meridian from "../assets/Meridian-Capital.jpg";
import tidewell from "../assets/Tidwell-Group.jpg";
import zodiac from "../assets/Zodiac.jpg";
import hollywood from "../assets/W-Hollywood-1.jpg";
import simcoe from "../assets/Simcoe-Capital.jpg";
import orion from "../assets/Orion-Advisor.jpg";
import sawmill from "../assets/Sawmill-Capital.jpg";
import attractive from "../assets/attractive.jpg";
import resoniance from "../assets/Renaissance-Hotel.jpg";
import redwood from "../assets/Redwood-Capital.jpg";
import robert from "../assets/robert-1.png";
import legalSupport from "../assets/legal-support.jpg";
import magnani from "../assets/Magnanni.jpg";
import hotel from "../assets/Four-Seasons.jpg";
import capitalIq from "../assets/capital-iq.jpg";
import tommyH from "../assets/Tommy-Hilfiger.jpg";
import redHanger from "../assets/red-hanger.jpg";
import kpmg from "../assets/KPMG.jpg";
import hyatt from "../assets/Hyatt.jpg";
import savills from "../assets/Savills-Studley.jpg";
import crawford from "../assets/Crawford-Hotel.jpg";
import mfs from "../assets/MFS.jpg";
import stepehens from "../assets/Stephens.jpg";
import butchBlum from "../assets/butch-blum.jpg";
import knightHotel from "../assets/Knickerbocker-Hotel.jpg";
import malofus from "../assets/maloufs-1.jpg";
import archerCapital from "../assets/Archer-Capital.jpg";
import perry from "../assets/perry-ellis.jpg";
import dependableCleaner from "../assets/Dependable.jpg";

function Client() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isSection01InView, setIsSection01InView] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [visible, setVisible] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    { id: 1, src: resoniance, category: "Hotel" },
    { id: 2, src: crawford, category: "Hotel" },
    { id: 3, src: hollywood, category: "Hotel" },
    { id: 4, src: sawmill, category: "Business" },
    { id: 5, src: archerCapital, category: "Business" },
    { id: 6, src: hyatt, category: "Hotel" },
    { id: 7, src: orion, category: "Business" },
    { id: 8, src: dependableCleaner, category: "Dry Cleaners" },
    { id: 9, src: tidewell, category: "Business" },
    { id: 10, src: hotel, category: "Hotel" },
    { id: 11, src: redHanger, category: "Dry Cleaners" },
    { id: 12, src: meridian, category: "Business" },
    { id: 13, src: savills, category: "Business" },
    { id: 14, src: capitalIq, category: "Business" },
    { id: 15, src: butchBlum, category: "Fashion" },
    { id: 16, src: simcoe, category: "Business" },
    { id: 17, src: kpmg, category: "Business" },
    { id: 18, src: robert, category: "Business" },
    { id: 19, src: tommyH, category: "Fashion" },
    { id: 20, src: magnani, category: "Fashion" },
    { id: 21, src: mfs, category: "Business" },
    { id: 22, src: attractive, category: "Business" },
    { id: 23, src: redwood, category: "Business" },
    { id: 24, src: legalSupport, category: "Business" },
    { id: 25, src: perry, category: "Fashion" },
    { id: 26, src: malofus, category: "Fashion" },
    { id: 27, src: knightHotel, category: "Hotel" },
    { id: 28, src: zodiac, category: "Business" },
    { id: 29, src: stepehens, category: "Business" },
  ];

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredClients =
    selectedCategory === "ALL"
      ? clients
      : clients.filter((client) => client.category === selectedCategory);

  const getRandomDirection = (category) => {
    if (category === "Dry Cleaners" || category === "Fashion") {
      return { z: -100, y: 100 };
    } else if (category === "Business" || category === "ALL") {
      const directions = [
        { x: 100, y: 0 },
        { x: -100, y: 0 },
        { x: 0, y: 100 },
        { x: 0, y: -100 },
      ];
      return directions[Math.floor(Math.random() * directions.length)];
    } else if (category === "Hotel") {
      return { x: -100, y: 0 };
    }

    return { x: 0, y: 0 };
  };

  const handleInViewChange = (sectionId, inView) => {
    if (sectionId === "client") {
      setTimeout(() => {
        setIsSection01InView(inView);
      }, 1500);
    }
  };

  const handleInViewChange1 = (sectionId, inView) => {
    if (sectionId === "client1") {
      setIsSectionInView(inView);
    }
  };

  const openModal = (index) => {
    setSelectedImage(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    if (selectedImage < filteredClients.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0);
    }
  };

  const prevImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else {
      setSelectedImage(filteredClients.length - 1);
    }
  };

  return (
    <div id="clients">
      <Heading subTitle={"Works"} title={"Our Client"} />

      {/* <div class="border-none gap-5 flex text-base md:text-lg justify-center items-center mt-8">
        <ul className="flex gap-3 ">
          <li
            className={`hover:bg-[#0066FF] font-semibold font-sans p-2 hover:text-white ${
              selectedCategory == "ALL" && "bg-[#0066FF] text-white "
            }`}
          >
            <button
              className="border-none cursor-pointer"
              onClick={() => handleCategoryChange("ALL")}
            >
         ALL
            </button>
          </li>
          <li
            className={`hover:bg-[#0066FF] font-semibold font-sans p-2 hover:text-white ${
              selectedCategory == "Business" && "bg-[#0066FF] text-white "
            }`}
          >
            <button
              className="border-none cursor-pointer"
              onClick={() => handleCategoryChange("Business")}
            >
              Business
            </button>
          </li>
          <li
            className={`hover:bg-[#0066FF] font-semibold font-sans  p-2 hover:text-white ${
              selectedCategory == "Dry Cleaners" && "bg-[#0066FF] text-white "
            }`}
          >
            <button
              className="border-none cursor-pointer"
              onClick={() => handleCategoryChange("Dry Cleaners")}
            >
              Dry Cleaners
            </button>
          </li>
          <li
            className={`hover:bg-[#0066FF]  font-semibold font-sans p-2 hover:text-white ${
              selectedCategory == "Fashion" && "bg-[#0066FF] text-white "
            }`}
          >
            <button
              className="border-none cursor-pointer"
              onClick={() => handleCategoryChange("Fashion")}
            >
              Fashion
            </button>
          </li>
          <li
            className={`hover:bg-[#0066FF] font-semibold font-sans p-2 hover:text-white ${
              selectedCategory == "Hotel" && "bg-[#0066FF] text-white "
            }`}
          >
            <button
              className="border-none cursor-pointer"
              onClick={() => handleCategoryChange("Hotel")}
            >
              Hotel
            </button>
          </li>
        </ul>
      </div> */}

<div className="flex justify-center items-center mt-5 space-x-3">
  <ul className="flex flex-wrap gap-3">
    <li className={`hover:bg-[#0066FF] font-semibold font-sans p-2 hover:text-white ${selectedCategory === "ALL" && "bg-[#0066FF] text-white"}`}>
      <button className="border-none cursor-pointer" onClick={() => handleCategoryChange("ALL")}>
        ALL
      </button>
    </li>
    <li className={`hover:bg-[#0066FF] font-semibold font-sans p-2 hover:text-white ${selectedCategory === "Business" && "bg-[#0066FF] text-white"}`}>
      <button className="border-none cursor-pointer" onClick={() => handleCategoryChange("Business")}>
        Business
      </button>
    </li>
    <li className={`hover:bg-[#0066FF] font-semibold font-sans p-2 hover:text-white ${selectedCategory === "Dry Cleaners" && "bg-[#0066FF] text-white"}`}>
      <button className="border-none cursor-pointer" onClick={() => handleCategoryChange("Dry Cleaners")}>
        Dry Cleaners
      </button>
    </li>
    <li className={`hover:bg-[#0066FF] font-semibold font-sans p-2 hover:text-white ${selectedCategory === "Fashion" && "bg-[#0066FF] text-white"}`}>
      <button className="border-none cursor-pointer" onClick={() => handleCategoryChange("Fashion")}>
        Fashion
      </button>
    </li>
    <li className={`hover:bg-[#0066FF] font-semibold font-sans p-2 hover:text-white ${selectedCategory === "Hotel" && "bg-[#0066FF] text-white"}`}>
      <button className="border-none cursor-pointer" onClick={() => handleCategoryChange("Hotel")}>
        Hotel
      </button>
    </li>
  </ul>
</div>


      <SectionTracker
        className="hidden"
        sectionId="client1"
        onInViewChange={handleInViewChange1}
      />
      <SectionTracker
        sectionId="client"
        onInViewChange={handleInViewChange}
      />
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-10 overflow-hidden justify-start">
  
          <AnimatePresence>
          {filteredClients.slice(0, 12).map((itm, index) => {
            const direction = getRandomDirection(selectedCategory);
            return (
              <motion.div 
                key={`${itm.src}-${selectedCategory}-${index}`}
                initial={{ scale: 0 }}
                animate={isSectionInView && { scale: 1 }}
                transition={
                  isSectionInView && selectedCategory == "ALL"
                    ? { duration: 0.5, ease: "easeInOut" }
                    : {}
                }
                onClick={() => openModal(index)}
              >
                <motion.img
                  src={itm.src}
                  alt=""
                  initial={{ opacity: 0, ...direction }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, ...direction }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
          {filteredClients.slice(12).map((item, index) => {
            const direction = getRandomDirection(selectedCategory);
            const shouldAnimateFromBottom = isSection01InView === true;

            const initialAnimation = {
              opacity: 0,
              ...direction,
              ...(shouldAnimateFromBottom ? { y: 100 } : {}),
            };

            const animateAnimation = {
              opacity: 1,
              x: 0,
              y: 0,
            };

            const exitAnimation = {
              opacity: 0,
              ...direction,
            };

            return (
              <motion.div
                key={`${item.src}-${selectedCategory}-${index + 12}`}
                initial={{ scale: 0 }}
                animate={isSection01InView && { scale: 1 }}
                transition={
                  isSectionInView && selectedCategory == "ALL"
                    ? { duration: 1, ease: "easeInOut" }
                    : {}
                }
                onClick={() => openModal(index + 12)}
              >
                <motion.img
                  src={item.src}
                  alt=""
                  initial={initialAnimation}
                  animate={animateAnimation}
                  exit={exitAnimation}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* {showModal && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <motion.img
              src={filteredClients[selectedImage].src}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
         
            />
            <div className="modal-navigation">
              <button onClick={prevImage}><i class="fa-solid fa-angle-left "></i></button>
              <button onClick={nextImage}><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      )} */}

{showModal && (
  <div className="modal">
    <span className="close" onClick={closeModal}>
      &times;
    </span>
    <div className="modal-content">
      <motion.img
        src={filteredClients[selectedImage].src}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <div className="modal-navigation">
      <button className="prev-btn" onClick={prevImage}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className="next-btn" onClick={nextImage}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
)}



    </div>
  );
}

export default Client;
