import React, { useState } from "react";
import "./Client.css";
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
import redHanger from "../assets/red hanger.jpg";
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
import dependableCleaner from "../assets/Dependable-Cleaners-1.jpg";
import { motion, AnimatePresence } from 'framer-motion';
import SectionTracker from "../component/sectionTracker/SectionTracker";

function Client() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isSection01InView, setIsSection01InView] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);


  const clients = [
    { src: meridian, category: "Business" },
    { src: tidewell, category: "Business" },
    { src: zodiac, category: "Business" },
    { src: hollywood, category: "Hotel" },
    { src: simcoe, category: "Business" },
    { src: orion, category: "Business" },
    { src: sawmill, category: "Business" },
    { src: attractive, category: "Business" },
    { src: resoniance, category: "Hotel" },
    { src: redwood, category: "Business" },
    { src: robert, category: "Business" },
    { src: legalSupport, category: "Business" },
    { src: magnani, category: "Fashion" },
    { src: hotel, category: "Hotel" },
    { src: capitalIq, category: "Business" },
    { src: tommyH, category: "Fashion" },
    { src: redHanger, category: "Dry Cleaners" },
    { src: kpmg, category: "Business" },
    { src: hyatt, category: "Hotel" },
    { src: savills, category: "Business" },
    { src: crawford, category: "Hotel" },
    { src: mfs, category: "Business" },
    { src: stepehens, category: "Business" },
    { src: butchBlum, category: "Fashion" },
    { src: knightHotel, category: "Hotel" },
    { src: malofus, category: "Fashion" },
    { src: archerCapital, category: "Business" },
    { src: perry, category: "Fashion" },
    { src: dependableCleaner, category: "Dry Cleaners" },
  ];

  function handleCategoryChange(category) {
    setSelectedCategory(category)
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
        { x: 0, y: -100 } 
      ];
      return directions[Math.floor(Math.random() * directions.length)];
    } else if (category === "Hotel") {
      return { x: -100, y: 0 }; 
    }
    
    return { x: 0, y: 0 };
  };


  const handleInViewChange = (sectionId, inView) => {
    if (sectionId === "client") {
      setIsSection01InView(inView);
    }
  };

  const handleInViewChange1 = (sectionId, inView) => {
    if (sectionId === "client1") {
      setIsSectionInView(inView);
    }
  };

  return (
    <div id="clients">
      <h1 className="h1-client">Works</h1>
      <h1 className="h1-our-client">Our Clients</h1>
      <div className="button-client-container">
        <ul>
          <li>
            <button onClick={() => handleCategoryChange("ALL")}>ALL</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Business")}>Business</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Dry Cleaners")}>Dry Cleaners</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Fashion")}>Fashion</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("Hotel")}>Hotel</button>
          </li>
        </ul>
      </div>
      <div className="client-img-container mt-10 overflow-hidden">
      <SectionTracker
            sectionId="client1"
            onInViewChange={handleInViewChange1}
          />
        <AnimatePresence>
          {filteredClients.slice(0, 12).map((client, index) => {
            const direction = getRandomDirection(selectedCategory);
            return (
              <motion.div
              initial={{ scale: 0 }}
              animate={isSectionInView && { scale: 1 }}
              transition={isSectionInView && { duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                key={client.src}
                src={client.src}
                alt=""

                initial={{ opacity: 0, ...direction }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, ...direction }}
                transition={{ duration: 0.5 }}
              />
              </motion.div>
            );
          })}
          <SectionTracker
            sectionId="client"
            onInViewChange={handleInViewChange}
          />
          {filteredClients.slice(13, filteredClients.length).map((client, index) => {
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
                initial={{ scale: 0 }}
                animate={isSection01InView && { scale: 1 }}
                transition={isSection01InView && { duration: 1, ease: "easeInOut" }}
              >
                <motion.img
                  key={client.src}
                  src={client.src}
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
    </div>
  );
}

export default Client;
