import { useRef, useLayoutEffect } from 'react';

interface EffectProps {
  prev: number;
  curr: number;
}

export interface UseScrollDirectionProps {
  effect: (positions: EffectProps) => void;
}

function getScrollPosY() {
  return window.scrollY
}

export function useScrollDirection({ effect }: UseScrollDirectionProps) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  const position = useRef(getScrollPosY());  

  function resetValues(currentPosition: number) {
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
