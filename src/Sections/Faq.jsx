import React, { useState } from "react";
import "./FAQComponent.css";
import { motion } from "framer-motion";

const FAQComponent = () => {
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (index) => {
    setExpandedQuestions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const questionsLeft = [
    // left column questions
  ];

  const questionsRight = [
    // right column questions
  ];

  const renderQuestions = (questions, columnIndex) =>
    questions.map((item, index) => {
      const isExpanded = expandedQuestions[`${columnIndex}-${index}`];

      const variants = {
        open: { height: "auto", opacity: 1 },
        closed: { height: 0, opacity: 0 }
      };

      return (
        <div key={index} className="faq-item">
          <div
            className="question cursor-pointer flex justify-between items-center"
            onClick={() => toggleQuestion(`${columnIndex}-${index}`)}
          >
            <p className="flex-1">
              {item.question}{" "}
              <span className="text-[30px] h-full">
                {isExpanded ? (
                  <img
                    className="w-[15px] h-[15px]"
                    src="https://cdn-icons-png.flaticon.com/512/43/43625.png"
                    alt="Collapse"
                  />
                ) : (
                  <img
                    className="w-[15px] h-[15px]"
                    src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
                    alt="Expand"
                  />
                )}
              </span>
            </p>
          </div>
          <motion.div
            className={`faq-answer ${isExpanded ? "block" : "hidden"}`}
            variants={variants}
            initial="closed"
            animate={isExpanded ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          >
            <p>{item.answer}</p>
          </motion.div>
        </div>
      );
    });

  return (
    <div className="faq-container faq mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="faqs-h1 text-center">FAQs</h1>
      <h2 className="faq-h1 font-light text-center mt-4 mb-8">Frequently Asked Questions</h2>
      <div className="faq-content grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="faq-column">{renderQuestions(questionsLeft, "left")}</div>
        <div className="faq-column">{renderQuestions(questionsRight, "right")}</div>
      </div>
    </div>
  );
};

export default FAQComponent;
