import { useState, useEffect, useRef } from 'react';

const useInView = (options) => {
  // Original state: tracks if the element is CURRENTLY in view
  const [inView, setInView] = useState(false);
  // NEW state: tracks if the element has EVER been in view
  const [hasBeenViewed, setHasBeenViewed] = useState(false); 
  // Ref to the element we want to observe
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update original state
      setInView(entry.isIntersecting);
      
      // If the element is intersecting (is in view), set hasBeenViewed to true
      // and you can stop observing it to save resources.
      if (entry.isIntersecting) {
        setHasBeenViewed(true);
        // Optional: Stop observing once the element has been seen
        // observer.unobserve(entry.target);
      }
    }, options);

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup function
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  // Add hasBeenViewed to dependency array if you uncomment observer.unobserve(entry.target);
  }, [options]); 

  // Return the ref and the new state for persistent animation
  return [ref, hasBeenViewed]; // <-- CHANGED to return hasBeenViewed
};

export default useInView;