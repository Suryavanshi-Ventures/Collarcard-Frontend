import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SectionTracker = ({ onInViewChange, sectionId, style }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust threshold as needed
  });

  useEffect(() => {
    onInViewChange(sectionId, inView);
  }, [inView, onInViewChange, sectionId]);

  return <div className={style || ""}  ref={ref} id={sectionId}></div>;
};

export default SectionTracker;