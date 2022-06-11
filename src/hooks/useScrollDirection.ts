import { useRef, useLayoutEffect } from 'react';

function getScrollPosY() {
  return window.scrollY
}

export function useScrollDirection(effect) {
  let timeout = null;
  const position = useRef(getScrollPosY());  

  function resetValues(currentPosition) {
    position.current = currentPosition;
    timeout = null;
  }

  function callback() {
    let currPos = getScrollPosY();

    effect({prev: position.current, curr: currPos});

    resetValues(currPos);
  }

  function handleScroll() {
    if(timeout === null) {
      timeout = setTimeout(callback, 200);
    }

    return
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
