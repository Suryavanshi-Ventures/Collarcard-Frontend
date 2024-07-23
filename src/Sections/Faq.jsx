import React, { useState } from "react";
// import "./FAQComponent.css";
import { motion } from "framer-motion";
import Heading from "../component/Heading/Heading";

const FAQComponent = () => {
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (index) => {
    setExpandedQuestions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const questionsLeft = [
    {
      id: 1,
      question: "What is a CollarCard?",
      answer:
        "A CollarCard is a credit card sized plastic card that contains four high quality pop-out collar stays and is stored in a man’s wallet. We designed CollarCards to address and fix the common problem of men forgetting their collar stays when they leave the house, when they are traveling, or for any occasion when they are wearing a dress shirt.",
    },
    {
      id: 2,
      question: "Do men carry loose collar stays in their wallet?",
      answer:
        "Never. Loose collar stays would fall out of a man’s wallet. To solve this problem, we invented and designed CollarCards as a way to keep collar stays in a man’s wallet.",
    },
    {
      id: 3,
      question: "How do CollarCards work?",
      answer:
        "CollarCards are incredibly easy to use. Simply pop out the number of collar stays you need and put the stays in your shirt; when you are finished using your collar stays, remove the stays from your shirt and snap them back into your CollarCard to store neatly for future use.",
    },
    {
      id: 4,
      question:
        "Do you have a video demonstration of CollarCards and how they work?",
      answer:
        "We sure do. One of our clients liked our product so much they made a video for us. Please click here to watch our video.",
    },
    {
      id: 5,
      question:
        "Do you work with outside promotional products and marketing firms?",
      answer:
        "We sure do. We are proud members of ASI (Member Number 45636), PPAI (Member Number 538040) and Sage (Member Number 69607), and we work with many thousands of hardworking, dedicated marketing and sales reps throughout the world. CollarCard is owned by a technology entrepreneur, and we have a sophisticated customized CRM that tracks every order we receive – thus ensuring our third party partners are paid on every order and reorder. If you’re a sales specialist at one of these or other firms, please give us a call – we would love to work with you!",
    },
    {
      id: 6,
      question: "What is “High Resolution” Artwork?",
      answer:
        "High resolution, or vector artwork, are files at least 300 dpi (dots per inch) at actual size. Typical high resolution formats are: TIFF, JPEG, .cmyk, .eps, and .ai. If you’re not familiar with your logo image specifications, a graphic designer can help you locate and understand files that meet CollarCard Art Proof requirements. Files sent to CollarCard larger than 60 MB should be compressed. We are happy to answer any questions about your art at sales@collarcard.com.",
    },
    {
      id: 7,
      question: "Is your customer service really that good?",
      answer:
        "Yes it is. In the history of our business we have never had an unhappy customer. We are obsessed with great customer service – we are friendly, fast, and laser focused on making sure our customers are happy. Please give us a call to find out how good our customer service really is.",
    },
    {
      id: 8,
      question:
        "Can I leave collar stays in my shirt when dry cleaning, ironing, or pressing?",
      answer:
        "No. Unfortunately, all collar stays should be removed prior to cleaning, pressing, or ironing shirts.",
    },
    {
      id: 9,
      question: "Where are CollarCards made?",
      answer:
        "While most collar stays are manufactured overseas, we believe in American-made goods and all CollarCards are proudly made in the United States.",
    },
    {
      id: 10,
      question: "What kind of plastic is used to make CollarCards?",
      answer: "The plastic used in CollarCards is...",
    },
  ];

  const questionsRight = [
    {
      id: 12,
      question: "What kind of plastic is used to make CollarCards?",
      answer:
        "While other collar stay manufacturers may use thinner and lesser quality plastic to make collar stays, we are an environmentally friendly company and we make all CollarCards out of environmentally-friendly Teslin.",
    },
    {
      id: 13,
      question: "Are the collar stays in CollarCards made from thin plastic?",
      answer:
        "No, we like high quality products and we designed CollarCards to contain high quality collar stays. CollarCards measure the same width as a credit card, and the collar stays inside are made of thick, sturdy plastic.",
    },
    {
      id: 14,
      question:
        "Do you sell CollarCards to individuals and not just companies?",
      answer:
        "Yes, we do. Please click here for your options to purchase CollarCards.",
    },
    {
      id: 15,
      question: "Do you sell outside the United States?",
      answer:
        "You bet we do. We have thousands of happy customers around the world.",
    },
    {
      id: 16,
      question: "Do you have any intellectual property?",
      answer:
        "Yes – we have five issued patents and three registered trademarks – please see the PATENTS section above. As a one–product company, we take our intellectual property seriously – which means we vigorously protect our patents and trademarks. As a matter of company policy, every CollarCard we produce includes one of our patents numbers and website.",
    },
    {
      id: 17,
      question: "Can I private label CollarCards?",
      answer:
        "Yes, and we hope you do because making private label CollarCards is our specialty. We make customized CollarCards for any type of business. CollarCards offer companies a great, cost effective way to put your brand in a man’s wallet 24 hours a day. Please click here if you are interested in learning more or call us at (877) 832-4403 or (310) 472-5476 and one of our extremely friendly CollarCard representatives will call you back promptly.",
    },
    {
      id: 18,
      question: "What kinds of companies make CollarCards?",
      answer:
        "All kinds. Our clients include dry cleaners, hotels, men’s retailers, department stores, shirt makers, liquor companies, food companies, promotional products firms, law firms, hedge funds, accounting firms, banks, investment banks, rehabilitation centers, architects, jet charter companies, Fortune 500 companies – and any other company that wants a cool, fun, cost effective way to put their brand in a man’s wallet 24 hours a day.",
    },
    {
      id: 19,
      question: "Is there any limitation to what I can print on a CollarCard?",
      answer:
        "No, the sky is the limit. You can print anything you want on CollarCards, and some of our more creative clients have made pieces that resemble fine art. We print full color on the front, one color on the back. You can even put a photograph on your cards.",
    },
    {
      id: 20,
      question: "How easy is it to make my own customized CollarCards?",
      answer:
        "It’s incredibly easy. You simply send us your art ready logo in high resolution / vector format and we will promptly send you a CollarCard proof in portable document format (PDF). If you have any changes to your proof, we will promptly make those changes. Once you approve your CollarCard proof, we make your CollarCards.",
    },
    {
      id: 21,
      question:
        "Do the logos you print on CollarCards cause the collar stays to show through white dress shirts?",
      answer:
        "No. We print a light grey color on the back of CollarCards to make sure the collar stays do not show through white shirts.",
    },
    {
      id: 22,
      question: "Do any clients use CollarCards as business cards?",
      answer:
        "Yes, they do. And we would encourage you to as well. CollarCards cost more than traditional business cards made of paper, but unlike traditional business cards nobody throws CollarCards away. If you want to put your business card in man’s wallet 24 hours a day, and have something unique that stands out and makes a nice impression, you should buy CollarCards and make them your business card. In addition to being an effective marketing tool, CollarCards are extremely cool.",
    },
  ];


  return (
    <div className="faq-container faq">
      
    

      <Heading subTitle={"FAQs"} title ={"Frequently Asked Questions"}/>



      <div className="flex flex-col lg:flex-row justify-between mt-5">
        <div className="w-full lg:w-[49%]">
          <RenderQuestion faqs={questionsLeft} />
          {/* {renderQuestions(questionsLeft, "left")} */}
        </div>
        <div className="w-full lg:w-[49%]">
          <RenderQuestion faqs={questionsRight} />
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;



const RenderQuestion = ({ faqs }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleAccordion = (index) => {
    console.log("---->>>", index)
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(item => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  console.log("expandedItems", expandedItems)

  return (
    <div className="font-sans border border-gray-200">
      {faqs.map((faq, index) => (
        <div
          key={faq?.id}
          className={`border border-gray-300 transition-all duration-300  ease-in-out`}
        >
          <div className="">
            <div
              className="flex h-full cursor-pointer items-center  justify-between  w-full text-left font-semibold p-4 "

              onClick={() => toggleAccordion(faq?.id)}
            // aria-expanded={expandedItems.includes(faq?.id)}
            // aria-controls={`faqs-text-${faq?.id}`}
            >
              <span className="text-black text-[16px] font-semibold w-[85%]">{faq.question}</span>
              <svg
                // onClick={() => toggleAccordion(faq?.id)}
                className="fill-black-500 shrink-0 font-bold" // Add font-bold class here
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${expandedItems.includes(faq?.id) ? 'rotate-180' : ''
                    }`}
                />
                {!expandedItems.includes(faq?.id) && (
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${expandedItems.includes(faq?.id) ? 'rotate-180' : ''
                      }`}
                  />
                )}
              </svg>

            </div>
          </div>
          <div
            // aria-labelledby={`faqs-title-${faq?.id}`}
            className={`${expandedItems.includes(faq?.id) ? 'py-4 opacity-100' : 'py-0 opacity-0'} text-sm bg-[#E7E7E7] transition-all duration-300 ease-in-out`}
          >
            <div className={`${!expandedItems.includes(faq?.id) && 'hidden'}`}>
              <p className="px-4 text-[17px]">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

