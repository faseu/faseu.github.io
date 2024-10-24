/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
function TypeAnimation({
  strings = [],
  loop = true,
  fadeOut = false,
  typeSpeed = 150,
  backSpeed = 40,
  startDelay = 0,
  onComplete,
  preStringTyped,
  showCursor = true,
  backDelay = 2200,
}) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      startDelay: startDelay,
      backDelay: backDelay,
      loop: loop,
      fadeOut: fadeOut,
      showCursor: showCursor,
      cursorChar: '|',
      onComplete: onComplete,
      preStringTyped: preStringTyped,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
}

export default TypeAnimation;
