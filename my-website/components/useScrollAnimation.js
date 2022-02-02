import { useCallback, useEffect, useRef } from "react";

const useScrollAnimation = (direction = 'up', duration = 1, delay = 0.2) => {
  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)'
      case 'left':
        return 'translate3d(50%, 0, 0)'
      case 'right':
        return 'translate3d(-50%, 0, 0)'
      default:
        return;
    };
  };

  const handleScroll = useCallback(([entry]) => {
    const { current } = element;
    // console.log("entry", entry.isIntersecting)
    if (entry.isIntersecting) {
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = 1;
      current.style.transform = 'translate3d(0, 0, 0)';

      current.style.animationPlayState = "running";
    }
    else {
      current.style.animationPlayState = "paused"
      current.style.opacity = 0;
      current.style.transform = 'translate3d(0, 50%, 0)'
    }
  }, [])

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: element,
    style: {
      // animationPlayState: "paused",
      opacity: 0,
      transform: handleDirection(direction),
    }
  };
};

export default useScrollAnimation;