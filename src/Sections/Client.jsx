import React, { useState } from "react";
import "./Client.css";
import { motion, AnimatePresence } from 'framer-motion';
import SectionTracker from "../component/sectionTracker/SectionTracker";

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
    <div id="clients" className="mt-2">
      <h1 className="h1-client">Works</h1>
      <h1 className="h1-our-client">Our Clients</h1>
      <div className="button-client-container">
      <ul>
      <li className={`category-item ${selectedCategory === "ALL" ? "category-item-selected" : ""}`}>
        <button onClick={() => handleCategoryChange("ALL")}>ALL</button>
      </li>
      <li className={`category-item ${selectedCategory === "Business" ? "category-item-selected" : ""}`}>
        <button onClick={() => handleCategoryChange("Business")}>Business</button>
      </li>
      <li className={`category-item ${selectedCategory === "Dry Cleaners" ? "category-item-selected" : ""}`}>
        <button onClick={() => handleCategoryChange("Dry Cleaners")}>Dry Cleaners</button>
      </li>
      <li className={`category-item ${selectedCategory === "Fashion" ? "category-item-selected" : ""}`}>
        <button onClick={() => handleCategoryChange("Fashion")}>Fashion</button>
      </li>
      <li className={`category-item ${selectedCategory === "Hotel" ? "category-item-selected" : ""}`}>
        <button onClick={() => handleCategoryChange("Hotel")}>Hotel</button>
      </li>
    </ul>
      </div>
      <div className="client-img-container about-container mt-10 overflow-hidden justify-start">
        <SectionTracker sectionId="client1" onInViewChange={handleInViewChange1} />
        <AnimatePresence>
          {filteredClients.map((client, index) => {
            const direction = getRandomDirection(selectedCategory);

            const initialAnimation = {
              opacity: 0,
              ...direction,
              scale: 0,
            };

            const animateAnimation = {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            };

            const exitAnimation = {
              opacity: 0,
              ...direction,
              scale: 0,
            };

            return (
              <motion.div
                key={`${client.src}-${selectedCategory}-${index}`}
                initial={initialAnimation}
                animate={animateAnimation}
                exit={exitAnimation}
                transition={{ duration: 0.5 }}
                className="client-image-container"
              >
                <img src={client.src} alt="" className="client-image" />
              </motion.div>
            );
          })}
        </AnimatePresence>
        <SectionTracker sectionId="client" onInViewChange={handleInViewChange} />
      </div>
    </div>
  );
}

export default Client;
